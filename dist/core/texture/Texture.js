"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextureData_1 = require("./TextureData");
/**
 * The Texture class is the base class for defining DisplayObjects textures.
 * It relies on a TextureData object, which contains the graphic source.
 * A Texture object represents a portion of the original source.
 */
class Texture {
    _data;
    /**
     * The x coordinates of the source portion to be drawn
     */
    sx = 0;
    /**
     * The y coordinates of the source portion to be drawn
     */
    sy = 0;
    /**
     * The width of the source portion to be drawn
     */
    sw = 0;
    /**
     * The height of the source portion to be drawn
     */
    sh = 0;
    /**
     * The topleft uv coordinates of source portion to be drawn
     */
    topLeftUv = { u: 0, v: 0 };
    /**
     * The topright uv coordinates of source portion to be drawn
     */
    topRightUv = { u: 0, v: 0 };
    /**
     * The bottomleft uv coordinates of source portion to be drawn
     */
    bottomLeftUv = { u: 0, v: 0 };
    /**
     * The bottomright uv coordinates of source portion to be drawn
     */
    bottomRightUv = { u: 0, v: 0 };
    /**
     * The id of the Texture object
     */
    id = "";
    constructor(id = "", data, sx = 0, sy = 0, sw = 0, sh = 0) {
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
    calcUv() {
        const width = this._data.getSource().width;
        const height = this._data.getSource().height;
        const xl = this.sx / width;
        const xr = (this.sx + this.sw) / width;
        const yt = (this.sy / height);
        const yb = ((this.sy + this.sh) / height);
        this.topLeftUv.u = xl;
        this.topLeftUv.v = yt;
        this.topRightUv.u = xr;
        this.topRightUv.v = yt;
        this.bottomLeftUv.u = xl;
        this.bottomLeftUv.v = yb;
        this.bottomRightUv.u = xr;
        this.bottomRightUv.v = yb;
    }
    /**
     * Returns the TextureData unique id
     * @returns string
     */
    get textureUid() {
        return this._data.uid;
    }
    /**
     * Returns the underlying TextureData
     * @returns TextureData
     */
    get data() {
        return this._data;
    }
    /**
     * Returns the graphic source
     * @returns CanvasImageSource
     */
    get source() {
        return this._data.getSource();
    }
    /**
     * Creates a sub texture from this Texture object
     * @param id string
     * @param sx number
     * @param sy number
     * @param sw number
     * @param sh number
     * @returns Texture object
     */
    createSubTexture(id, sx, sy, sw, sh) {
        return new Texture(id, this._data, sx, sy, sw, sh);
    }
    /**
     * Creates A set of subtextures
     * @param zones {id:string, sx:number, sy:number, sw:number, sh:number}[]
     * @returns Texture[] object
     */
    createSubTextures(zones) {
        return zones.map((zone) => this.createSubTexture(zone.id, zone.sx, zone.sy, zone.sw, zone.sh));
    }
    /**
     * Creates a new Texture Object, and its underlying
     * TextureData object from a graphic source
     * @param id string The new Texture id
     * @param source CanvasImageSource The graphic source
     * @returns Texture object
     */
    static createFromSource(id, source) {
        const data = new TextureData_1.default(source);
        if (source instanceof HTMLVideoElement) {
            data.isDynamic = true;
        }
        return new Texture(id, data, 0, 0, data.width, data.height);
    }
}
exports.default = Texture;
