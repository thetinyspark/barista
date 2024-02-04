"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
class CanvasUtils {
    static create(width = 1, height = 1) {
        return new canvas_1.Canvas(width, height);
    }
    static fillRect(canvas, color, x, y, width, height) {
        const context = canvas.getContext("2d");
        context.save();
        context.beginPath();
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
        context.fill();
        context.closePath();
        context.restore();
    }
    static getCanvasPixels(canvas) {
        const offscreen = CanvasUtils.create(canvas.width, canvas.height);
        offscreen.getContext("2d").drawImage(canvas, 0, 0);
        return offscreen.getContext("2d").getImageData(0, 0, offscreen.width, offscreen.height).data;
    }
    static getCanvasPixel(canvas, x, y) {
        const pixels = CanvasUtils.getCanvasPixels(canvas);
        const pos = Math.floor(y * canvas.width * 4) + (x * 4);
        return [
            pixels[pos],
            pixels[pos + 1],
            pixels[pos + 2],
            pixels[pos + 3],
        ];
    }
    static canvasPixelToRGBA(pixelData) {
        return {
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
            a: pixelData[3]
        };
    }
    static pixelsAreTheSame(pixelsA, pixelsB) {
        if (pixelsA.length !== pixelsB.length)
            return false;
        for (let i = 0; i < pixelsA.length; i++) {
            if (pixelsA[i] !== pixelsB[i])
                return false;
        }
        return true;
    }
}
exports.default = CanvasUtils;
