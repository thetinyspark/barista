"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils_1 = require("../utils/MathUtils");
/**
 * The TextureData class is the base class for containing graphic source.
 * It defines a width, a height and a dynamic property
 * It can create,hold and return a WebGLTexture from the graphic source.
 */
var TextureData = /** @class */ (function () {
    /**
     * Creates a new TextureData object which hold the graphic source passed in param.
     * @param source CanvasImageSource the graphic source
     */
    function TextureData(source) {
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
    TextureData.prototype.setSource = function (source) {
        var nwidth = MathUtils_1.default.getNextPowerOf2(source.width);
        var nheight = MathUtils_1.default.getNextPowerOf2(source.height);
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = nwidth;
        canvas.height = nheight;
        context.drawImage(source, 0, 0);
        this._source = canvas;
        this.width = nwidth;
        this.height = nheight;
        this._updateNextFrame = true;
    };
    /**
     * Returns the current TextureData source
     * @returns CanvasImageSource
     */
    TextureData.prototype.getSource = function () {
        return this._source;
    };
    /**
     * Returns a WebGLTexture object created from the source.
     * If the TextureData is dynamic, the WebGLTexture will
     * be refreshed and sent to the rendering context passed in param.
     * @param context WebGLRenderingContext
     * @returns WebGLTexture object
     */
    TextureData.prototype.getGlTexture = function (context) {
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
    };
    Object.defineProperty(TextureData.prototype, "uid", {
        /**
         * The TextureData unique id
         */
        get: function () {
            return this._uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextureData.prototype, "isDynamic", {
        /**
         * Says if current TextureData is dynamic or not
         * @returns boolean
         */
        get: function () {
            return this._isDynamic;
        },
        /**
         * Sets the dynamic property of the current TextureData
         */
        set: function (value) {
            this._isDynamic = value;
        },
        enumerable: false,
        configurable: true
    });
    TextureData._counter = 0;
    return TextureData;
}());
exports.default = TextureData;
