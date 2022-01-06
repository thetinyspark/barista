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
/**
 * The Camera class is the base class for every Camera.
 * A camera is used to look at the scene from a specific point of view.
 * It inherits from DisplayObject so you can transform it, BUT
 * it will result on a visual "opposite" transformation in the final scene.
 */
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        return _super.call(this) || this;
    }
    /**
    * Returns the opposite of the camera's worldMatrix.
    * It is used by the scene (Stage) to simulate a certain
    * point of view.
    **/
    Camera.prototype.getRevertWorldMatrix = function () {
        var out = gl_matrix_1.mat2d.create();
        gl_matrix_1.mat2d.invert(out, this.worldMatrix);
        return out;
    };
    /**
    * Returns the real bounds of the camera.
    * You could use it on clipping strategy.
    **/
    Camera.prototype.getBounds = function () {
        return Geometry_1.default.getBoundingRect(this);
    };
    return Camera;
}(DisplayObject_1.default));
exports.default = Camera;
