"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BoundingBox {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    toString() {
        return '[x:' + this.x + ',y:' + this.y + ',width:' + this.width + ',height:' + this.height + ']';
    }
    collideBox(box) {
        return (this.collidePoint(box.x, box.y) ||
            this.collidePoint(box.x + box.width, box.y) ||
            this.collidePoint(box.x, box.y + box.height) ||
            this.collidePoint(box.x + box.width, box.y + box.height) ||
            box.collidePoint(this.x, this.y) ||
            box.collidePoint(this.x + this.width, this.y) ||
            box.collidePoint(this.x, this.y + this.height) ||
            box.collidePoint(this.x + this.width, this.y + this.height));
    }
    collidePoint(x, y) {
        return (x < this.x ||
            y < this.y ||
            x > this.x + this.width ||
            y > this.y + this.height) ? false : true;
    }
    getMidX() {
        return this.x + (this.width / 2);
    }
    getMidY() {
        return this.y + (this.height / 2);
    }
    splitVertical() {
        return [
            new BoundingBox(this.x, this.y, this.width / 2, this.height),
            new BoundingBox(this.getMidX(), this.y, this.width / 2, this.height),
        ];
    }
    splitHorizontal() {
        return [
            new BoundingBox(this.x, this.y, this.width, this.height / 2),
            new BoundingBox(this.x, this.getMidY(), this.width, this.height / 2)
        ];
    }
}
exports.default = BoundingBox;
