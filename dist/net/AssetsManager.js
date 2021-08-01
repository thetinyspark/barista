"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_TYPE = exports.IMAGE_TYPE = void 0;
var AssetsManager = /** @class */ (function () {
    function AssetsManager() {
        var _this = this;
        this.getAll = function () {
            return _this.data;
        };
        this.queue = function (uri, type, alias) {
            if (type === void 0) { type = exports.JSON_TYPE; }
            _this.list.push({ uri: uri, type: type, alias: alias });
        };
        this.getQueue = function () {
            return _this.list;
        };
        this.freeQueue = function () {
            _this.list = [];
        };
        this.loadQueue = function () {
            return Promise.all(_this.list.map(function (cur) { return _this.load(cur.uri, cur.type, cur.alias); })).then(function (data) {
                _this.freeQueue();
                return data;
            });
        };
        this.get = function (alias) {
            return _this.data.get(alias);
        };
        this.load = function (uri, type, alias) {
            if (type === void 0) { type = exports.JSON_TYPE; }
            var promise = null;
            switch (type) {
                case exports.IMAGE_TYPE:
                    promise = _this.loadImage(uri);
                    break;
                case exports.JSON_TYPE:
                    promise = _this.loadJSON(uri);
                    break;
                default:
                    return Promise.reject("unhandled data type");
            }
            return promise.then(function (data) {
                _this.set(data, alias);
                return data;
            });
        };
        this.set = function (data, alias) {
            _this.data.set(alias, data);
        };
        this.delete = function (alias) {
            return _this.getAll().delete(alias);
        };
        this.destroy = function () {
            _this.getAll().clear();
        };
        this.loadJSON = function (uri) {
            return fetch(uri).then(function (response) { return response.json(); });
        };
        this.loadImage = function (uri) {
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
        this.data = new Map();
        this.list = [];
    }
    return AssetsManager;
}());
exports.default = AssetsManager;
exports.IMAGE_TYPE = "IMAGE_TYPE";
exports.JSON_TYPE = "JSON_TYPE";
