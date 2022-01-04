"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebGLAvailable = exports.isDisplayObjectContainer = void 0;
var CanvasUtils_1 = require("../utils/CanvasUtils");
/**
 * Says wether or not the object passed in param is a DisplayObjectContainer.
 * @param value IDisplayObject|IDisplayObjectContainer
 * @returns boolean
 */
function isDisplayObjectContainer(value) {
    return value.getChildren !== undefined;
}
exports.isDisplayObjectContainer = isDisplayObjectContainer;
/**
 * Says wether or not webGL is available
 * @returns boolean
 */
function isWebGLAvailable() {
    var canvas = CanvasUtils_1.default.create();
    var context = canvas.getContext("webgl");
    return context !== null;
}
exports.isWebGLAvailable = isWebGLAvailable;
