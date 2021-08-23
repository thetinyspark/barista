"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterModel = exports.WaterCanvas = void 0;
var TextureData_1 = require("../texture/TextureData");
var Texture_1 = require("../texture/Texture");
var WaterFilter = /** @class */ (function () {
    function WaterFilter() {
        this._save = null;
        this._model = null;
        this._raindrop = [];
        this._water = null;
        this.resolution = 1;
        this.dropSize = 4;
        this._model = new WaterModel(1, 1, 1);
    }
    WaterFilter.prototype.create2DArray = function (canvas) {
        var width = canvas.width;
        var height = canvas.height;
        var i = 0;
        var n = 0;
        // Create an empty 2D  array
        var pointerArray = [];
        for (var x = 0; x < width; x++) {
            pointerArray[x] = [];
            for (var y = 0; y < height; y++) {
                pointerArray[x][y] = 0.0;
            }
        }
        // Convert gray scale canvas to 2D array
        var pointerCtx = canvas.getContext('2d');
        var imgData = pointerCtx.getImageData(0, 0, width, height);
        var pixels = imgData.data;
        for (i = 0; n = pixels.length, i < n; i += 4) {
            // Get the pixel from input
            var pixVal = pixels[i]; // only use red
            var arrVal = pixVal / 255.0;
            var pixel = i / 4;
            var x = pixel % width;
            var y = (pixel - x) / width;
            pointerArray[x][y] = arrVal;
        }
        return pointerArray;
    };
    WaterFilter.prototype.createRadialCanvas = function (width, height) {
        // Create a canvas
        var pointerCanvas = document.createElement('canvas');
        var pointerCtx = pointerCanvas.getContext('2d');
        pointerCanvas.width = width;
        pointerCanvas.height = height;
        // Create a drawing on the canvas
        var radgrad = pointerCtx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, height / 2);
        radgrad.addColorStop(0, '#fff');
        radgrad.addColorStop(1, '#000');
        pointerCtx.fillStyle = radgrad;
        pointerCtx.fillRect(0, 0, width, height);
        return pointerCanvas;
    };
    WaterFilter.prototype.save = function (child) {
        this._save = child.texture;
        this._raindrop = this.create2DArray(this.createRadialCanvas(this.dropSize, this.dropSize));
        var source = child.snapshot();
        var data = new TextureData_1.default(source);
        var dest = data.getSource();
        var texture = new Texture_1.default("waterify_child", data, 0, 0, child.width, child.height);
        this._model = new WaterModel(dest.width, dest.height, this.resolution);
        this._water = new WaterCanvas(dest, source);
        child.texture = texture;
        data.isDynamic = true;
    };
    WaterFilter.prototype.touchWater = function (x, y, pressure) {
        this._model.touchWater(x, y, pressure, this._raindrop);
    };
    WaterFilter.prototype.apply = function (child) {
        if (this._save === null)
            return;
        this._model.compute();
        this._water.draw(this._model.getInterpolatedFrame(), this._model.evolving);
    };
    WaterFilter.prototype.rollback = function (child) {
        child.texture = this._save;
        this._model = null;
        this._raindrop = [];
        this._water = null;
        this._save = null;
    };
    return WaterFilter;
}());
exports.default = WaterFilter;
var WaterCanvas = /** @class */ (function () {
    function WaterCanvas(canvas, texture) {
        this.canvas = canvas;
        this.texture = texture;
        this.buildBuffers();
    }
    WaterCanvas.prototype.buildBuffers = function () {
        var img = this.texture;
        var canvas = this.canvas;
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        var pixels = context.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
        var buffer = context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.texPixels = pixels;
        this.workBuffer = buffer;
    };
    WaterCanvas.prototype.draw = function (map, transform) {
        if (transform === void 0) { transform = true; }
        var canvas = this.canvas;
        var context = canvas.getContext("2d");
        var lightRefraction = 9.0;
        var lightReflection = 0.1;
        var width = this.canvas.width;
        var height = this.canvas.height;
        var x = 0;
        var y = 0;
        var xPix = 0;
        var yPix = 0;
        var pixel = 0;
        var pos = 0;
        var red = 0;
        var green = 0;
        var blue = 0;
        var previousPixels = this.texPixels;
        var nextPixels = this.workBuffer.data;
        var max = nextPixels.length;
        var strength = 0;
        var refraction = 0;
        if (transform == false) {
            context.putImageData(this.workBuffer, 0, 0);
            return;
        }
        for (var i = 0; i < max; i += 4) {
            pixel = i / 4;
            x = pixel % width;
            y = (pixel - x) / width;
            strength = map[x][y];
            // Refraction of light in water
            refraction = (strength * lightRefraction) >> 0;
            xPix = x + refraction;
            yPix = y + refraction;
            if (xPix < 0)
                xPix = 0;
            if (yPix < 0)
                yPix = 0;
            if (xPix > width - 1)
                xPix = width - 1;
            if (yPix > height - 1)
                yPix = height - 1;
            // Get the pixel from input
            pos = ((yPix * width) + xPix) * 4;
            red = previousPixels[pos];
            green = previousPixels[pos + 1];
            blue = previousPixels[pos + 2];
            // Set the pixel to output
            strength = (strength * lightReflection) + 1;
            red *= strength;
            green *= strength;
            blue *= strength;
            nextPixels[i] = red;
            nextPixels[i + 1] = green;
            nextPixels[i + 2] = blue;
            // nextPixels[i + 3] = 255; // alpha 
        }
        context.putImageData(this.workBuffer, 0, 0);
    };
    return WaterCanvas;
}());
exports.WaterCanvas = WaterCanvas;
var WaterModel = /** @class */ (function () {
    function WaterModel(width, height, resolution) {
        this.resolution = 1.0;
        this.damping = 0.985;
        this.clipping = 5;
        this.evolveThreshold = 0.05;
        this.width = 1;
        this.height = 1;
        this.evolving = false;
        this.previousFrame = null;
        this.currentFrame = null;
        this.dataFrame = null;
        this.reset(width, height, resolution);
    }
    WaterModel.prototype.touchWater = function (x, y, pressure, array2d) {
        this.evolving = true;
        x = Math.floor(x / this.resolution);
        y = Math.floor(y / this.resolution);
        // Place the array2d in the center of the mouse position
        if (array2d.length > 4 || array2d[0].length > 4) {
            x -= array2d.length >> 1;
            y -= array2d[0].length >> 1;
        }
        if (x < 0)
            x = 0;
        if (y < 0)
            y = 0;
        if (x > this.width)
            x = this.width;
        if (y > this.height)
            y = this.height;
        // Big pixel block
        for (var i = 0; i < array2d.length; i++) {
            if (x + i < 0 || x + i > this.width - 1)
                continue;
            for (var j = 0; j < array2d[0].length; j++) {
                if (y + j >= 0 && y + j <= this.height - 1) {
                    this.previousFrame[x + i][y + j] -= array2d[i][j] * pressure;
                }
            }
        }
    };
    WaterModel.prototype.compute = function () {
        if (this.evolving === false)
            return;
        this.evolving = false;
        var x = 0;
        var y = 0;
        var val = 0;
        var w = this.width;
        var h = this.height;
        var prev = this.previousFrame;
        var cur = this.currentFrame;
        var right = w - 1;
        var bom = h - 1;
        var damp = this.damping;
        for (x = 0; x < w; x++) {
            for (y = 0; y < this.height; y++) {
                // Handle borders correctly
                val = ((x == 0) ? 0 : prev[x - 1][y]) +
                    ((x == right) ? 0 : prev[x + 1][y]) +
                    ((y == 0) ? 0 : prev[x][y - 1]) +
                    ((y == bom) ? 0 : prev[x][y + 1]);
                // Damping
                val = ((val / 2.0) - cur[x][y]) * damp;
                // // Clipping prevention
                val = (val > this.clipping) ? this.clipping : val;
                val = (val < -this.clipping) ? -this.clipping : val;
                if ((val > this.evolveThreshold || -val > this.evolveThreshold))
                    this.evolving = true;
                cur[x][y] = val;
            }
        }
        // Swap buffer references
        this.previousFrame = cur;
        this.currentFrame = prev;
    };
    WaterModel.prototype.getInterpolatedFrame = function () {
        if (this.resolution == 1.0)
            return this.currentFrame;
        if (this.evolving == false)
            return this.dataFrame;
        var factor = 1 / this.resolution;
        var map = this.currentFrame;
        var x = 0;
        var y = 0;
        var i = 0;
        var j = 0;
        var cols = this.dataFrame.length;
        var rows = this.dataFrame[0].length;
        var right = this.width - 1;
        var bottom = this.height - 1;
        var xF = 0;
        var yF = 0;
        var xC = 0;
        var yC = 0;
        var br = 0;
        var bl = 0;
        var tr = 0;
        var tl = 0;
        var xChange = 0;
        var yChange = 0;
        var buffer = this.dataFrame;
        for (i = 0; i < cols; i++) {
            for (j = 0; j < rows; j++) {
                x = i * factor;
                y = j * factor;
                xF = x >> 0;
                yF = y >> 0;
                xC = xF + 1;
                yC = yF + 1;
                if (xC > right)
                    xC = xF;
                if (yC > bottom)
                    yC = yF;
                br = map[xF][yF];
                bl = map[xC][yF];
                tr = map[xF][yC];
                tl = map[xC][yC];
                xChange = xC - x;
                yChange = yC - y;
                buffer[i][j] = (tl * (1 - xChange) * (1 - yChange) +
                    tr * (xChange) * (1 - yChange) +
                    bl * (yChange) * (1 - xChange) +
                    br * xChange * yChange);
            }
        }
        return this.dataFrame;
    };
    WaterModel.prototype.getCurrentFrame = function () {
        if (this.resolution == 1.0)
            return this.currentFrame;
        if (this.evolving == false)
            return this.dataFrame;
        var factor = 1 / this.resolution;
        var map = this.currentFrame;
        var x = 0;
        var y = 0;
        var i = 0;
        var j = 0;
        var cols = this.width * this.resolution;
        var rows = this.height * this.resolution;
        for (i = 0; i < cols; i++) {
            for (j = 0; j < rows; j++) {
                x = (i * factor) >> 0;
                y = (j * factor) >> 0;
                this.dataFrame[i][j] = map[x][y];
            }
        }
        return this.dataFrame;
    };
    WaterModel.prototype.reset = function (width, height, resolution) {
        var x = 0;
        var y = 0;
        this.resolution = resolution;
        this.width = Math.ceil(width / this.resolution);
        this.height = Math.ceil(height / this.resolution);
        this.previousFrame = new Array();
        this.currentFrame = new Array();
        this.dataFrame = new Array();
        /* rescaled frames */
        for (x = 0; x < this.width; x++) {
            this.previousFrame[x] = new Array();
            this.currentFrame[x] = new Array();
            for (y = 0; y < this.height; y++) {
                this.previousFrame[x][y] = 0.0;
                this.currentFrame[x][y] = 0.0;
            }
        }
        /* real scale frame */
        for (x = 0; x < width; x++) {
            this.dataFrame[x] = new Array();
            for (y = 0; y < height; y++) {
                this.dataFrame[x][y] = 0.0;
            }
        }
    };
    return WaterModel;
}());
exports.WaterModel = WaterModel;
