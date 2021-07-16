"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_TYPE = exports.IMAGE_TYPE = void 0;
class AssetsManager {
    constructor() {
        this.getAll = () => {
            return this.data;
        };
        this.queue = (uri, type = exports.JSON_TYPE, alias) => {
            this.list.push({ uri, type, alias });
        };
        this.getQueue = () => {
            return this.list;
        };
        this.freeQueue = () => {
            this.list = [];
        };
        this.loadQueue = () => {
            return Promise.all(this.list.map(cur => this.load(cur.uri, cur.type, cur.alias))).then((data) => {
                this.freeQueue();
                return data;
            });
        };
        this.get = (alias) => {
            return this.data.get(alias);
        };
        this.load = (uri, type = exports.JSON_TYPE, alias) => {
            let promise = null;
            switch (type) {
                case exports.IMAGE_TYPE:
                    promise = this.loadImage(uri);
                    break;
                case exports.JSON_TYPE:
                    promise = this.loadJSON(uri);
                    break;
                default:
                    return Promise.reject("unhandled data type");
            }
            return promise.then((data) => {
                this.set(data, alias);
                return data;
            });
        };
        this.set = (data, alias) => {
            this.data.set(alias, data);
        };
        this.delete = (alias) => {
            return this.getAll().delete(alias);
        };
        this.destroy = () => {
            this.getAll().clear();
        };
        this.loadJSON = (uri) => {
            return fetch(uri).then(response => response.json());
        };
        this.loadImage = (uri) => {
            return fetch(uri).then(response => response.blob()).then((data) => {
                return new Promise((resolve) => {
                    const image = new Image();
                    image.addEventListener("load", (e) => {
                        resolve(image);
                    });
                    const objectURL = URL.createObjectURL(data);
                    image.src = objectURL;
                });
            });
        };
        this.data = new Map();
        this.list = [];
    }
}
exports.default = AssetsManager;
exports.IMAGE_TYPE = "IMAGE_TYPE";
exports.JSON_TYPE = "JSON_TYPE";
