"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = require("./DisplayObject");
/**
 * The DisplayObjectContainer class is the base class for every DisplayObjects containers.
 * It supports basic functionality like adding, removing, containing children at a specific index or not.
 * It inherits from DisplayObject, so it could be transformed, but it's texture property is useless.
 */
var DisplayObjectContainer = /** @class */ (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._children = [];
        return _this;
    }
    DisplayObjectContainer.prototype.addChild = function (child) {
        if (this.contains(child))
            this.removeChild(child);
        this._children.push(child);
        child.parent = this;
    };
    DisplayObjectContainer.prototype.removeChild = function (child) {
        var pos = this.getChildIndex(child);
        return this.removeChildAt(pos);
    };
    DisplayObjectContainer.prototype.addChildAt = function (child, index) {
        if (this.contains(child))
            this.removeChild(child);
        var before = this._children.splice(0, index);
        child.parent = this;
        this._children = __spreadArray(__spreadArray(__spreadArray([], before), [child]), this._children);
    };
    DisplayObjectContainer.prototype.removeChildAt = function (index) {
        var child = this._children[index] || null;
        if (child === null)
            throw new Error("out of bound index for removeChildAt");
        this._children.splice(index, 1);
        child.parent = null;
        return child;
    };
    DisplayObjectContainer.prototype.getChildren = function () {
        return this._children;
    };
    DisplayObjectContainer.prototype.getChildIndex = function (child) {
        return this._children.indexOf(child);
    };
    DisplayObjectContainer.prototype.contains = function (child) {
        return child.parent === this && this.getChildIndex(child) > -1;
    };
    DisplayObjectContainer.prototype.removeChildren = function () {
        while (this._children.length > 0) {
            this.removeChildAt(0);
        }
    };
    DisplayObjectContainer.prototype.update = function (worldMatrix, worldOpacity) {
        var _this = this;
        _super.prototype.update.call(this, worldMatrix, worldOpacity);
        this._children.forEach(function (child) {
            child.update(_this.worldMatrix, _this.worldOpacity);
        });
    };
    DisplayObjectContainer.prototype.render = function (renderer) {
        _super.prototype.render.call(this, renderer);
        this._children.forEach(function (child) {
            child.render(renderer);
        });
    };
    return DisplayObjectContainer;
}(DisplayObject_1.default));
exports.default = DisplayObjectContainer;
