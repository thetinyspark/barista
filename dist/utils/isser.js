"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebGLAvailable = exports.isDisplayObjectContainer = void 0;
function isDisplayObjectContainer(value) {
    return value.getChildren !== undefined;
}
exports.isDisplayObjectContainer = isDisplayObjectContainer;
function isWebGLAvailable() {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("webgl");
    return context !== null;
}
exports.isWebGLAvailable = isWebGLAvailable;
