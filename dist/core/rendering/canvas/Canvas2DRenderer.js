"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../index");
/**
 * The Canvas2DRenderer class is the base class for non GPU 2d rendering.
 */
class Canvas2DRenderer {
    _children = [];
    _canvas;
    _context;
    constructor() {
        this._canvas = index_1.CanvasUtils.create();
        this._context = this._canvas.getContext("2d");
    }
    getNumDrawCalls() {
        return this._children.length;
    }
    getContext() {
        return this._context;
    }
    getCanvas() {
        return this._canvas;
    }
    add(child) {
        this._children.push(child);
    }
    getChildren() {
        return this._children;
    }
    setChildren(objects) {
        this._children = objects;
    }
    clear() {
        this._children = [];
    }
    draw(canvas, context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this._children.forEach((child) => {
            if (child.texture === null)
                return;
            const matrix = child.worldMatrix;
            context.save();
            context.globalAlpha = child.worldOpacity;
            context.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            context.drawImage(child.texture.source, child.texture.sx, child.texture.sy, child.texture.sw, child.texture.sh, 0, 0, child.width, child.height);
            context.restore();
        });
    }
}
exports.default = Canvas2DRenderer;
