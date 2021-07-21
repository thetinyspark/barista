"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Geometry {
    static _isDisplayObjectContainer(value) {
        return value.getChildren !== undefined;
    }
    static getHitbox(child) {
        if (this._isDisplayObjectContainer(child)) {
            const hitboxes = child.getChildren().map(child => this.getHitbox(child));
            const allX = [];
            const allY = [];
            hitboxes.forEach((box) => {
                allX.push(box.topLeft.x, box.topRight.x, box.bottomLeft.x, box.bottomRight.x);
                allY.push(box.topLeft.y, box.topRight.y, box.bottomLeft.y, box.bottomRight.y);
            });
            const left = Math.min(...allX);
            const right = Math.max(...allX);
            const top = Math.min(...allY);
            const bottom = Math.max(...allY);
            const result = {
                topLeft: { x: left, y: top },
                topRight: { x: right, y: top },
                bottomLeft: { x: left, y: bottom },
                bottomRight: { x: right, y: bottom }
            };
            return result;
        }
        else {
            const matrix = child.worldMatrix;
            const topLeft = this.transformPoint(0, 0, matrix);
            const topRight = this.transformPoint(child.width, 0, matrix);
            const bottomLeft = this.transformPoint(0, child.height, matrix);
            const bottomRight = this.transformPoint(child.width, child.height, matrix);
            const result = {
                topLeft: topLeft,
                topRight: topRight,
                bottomLeft: bottomLeft,
                bottomRight: bottomRight
            };
            return result;
        }
    }
    static getBoundingRect(child) {
        const hitbox = this.getHitbox(child);
        const left = Math.min(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        const right = Math.max(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        const top = Math.min(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        const bottom = Math.max(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        return {
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        };
    }
    static transformPoint(x, y, matrix) {
        return {
            x: Math.round(x * matrix[0] + y * matrix[2] + matrix[4]),
            y: Math.round(x * matrix[1] + y * matrix[3] + matrix[5]),
        };
    }
    static collide(x, y, child) {
        const rect = this.getBoundingRect(child);
        const out = (x < rect.x ||
            x > rect.x + rect.width ||
            y < rect.y ||
            y > rect.y + rect.height);
        return !out;
    }
}
exports.default = Geometry;
