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
Object.defineProperty(exports, "__esModule", { value: true });
var DisplayObject_1 = require("./DisplayObject");
var gl_matrix_1 = require("gl-matrix");
var Geometry_1 = require("../utils/Geometry");
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        return _super.call(this) || this;
    }
    Camera.prototype.getRevertWorldMatrix = function () {
        var out = gl_matrix_1.mat2d.create();
        gl_matrix_1.mat2d.invert(out, this.worldMatrix);
        return out;
    };
    Camera.prototype.getBounds = function () {
        return Geometry_1.default.getBoundingRect(this);
    };
    return Camera;
}(DisplayObject_1.default));
exports.default = Camera;
