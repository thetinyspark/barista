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
            context.globalAlpha = child.worldOpacity;
            context.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            context.drawImage(child.texture.data, child.texture.sx, child.texture.sy, child.texture.sw, child.texture.sh, 0, 0, child.width, child.height);
            context.restore();
        });
    }
}
exports.default = Canvas2DRenderer;
