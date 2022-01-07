"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanvasUtils_1 = require("../utils/CanvasUtils");
const MathUtils_1 = require("../utils/MathUtils");
/**
 * The TextureData class is the base class for containing graphic source.
 * It defines a width, a height and a dynamic property
 * It can create,hold and return a WebGLTexture from the graphic source.
 */
class TextureData {
    /**
     * Creates a new TextureData object which hold the graphic source passed in param.
     * @param source CanvasImageSource the graphic source
     */
    constructor(source) {
        /**
         * The width of the texture data
         */
        this.width = 0;
        /**
         * The height of the texture data
         */
        this.height = 0;
        this._glTexture = null;
        this._isDynamic = false;
        this._updateNextFrame = false;
        this.setSource(source);
        this._uid = "texture_data_" + TextureData._counter++;
    }
    /**
     * Sets the current TextureData source
     * @param source CanvasImageSource
     */
    setSource(source) {
        const nwidth = MathUtils_1.default.getNextPowerOf2(source.width);
        const nheight = MathUtils_1.default.getNextPowerOf2(source.height);
        const canvas = CanvasUtils_1.default.create();
        const context = canvas.getContext("2d");
        canvas.width = nwidth;
        canvas.height = nheight;
        context.drawImage(source, 0, 0);
        this._source = canvas;
        this.width = nwidth;
        this.height = nheight;
        this._updateNextFrame = true;
    }
    /**
     * Returns the current TextureData source
     * @returns CanvasImageSource
     */
    getSource() {
        return this._source;
    }
    /**
     * Returns a WebGLTexture object created from the source.
     * If the TextureData is dynamic, the WebGLTexture will
     * be refreshed and sent to the rendering context passed in param.
     * @param context WebGLRenderingContext
     * @returns WebGLTexture object
     */
    getGlTexture(context) {
        if (this._glTexture === null) {
            this._glTexture = context.createTexture();
            context.bindTexture(context.TEXTURE_2D, this._glTexture);
            context.pixelStorei(context.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, this._source);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.LINEAR);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR);
            context.bindTexture(context.TEXTURE_2D, null);
        }
        if (this._isDynamic || this._updateNextFrame) {
            this._updateNextFrame = false;
            context.bindTexture(context.TEXTURE_2D, this._glTexture);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, this._source);
        }
        return this._glTexture;
    }
    /**
     * The TextureData unique id
     */
    get uid() {
        return this._uid;
    }
    /**
     * Says if current TextureData is dynamic or not
     * @returns boolean
     */
    get isDynamic() {
        return this._isDynamic;
    }
    /**
     * Sets the dynamic property of the current TextureData
     */
    set isDynamic(value) {
        this._isDynamic = value;
    }
}
exports.default = TextureData;
TextureData._counter = 0;
