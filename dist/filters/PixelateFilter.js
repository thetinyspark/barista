"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextureData_1 = require("../texture/TextureData");
var Texture_1 = require("../texture/Texture");
var PixelateFilter = /** @class */ (function () {
    function PixelateFilter() {
        this._save = null;
        this.scaleX = 1;
        this.scaleY = 1;
    }
    PixelateFilter.prototype.save = function (child) {
        this._save = child.texture;
    };
    PixelateFilter.prototype.apply = function (child) {
        if (this._save === null)
            return;
        var source = this._save.data.getSource();
        var dest = document.createElement("canvas");
        var ctx = dest.getContext("2d");
        dest.width = child.width;
        dest.height = child.height;
        ctx.save();
        ctx.scale(1 / this.scaleX, 1 / this.scaleY);
        ctx.drawImage(source, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.scale(this.scaleX, this.scaleY);
        ctx.drawImage(dest, 0, 0);
        ctx.restore();
        var data = new TextureData_1.default(dest);
        var texture = new Texture_1.default("pixelate_child", data, 0, 0, dest.width, dest.height);
        data.setSource(dest);
        child.texture = texture;
    };
    PixelateFilter.prototype.rollback = function (child) {
        child.texture = this._save;
        this._save = null;
    };
    return PixelateFilter;
}());
exports.default = PixelateFilter;
