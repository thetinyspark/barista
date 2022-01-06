"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Grid3D = /** @class */ (function () {
    function Grid3D() {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
        this._numLayers = 0;
    }
    Grid3D.prototype.reset = function (rows, cols, layers) {
        this._numRows = rows;
        this._numCols = cols;
        this._numLayers = layers;
        this._map = [];
        for (var i = 0; i < rows; i++) {
            var col = [];
            this._map.push(col);
            for (var j = 0; j < cols; j++) {
                var layer = [];
                col.push(layer);
                for (var k = 0; k < layers; k++) {
                    layer.push(null);
                }
            }
        }
    };
    Grid3D.prototype.destroy = function () {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
        this._numLayers = 0;
    };
    Grid3D.prototype.getAt = function (row, col, layer) {
        if (this.isOutOfBounds(row, col, layer))
            return null;
        return this._map[row][col][layer];
    };
    Grid3D.prototype.addAt = function (row, col, layer, value) {
        if (this.isOutOfBounds(row, col, layer))
            return;
        this._map[row][col][layer] = value;
    };
    Grid3D.prototype.removeAt = function (row, col, layer) {
        if (this.isOutOfBounds(row, col, layer))
            return;
        this._map[row][col][layer] = null;
    };
    Grid3D.prototype.isOutOfBounds = function (row, col, layer) {
        return (row > this.numRows - 1 ||
            col > this.numCols - 1 ||
            layer > this.numLayers - 1 ||
            layer < 0 ||
            row < 0 ||
            col < 0);
    };
    Grid3D.prototype.forEach = function (func) {
        for (var i = 0; i < this.numRows; i++) {
            for (var j = 0; j < this.numCols; j++) {
                for (var k = 0; k < this.numLayers; k++) {
                    func(this._map[i][j][k], i, j, k);
                }
            }
        }
    };
    Object.defineProperty(Grid3D.prototype, "numLayers", {
        get: function () {
            return this._numLayers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid3D.prototype, "numCols", {
        get: function () {
            return this._numRows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid3D.prototype, "numRows", {
        get: function () {
            return this._numCols;
        },
        enumerable: false,
        configurable: true
    });
    return Grid3D;
}());
exports.default = Grid3D;
