"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PixelateFilter = /** @class */ (function () {
    function PixelateFilter() {
        this._save = null;
        this.scaleX = 1;
        this.scaleY = 1;
    }
    PixelateFilter.prototype.save = function (child) {
        if (child.texture !== null)
            this._save = child.texture.data.getSource();
    };
    PixelateFilter.prototype.apply = function (child) {
        if (child.texture === null)
            return;
        var dest = document.createElement("canvas");
        var ctx = dest.getContext("2d");
        dest.width = child.width;
        dest.height = child.height;
        ctx.save();
        ctx.scale(1 / this.scaleX, 1 / this.scaleY);
        ctx.drawImage(this._save, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.scale(this.scaleX, this.scaleY);
        ctx.drawImage(dest, 0, 0);
        ctx.restore();
        child.texture.data.setSource(dest);
    };
    PixelateFilter.prototype.rollback = function (child) {
        if (child.texture === null || this._save === null)
            return;
        child.texture.data.setSource(this._save);
    };
    return PixelateFilter;
}());
exports.default = PixelateFilter;
