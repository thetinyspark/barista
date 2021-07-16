"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = require("./DisplayObject");
class Bitmap extends DisplayObject_1.default {
    constructor() {
        super();
        this.texture = null;
    }
    render(context) {
        context.save();
        context.drawImage(this.texture, 0, 0, this.texture.width, this.texture.height, 0, 0, this.width, this.height);
        context.restore();
    }
}
exports.default = Bitmap;
