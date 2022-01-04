"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextureData_1 = require("./TextureData");
/**
 * The Texture class is the base class for defining DisplayObjects textures.
 * It relies on a TextureData object, which contains the graphic source.
 * A Texture object represents a portion of the original source.
 */
var Texture = /** @class */ (function () {
    function Texture(id, data, sx, sy, sw, sh) {
        if (id === void 0) { id = ""; }
        if (sx === void 0) { sx = 0; }
        if (sy === void 0) { sy = 0; }
        if (sw === void 0) { sw = 0; }
        if (sh === void 0) { sh = 0; }
        /**
         * The x coordinates of the source portion to be drawn
         */
        this.sx = 0;
        /**
         * The y coordinates of the source portion to be drawn
         */
        this.sy = 0;
        /**
         * The width of the source portion to be drawn
         */
        this.sw = 0;
        /**
         * The height of the source portion to be drawn
         */
        this.sh = 0;
        /**
         * The topleft uv coordinates of source portion to be drawn
         */
        this.topLeftUv = { u: 0, v: 0 };
        /**
         * The topright uv coordinates of source portion to be drawn
         */
        this.topRightUv = { u: 0, v: 0 };
        /**
         * The bottomleft uv coordinates of source portion to be drawn
         */
        this.bottomLeftUv = { u: 0, v: 0 };
        /**
         * The bottomright uv coordinates of source portion to be drawn
         */
        this.bottomRightUv = { u: 0, v: 0 };
        /**
         * The id of the Texture object
         */
        this.id = "";
        this._data = data;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.id = id;
        this.calcUv();
    }
    /**
     * Calculates uv coordinates according to the
     * source width and height, and the sx, sy, sw, sh
     * properties of the Texture object
     */
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
        /**
         * Returns the TextureData unique id
         * @returns string
         */
        get: function () {
            return this._data.uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "data", {
        /**
         * Returns the underlying TextureData
         * @returns TextureData
         */
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Texture.prototype, "source", {
        /**
         * Returns the graphic source
         * @returns CanvasImageSource
         */
        get: function () {
            return this._data.getSource();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a sub texture from this Texture object
     * @param id string
     * @param sx number
     * @param sy number
     * @param sw number
     * @param sh number
     * @returns Texture object
     */
    Texture.prototype.createSubTexture = function (id, sx, sy, sw, sh) {
        return new Texture(id, this._data, sx, sy, sw, sh);
    };
    /**
     * Creates A set of subtextures
     * @param zones {id:string, sx:number, sy:number, sw:number, sh:number}[]
     * @returns Texture[] object
     */
    Texture.prototype.createSubTextures = function (zones) {
        var _this = this;
        return zones.map(function (zone) { return _this.createSubTexture(zone.id, zone.sx, zone.sy, zone.sw, zone.sh); });
    };
    /**
     * Creates a new Texture Object, and its underlying
     * TextureData object from a graphic source
     * @param id string The new Texture id
     * @param source CanvasImageSource The graphic source
     * @returns Texture object
     */
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
