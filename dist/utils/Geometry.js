"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isser_1 = require("./isser");
var Geometry = /** @class */ (function () {
    function Geometry() {
    }
    Geometry.getHitbox = function (child) {
        var _this = this;
        if (isser_1.isDisplayObjectContainer(child)) {
            var hitboxes = child.getChildren().map(function (child) { return _this.getHitbox(child); });
            var allX_1 = [];
            var allY_1 = [];
            hitboxes.forEach(function (box) {
                allX_1.push(box.topLeft.x, box.topRight.x, box.bottomLeft.x, box.bottomRight.x);
                allY_1.push(box.topLeft.y, box.topRight.y, box.bottomLeft.y, box.bottomRight.y);
            });
            var left = Math.min.apply(Math, allX_1);
            var right = Math.max.apply(Math, allX_1);
            var top_1 = Math.min.apply(Math, allY_1);
            var bottom = Math.max.apply(Math, allY_1);
            var result = {
                topLeft: { x: left, y: top_1 },
                topRight: { x: right, y: top_1 },
                bottomLeft: { x: left, y: bottom },
                bottomRight: { x: right, y: bottom }
            };
            return result;
        }
        else {
            var matrix = child.worldMatrix;
            var topLeft = this.transformPoint(0, 0, matrix);
            var topRight = this.transformPoint(child.width, 0, matrix);
            var bottomLeft = this.transformPoint(0, child.height, matrix);
            var bottomRight = this.transformPoint(child.width, child.height, matrix);
            var result = {
                topLeft: topLeft,
                topRight: topRight,
                bottomLeft: bottomLeft,
                bottomRight: bottomRight
            };
            return result;
        }
    };
    Geometry.getBoundingRect = function (child) {
        var hitbox = this.getHitbox(child);
        var left = Math.min(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        var right = Math.max(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        var top = Math.min(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        var bottom = Math.max(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        return {
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        };
    };
    Geometry.transformPoint = function (x, y, matrix) {
        return {
            x: Math.round(x * matrix[0] + y * matrix[2] + matrix[4]),
            y: Math.round(x * matrix[1] + y * matrix[3] + matrix[5]),
        };
    };
    Geometry.collide = function (x, y, child) {
        var rect = this.getBoundingRect(child);
        var out = (x < rect.x ||
            x > rect.x + rect.width ||
            y < rect.y ||
            y > rect.y + rect.height);
        return !out;
    };
    return Geometry;
}());
exports.default = Geometry;
