"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils_1 = require("../utils/MathUtils");
var TextureData = /** @class */ (function () {
    function TextureData(source) {
        this.width = 0;
        this.height = 0;
        this._glTexture = null;
        this._isDynamic = false;
        this._setSource(source);
        this._uid = "texture_data_" + TextureData._counter++;
    }
    TextureData.prototype._setSource = function (source) {
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
    };
    Object.defineProperty(TextureData.prototype, "isDynamic", {
        get: function () {
            return this._isDynamic;
        },
        set: function (value) {
            this._isDynamic = value;
        },
        enumerable: false,
        configurable: true
    });
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
        if (this._isDynamic) {
            context.bindTexture(context.TEXTURE_2D, this._glTexture);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, this._source);
        }
        return this._glTexture;
    };
    TextureData.prototype.getSource = function () {
        return this._source;
    };
    Object.defineProperty(TextureData.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        enumerable: false,
        configurable: true
    });
    TextureData._counter = 0;
    return TextureData;
}());
exports.default = TextureData;
