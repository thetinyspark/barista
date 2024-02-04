"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOB_TYPE = exports.JSON_TYPE = exports.SOUND_TYPE = exports.VIDEO_TYPE = exports.IMAGE_TYPE = exports.LOAD_SUCCESS = exports.LOAD_ERROR = void 0;
const tiny_observer_1 = require("@thetinyspark/tiny-observer");
/**
 * An AssetsManager is used to load,retrieve,transform assets.
 * You can load assets one by one or massively with queue.
 */
class AssetsManager extends tiny_observer_1.Emitter {
    uris = new Map();
    data;
    list;
    constructor() {
        super();
        this.data = new Map();
        this.list = [];
    }
    /**
     * Returns all loaded data
     * @returns Map<string,any> loaded datas
     */
    getAll() {
        return this.data;
    }
    ;
    /**
     * Pushes a new assets to load on the queue
     * @param uri string the asset's uri
     * @param type string the asset's type
     * @param alias string the asset's alias
     */
    queue(uri, type = exports.JSON_TYPE, alias) {
        this.list.push({ uri, type, alias });
    }
    ;
    /**
     * Returns the current queue
     * @returns any[] the current queue
     */
    getQueue() {
        return this.list;
    }
    ;
    /**
     * Free the current queue
     */
    freeQueue() {
        this.list = [];
    }
    ;
    /**
     * Loads the queue and return a Promise<any[]> when any[] represents all the loaded data
     * @returns Promise<any[]>
     */
    loadQueue() {
        return Promise.all(this.list.map(cur => this.load(cur.uri, cur.type, cur.alias))).then((data) => {
            this.freeQueue();
            return data;
        });
    }
    ;
    /**
     * Returns all the uris of all the loaded data associated to the corresponding aliases
     * @returns any
     */
    getUris() {
        const result = {};
        this.uris.forEach((value, key) => {
            result[key] = value;
        });
        return result;
    }
    /**
     * Returns the current uri of the loaded data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns string
     */
    getUri(alias) {
        return this.uris.get(alias);
    }
    /**
     * Returns the data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns any
     */
    get(alias) {
        return this.data.get(alias);
    }
    ;
    /**
     * Loads an assets and return a Promise<any> where any represents the loaded data.
     * @param uri string the asset's uri you want to load
     * @param type string the asset's type
     * @param alias string the asset's alias
     * @returns Promise<any>
     */
    load(uri, type = exports.JSON_TYPE, alias) {
        return this._loadBlob(uri).then((data) => {
            switch (type) {
                case exports.IMAGE_TYPE:
                    return AssetsManager.blobToImage(data).catch(this._errorHandler);
                case exports.JSON_TYPE:
                    return AssetsManager.blobToJSON(data).catch(this._errorHandler);
                case exports.VIDEO_TYPE:
                    return AssetsManager.blobToVideo(data).catch(this._errorHandler);
                case exports.SOUND_TYPE:
                    return AssetsManager.blobToSound(data).catch(this._errorHandler);
                default:
                    return data;
            }
        }).then((data) => {
            this.set(data, alias, uri);
            this.emit(exports.LOAD_SUCCESS, data);
            return data;
        });
    }
    ;
    /**
     * Sets a specific data and associate it with an alias and an uri
     * @param data any the specific data
     * @param alias string the specific data's alias
     * @param uri string the specific data's uri
     */
    set(data, alias, uri = "") {
        this.uris.set(alias, uri);
        this.data.set(alias, data);
    }
    ;
    /**
     * Delete the data associated to a specific alias and returns boolean if it has been well deleted
     * @param alias string the loaded data alias
     * @returns boolean
     */
    delete(alias) {
        return this.getAll().delete(alias);
    }
    ;
    /**
     * Clear all loaded datas
     */
    destroy() {
        this.getAll().clear();
    }
    ;
    _errorHandler = (reason) => {
        this.emit(exports.LOAD_ERROR, reason);
    };
    _loadBlob(uri) {
        return fetch(uri).then(response => {
            if (response.status === 200) {
                return response.blob();
            }
            else {
                this._errorHandler(response.statusText);
            }
        }).catch(this._errorHandler);
    }
    // add static conversion method
    /**
     * Converts a Blob into an HTMLAudioElement.
     * @param data Blob
     * @returns Promise<HTMLAudioElement>
     */
    static blobToSound(data) {
        return Promise.reject("not supported in node js");
    }
    ;
    /**
     * Converts a Blob into an JSON Object .
     * @param data Blob
     * @returns Promise<any>
     */
    static blobToJSON(data) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                resolve(JSON.parse(reader.result.toString()));
            });
            reader.readAsText(data, "utf8");
        });
    }
    ;
    /**
     * Converts a Blob into an Image Object .
     * @param data Blob
     * @returns Promise<HTMLImageElement>
     */
    static blobToImage(data) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            const err = (e) => {
                image.removeEventListener("load", cbk);
                image.removeEventListener("error", err);
                reject("unable to load image from source");
            };
            const cbk = (e) => {
                image.removeEventListener("load", cbk);
                image.removeEventListener("error", err);
                resolve(image);
            };
            image.addEventListener("load", cbk);
            image.addEventListener("error", err);
            const objectURL = URL.createObjectURL(data);
            image.src = objectURL;
        });
    }
    ;
    /**
     * Converts a Blob into an HTMLVideoElement Object .
     * @param data Blob
     * @returns Promise<HTMLVideoElement>
     */
    static blobToVideo(data) {
        return Promise.reject("not supported in node js");
    }
    ;
}
exports.default = AssetsManager;
exports.LOAD_ERROR = "LOAD_ERROR";
exports.LOAD_SUCCESS = "LOAD_SUCCESS";
exports.IMAGE_TYPE = "IMAGE_TYPE";
exports.VIDEO_TYPE = "VIDEO_TYPE";
exports.SOUND_TYPE = "SOUND_TYPE";
exports.JSON_TYPE = "JSON_TYPE";
exports.BLOB_TYPE = "BLOB_TYPE";
