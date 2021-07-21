"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = require("./DisplayObject");
class DisplayObjectContainer extends DisplayObject_1.default {
    constructor() {
        super(...arguments);
        this._children = [];
    }
    addChild(child) {
        if (this.contains(child))
            this.removeChild(child);
        this._children.push(child);
        child.parent = this;
    }
    removeChild(child) {
        const pos = this.getChildIndex(child);
        return this.removeChildAt(pos);
    }
    addChildAt(child, index) {
        if (this.contains(child))
            this.removeChild(child);
        const before = this._children.splice(0, index);
        child.parent = this;
        this._children = [...before, child, ...this._children];
    }
    removeChildAt(index) {
        const child = this._children[index] || null;
        if (child === null)
            throw new Error("out of bound index for removeChildAt");
        this._children.splice(index, 1);
        child.parent = null;
        return child;
    }
    getChildren() {
        return this._children;
    }
    getChildIndex(child) {
        return this._children.indexOf(child);
    }
    contains(child) {
        return child.parent === this && this.getChildIndex(child) > -1;
    }
    removeChildren() {
        while (this._children.length > 0) {
            this.removeChildAt(0);
        }
    }
    update(worldMatrix, worldOpacity) {
        super.update(worldMatrix, worldOpacity);
        this._children.forEach((child) => {
            child.update(this.worldMatrix, this.worldOpacity);
        });
    }
    render(renderer) {
        super.render(renderer);
        this._children.forEach((child) => {
            child.render(renderer);
        });
    }
}
exports.default = DisplayObjectContainer;
