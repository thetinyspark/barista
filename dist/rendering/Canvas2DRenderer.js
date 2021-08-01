"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas2DRenderer = /** @class */ (function () {
    function Canvas2DRenderer() {
        this._children = [];
        this._canvas = document.createElement("canvas");
        this._context = this._canvas.getContext("2d");
    }
    Canvas2DRenderer.prototype.getContext = function () {
        return this._context;
    };
    Canvas2DRenderer.prototype.getCanvas = function () {
        return this._canvas;
    };
    Canvas2DRenderer.prototype.add = function (child) {
        this._children.push(child);
    };
    Canvas2DRenderer.prototype.getChildren = function () {
        return this._children;
    };
    Canvas2DRenderer.prototype.clear = function () {
        this._children = [];
    };
    Canvas2DRenderer.prototype.draw = function (canvas, context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this._children.forEach(function (child) {
            if (child.texture === null)
                return;
            var matrix = child.worldMatrix;
            context.save();
            context.globalAlpha = child.worldOpacity;
            context.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            context.drawImage(child.texture.source, child.texture.sx, child.texture.sy, child.texture.sw, child.texture.sh, 0, 0, child.width, child.height);
            context.restore();
        });
    };
    return Canvas2DRenderer;
}());
exports.default = Canvas2DRenderer;
