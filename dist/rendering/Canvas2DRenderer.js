"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Canvas2DRenderer {
    constructor() {
        this._children = [];
    }
    add(child) {
        this._children.push(child);
    }
    getChildren() {
        return this._children;
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
            context.globalAlpha = context.globalAlpha * child.opacity;
            context.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            context.drawImage(child.texture, 0, 0, child.texture.width, child.texture.height, 0, 0, child.width, child.height);
            context.restore();
        });
    }
}
exports.default = Canvas2DRenderer;
