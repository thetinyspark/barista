"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOB_TYPE = exports.JSON_TYPE = exports.SOUND_TYPE = exports.VIDEO_TYPE = exports.IMAGE_TYPE = exports.LOAD_SUCCESS = exports.LOAD_ERROR = void 0;
var tiny_observer_1 = require("@thetinyspark/tiny-observer");
/**
 * An AssetsManager is used to load,retrieve,transform assets.
 * You can load assets one by one or massively with queue.
 */
var AssetsManager = /** @class */ (function (_super) {
    __extends(AssetsManager, _super);
    function AssetsManager() {
        var _this = _super.call(this) || this;
        _this.uris = new Map();
        _this._errorHandler = function (reason) {
            _this.emit(exports.LOAD_ERROR, reason);
        };
        _this.data = new Map();
        _this.list = [];
        return _this;
    }
    /**
     * Returns all loaded data
     * @returns Map<string,any> loaded datas
     */
    AssetsManager.prototype.getAll = function () {
        return this.data;
    };
    ;
    /**
     * Pushes a new assets to load on the queue
     * @param uri string the asset's uri
     * @param type string the asset's type
     * @param alias string the asset's alias
     */
    AssetsManager.prototype.queue = function (uri, type, alias) {
        if (type === void 0) { type = exports.JSON_TYPE; }
        this.list.push({ uri: uri, type: type, alias: alias });
    };
    ;
    /**
     * Returns the current queue
     * @returns any[] the current queue
     */
    AssetsManager.prototype.getQueue = function () {
        return this.list;
    };
    ;
    /**
     * Free the current queue
     */
    AssetsManager.prototype.freeQueue = function () {
        this.list = [];
    };
    ;
    /**
     * Loads the queue and return a Promise<any[]> when any[] represents all the loaded data
     * @returns Promise<any[]>
     */
    AssetsManager.prototype.loadQueue = function () {
        var _this = this;
        return Promise.all(this.list.map(function (cur) { return _this.load(cur.uri, cur.type, cur.alias); })).then(function (data) {
            _this.freeQueue();
            return data;
        });
    };
    ;
    /**
     * Returns all the uris of all the loaded data associated to the corresponding aliases
     * @returns any
     */
    AssetsManager.prototype.getUris = function () {
        var result = {};
        this.uris.forEach(function (value, key) {
            result[key] = value;
        });
        return result;
    };
    /**
     * Returns the current uri of the loaded data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns string
     */
    AssetsManager.prototype.getUri = function (alias) {
        return this.uris.get(alias);
    };
    /**
     * Returns the data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns any
     */
    AssetsManager.prototype.get = function (alias) {
        return this.data.get(alias);
    };
    ;
    /**
     * Loads an assets and return a Promise<any> where any represents the loaded data.
     * @param uri string the asset's uri you want to load
     * @param type string the asset's type
     * @param alias string the asset's alias
     * @returns Promise<any>
     */
    AssetsManager.prototype.load = function (uri, type, alias) {
        var _this = this;
        if (type === void 0) { type = exports.JSON_TYPE; }
        return this._loadBlob(uri).then(function (data) {
            switch (type) {
                case exports.IMAGE_TYPE:
                    return AssetsManager.blobToImage(data).catch(_this._errorHandler);
                case exports.JSON_TYPE:
                    return AssetsManager.blobToJSON(data).catch(_this._errorHandler);
                case exports.VIDEO_TYPE:
                    return AssetsManager.blobToVideo(data).catch(_this._errorHandler);
                case exports.SOUND_TYPE:
                    return AssetsManager.blobToSound(data).catch(_this._errorHandler);
                default:
                    return data;
            }
        }).then(function (data) {
            _this.set(data, alias, uri);
            _this.emit(exports.LOAD_SUCCESS, data);
            return data;
        });
    };
    ;
    /**
     * Sets a specific data and associate it with an alias and an uri
     * @param data any the specific data
     * @param alias string the specific data's alias
     * @param uri string the specific data's uri
     */
    AssetsManager.prototype.set = function (data, alias, uri) {
        if (uri === void 0) { uri = ""; }
        this.uris.set(alias, uri);
        this.data.set(alias, data);
    };
    ;
    /**
     * Delete the data associated to a specific alias and returns boolean if it has been well deleted
     * @param alias string the loaded data alias
     * @returns boolean
     */
    AssetsManager.prototype.delete = function (alias) {
        return this.getAll().delete(alias);
    };
    ;
    /**
     * Clear all loaded datas
     */
    AssetsManager.prototype.destroy = function () {
        this.getAll().clear();
    };
    ;
    AssetsManager.prototype._loadBlob = function (uri) {
        var _this = this;
        return fetch(uri).then(function (response) {
            if (response.status === 200) {
                return response.blob();
            }
            else {
                _this._errorHandler(response.statusText);
            }
        }).catch(this._errorHandler);
    };
    // add static conversion method
    /**
     * Converts a Blob into an HTMLAudioElement.
     * @param data Blob
     * @returns Promise<HTMLAudioElement>
     */
    AssetsManager.blobToSound = function (data) {
        return new Promise(function (resolve, reject) {
            var audio = document.createElement("audio");
            var objectURL = URL.createObjectURL(data);
            var cbk = function (e) {
                audio.removeEventListener("loadeddata", cbk);
                audio.removeEventListener("error", err);
                resolve(audio);
            };
            var err = function (e) {
                audio.removeEventListener("loadeddata", cbk);
                audio.removeEventListener("error", err);
                reject("unable to load audio from source");
            };
            audio.addEventListener("loadeddata", cbk);
            audio.addEventListener("error", err);
            audio.src = objectURL;
            audio.load();
        });
    };
    ;
    /**
     * Converts a Blob into an JSON Object .
     * @param data Blob
     * @returns Promise<any>
     */
    AssetsManager.blobToJSON = function (data) {
        return new Promise(function (resolve) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                resolve(JSON.parse(reader.result.toString()));
            });
            reader.readAsText(data, "utf8");
        });
    };
    ;
    /**
     * Converts a Blob into an Image Object .
     * @param data Blob
     * @returns Promise<HTMLImageElement>
     */
    AssetsManager.blobToImage = function (data) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            var err = function (e) {
                image.removeEventListener("load", cbk);
                image.removeEventListener("error", err);
                reject("unable to load image from source");
            };
            var cbk = function (e) {
                image.removeEventListener("load", cbk);
                image.removeEventListener("error", err);
                resolve(image);
            };
            image.addEventListener("load", cbk);
            image.addEventListener("error", err);
            var objectURL = URL.createObjectURL(data);
            image.src = objectURL;
        });
    };
    ;
    /**
     * Converts a Blob into an HTMLVideoElement Object .
     * @param data Blob
     * @returns Promise<HTMLVideoElement>
     */
    AssetsManager.blobToVideo = function (data) {
        return new Promise(function (resolve, reject) {
            var video = document.createElement("video");
            var objectURL = URL.createObjectURL(data);
            var cbk = function (e) {
                video.removeEventListener("loadeddata", cbk);
                video.removeEventListener("error", err);
                resolve(video);
            };
            var err = function (e) {
                video.removeEventListener("loadeddata", cbk);
                video.removeEventListener("error", err);
                reject("unable to load video from source");
            };
            video.addEventListener("loadeddata", cbk);
            video.addEventListener("error", err);
            video.src = objectURL;
            video.load();
        });
    };
    ;
    return AssetsManager;
}(tiny_observer_1.Emitter));
exports.default = AssetsManager;
exports.LOAD_ERROR = "LOAD_ERROR";
exports.LOAD_SUCCESS = "LOAD_SUCCESS";
exports.IMAGE_TYPE = "IMAGE_TYPE";
exports.VIDEO_TYPE = "VIDEO_TYPE";
exports.SOUND_TYPE = "SOUND_TYPE";
exports.JSON_TYPE = "JSON_TYPE";
exports.BLOB_TYPE = "BLOB_TYPE";
