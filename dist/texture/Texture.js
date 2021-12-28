"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextureData_1 = require("./TextureData");
var Texture = /** @class */ (function () {
    function Texture(id, data, sx, sy, sw, sh) {
        if (id === void 0) { id = ""; }
        if (sx === void 0) { sx = 0; }
        if (sy === void 0) { sy = 0; }
        if (sw === void 0) { sw = 0; }
        if (sh === void 0) { sh = 0; }
        this.sx = 0;
        this.sy = 0;
        this.sw = 0;
        this.sh = 0;
        this.topLeftUv = { u: 0, v: 0 };
        this.topRightUv = { u: 0, v: 0 };
        this.bottomLeftUv = { u: 0, v: 0 };
        this.bottomRightUv = { u: 0, v: 0 };
        this.id = "";
        this._data = data;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.id = id;
        this.calcUv();
    }
    Texture.prototype.calcUv = function () {
        var width = this._data.getSource().width;
        var height = this._data.getSource().height;
        var xl = this.sx / width;
        var xr = (this.sx + this.sw) / width;
        var yt = (this.sy / height);
        var yb = ((this.sy + this.sh) / height);
        this.topLeftUv.u = xl;
        this.topLeftUv.v = yt;
        this.topRightUv.u = xr;
        this.topRightUv.v = yt;
        this.bottomLeftUv.u = xl;
        this.bottomLeftUv.v = yb;
        this.bottomRightUv.u = xr;
        this.bottomRightUv.v = yb;
    };
    Object.defineProperty(Texture.prototype, "textureUid", {
        get: function () {
            return this._data.uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "source", {
        get: function () {
            return this._data.getSource();
        },
        enumerable: false,
        configurable: true
    });
    Texture.prototype.createSubTexture = function (id, sx, sy, sw, sh) {
        return new Texture(id, this._data, sx, sy, sw, sh);
    };
    Texture.prototype.createSubTextures = function (zones) {
        var _this = this;
        return zones.map(function (zone) { return _this.createSubTexture(zone.id, zone.sx, zone.sy, zone.sw, zone.sh); });
    };
    Texture.createFromSource = function (id, source) {
        var data = new TextureData_1.default(source);
        if (source instanceof HTMLVideoElement) {
            data.isDynamic = true;
        }
        return new Texture(id, data, 0, 0, data.width, data.height);
    };
    return Texture;
}());
exports.default = Texture;
