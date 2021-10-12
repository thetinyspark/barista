"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_TYPE = exports.IMAGE_TYPE = void 0;
var AssetsManager = /** @class */ (function () {
    function AssetsManager() {
        this.uris = new Map();
        this.data = new Map();
        this.list = [];
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
        var promise = null;
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
        return promise.then(function (data) {
            _this.set(data, alias, uri);
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
    AssetsManager.prototype.loadJSON = function (uri) {
        return fetch(uri).then(function (response) { return response.json(); });
    };
    ;
    AssetsManager.prototype.loadImage = function (uri) {
        return fetch(uri).then(function (response) { return response.blob(); }).then(function (data) {
            return new Promise(function (resolve) {
                var image = new Image();
                image.addEventListener("load", function (e) {
                    resolve(image);
                });
                var objectURL = URL.createObjectURL(data);
                image.src = objectURL;
            });
        });
    };
    ;
    return AssetsManager;
}());
exports.default = AssetsManager;
exports.IMAGE_TYPE = "IMAGE_TYPE";
exports.JSON_TYPE = "JSON_TYPE";
