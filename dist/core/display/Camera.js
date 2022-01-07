"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = require("./DisplayObject");
const gl_matrix_1 = require("gl-matrix");
const Geometry_1 = require("../utils/Geometry");
/**
 * The Camera class is the base class for every Camera.
 * A camera is used to look at the scene from a specific point of view.
 * It inherits from DisplayObject so you can transform it, BUT
 * it will result on a visual "opposite" transformation in the final scene.
 */
class Camera extends DisplayObject_1.default {
    constructor() {
        super();
    }
    /**
    * Returns the opposite of the camera's worldMatrix.
    * It is used by the scene (Stage) to simulate a certain
    * point of view.
    **/
    getRevertWorldMatrix() {
        const out = gl_matrix_1.mat2d.create();
        gl_matrix_1.mat2d.invert(out, this.worldMatrix);
        return out;
    }
    /**
    * Returns the real bounds of the camera.
    * You could use it on clipping strategy.
    **/
    getBounds() {
        return Geometry_1.default.getBoundingRect(this);
    }
}
exports.default = Camera;
