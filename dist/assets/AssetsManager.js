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
    AssetsManager.prototype.getAll = function () {
        return this.data;
    };
    ;
    AssetsManager.prototype.queue = function (uri, type, alias) {
        if (type === void 0) { type = exports.JSON_TYPE; }
        this.list.push({ uri: uri, type: type, alias: alias });
    };
    ;
    AssetsManager.prototype.getQueue = function () {
        return this.list;
    };
    ;
    AssetsManager.prototype.freeQueue = function () {
        this.list = [];
    };
    ;
    AssetsManager.prototype.loadQueue = function () {
        var _this = this;
        return Promise.all(this.list.map(function (cur) { return _this.load(cur.uri, cur.type, cur.alias); })).then(function (data) {
            _this.freeQueue();
            return data;
        });
    };
    ;
    AssetsManager.prototype.getUris = function () {
        var result = {};
        this.uris.forEach(function (value, key) {
            result[key] = value;
        });
        return result;
    };
    AssetsManager.prototype.getUri = function (alias) {
        return this.uris.get(alias);
    };
    AssetsManager.prototype.get = function (alias) {
        return this.data.get(alias);
    };
    ;
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
    AssetsManager.prototype.set = function (data, alias, uri) {
        if (uri === void 0) { uri = ""; }
        this.uris.set(alias, uri);
        this.data.set(alias, data);
    };
    ;
    AssetsManager.prototype.delete = function (alias) {
        return this.getAll().delete(alias);
    };
    ;
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
