"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Grid2D = /** @class */ (function () {
    function Grid2D() {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
    }
    Grid2D.prototype.reset = function (rows, cols) {
        this._numRows = rows;
        this._numCols = cols;
        this._map = [];
        for (var i = 0; i < rows; i++) {
            var col = [];
            for (var j = 0; j < cols; j++) {
                col.push(null);
            }
            this._map.push(col);
        }
    };
    Grid2D.prototype.destroy = function () {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
    };
    Grid2D.prototype.getAt = function (row, col) {
        if (this.isOutOfBounds(row, col))
            return null;
        return this._map[row][col];
    };
    Grid2D.prototype.addAt = function (row, col, value) {
        if (this.isOutOfBounds(row, col))
            return;
        this._map[row][col] = value;
    };
    Grid2D.prototype.removeAt = function (row, col) {
        if (this.isOutOfBounds(row, col))
            return;
        this._map[row][col] = null;
    };
    Grid2D.prototype.isOutOfBounds = function (row, col) {
        return (row > this.numRows - 1 || col > this.numCols - 1 || row < 0 || col < 0);
    };
    Grid2D.prototype.forEach = function (func) {
        for (var i = 0; i < this.numRows; i++) {
            for (var j = 0; j < this.numCols; j++) {
                func(this._map[i][j], i, j);
            }
        }
    };
    Object.defineProperty(Grid2D.prototype, "numCols", {
        get: function () {
            return this._numRows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grid2D.prototype, "numRows", {
        get: function () {
            return this._numCols;
        },
        enumerable: false,
        configurable: true
    });
    return Grid2D;
}());
exports.default = Grid2D;
