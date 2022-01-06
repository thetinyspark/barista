"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
var CanvasUtils = /** @class */ (function () {
    function CanvasUtils() {
    }
    CanvasUtils.create = function (width, height) {
        if (width === void 0) { width = 1; }
        if (height === void 0) { height = 1; }
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    CanvasUtils.fillRect = function (canvas, color, x, y, width, height) {
        var context = canvas.getContext("2d");
        context.save();
        context.beginPath();
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
        context.fill();
        context.closePath();
        context.restore();
    };
    CanvasUtils.getCanvasPixels = function (canvas) {
        var offscreen = CanvasUtils.create(canvas.width, canvas.height);
        offscreen.getContext("2d").drawImage(canvas, 0, 0);
        return offscreen.getContext("2d").getImageData(0, 0, offscreen.width, offscreen.height).data;
    };
    CanvasUtils.getCanvasPixel = function (canvas, x, y) {
        var pixels = CanvasUtils.getCanvasPixels(canvas);
        var pos = Math.floor(y * canvas.width * 4) + (x * 4);
        return [
            pixels[pos],
            pixels[pos + 1],
            pixels[pos + 2],
            pixels[pos + 3],
        ];
    };
    CanvasUtils.canvasPixelToRGBA = function (pixelData) {
        return {
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
            a: pixelData[3]
        };
    };
    CanvasUtils.pixelsAreTheSame = function (pixelsA, pixelsB) {
        if (pixelsA.length !== pixelsB.length)
            return false;
        for (var i = 0; i < pixelsA.length; i++) {
            if (pixelsA[i] !== pixelsB[i])
                return false;
        }
        return true;
    };
    return CanvasUtils;
}());
exports.default = CanvasUtils;
