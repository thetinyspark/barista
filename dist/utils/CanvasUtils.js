"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
var CanvasUtils = /** @class */ (function () {
    function CanvasUtils() {
    }
    CanvasUtils.create = function (width, height) {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    return CanvasUtils;
}());
exports.default = CanvasUtils;
