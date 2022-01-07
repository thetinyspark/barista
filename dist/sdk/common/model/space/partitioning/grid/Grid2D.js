"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid2D {
    constructor() {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
    }
    reset(rows, cols) {
        this._numRows = rows;
        this._numCols = cols;
        this._map = [];
        for (let i = 0; i < rows; i++) {
            const col = [];
            for (let j = 0; j < cols; j++) {
                col.push(null);
            }
            this._map.push(col);
        }
    }
    destroy() {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
    }
    getNeighbours(row, col) {
        return {
            topLeft: this.getTopLeft(row, col),
            top: this.getTop(row, col),
            topRight: this.getTopRight(row, col),
            left: this.getLeft(row, col),
            center: this.getAt(row, col),
            right: this.getRight(row, col),
            bottomLeft: this.getBottomLeft(row, col),
            bottom: this.getBottom(row, col),
            bottomRight: this.getBottomRight(row, col),
        };
    }
    getLeft(row, col) {
        return this.getAt(row, col - 1);
    }
    getRight(row, col) {
        return this.getAt(row, col + 1);
    }
    getBottom(row, col) {
        return this.getAt(row + 1, col);
    }
    getBottomLeft(row, col) {
        return this.getAt(row + 1, col - 1);
    }
    getBottomRight(row, col) {
        return this.getAt(row + 1, col + 1);
    }
    getTop(row, col) {
        return this.getAt(row - 1, col);
    }
    getTopLeft(row, col) {
        return this.getAt(row - 1, col - 1);
    }
    getTopRight(row, col) {
        return this.getAt(row - 1, col + 1);
    }
    getAt(row, col) {
        if (this.isOutOfBounds(row, col))
            return null;
        return this._map[row][col];
    }
    addAt(row, col, value) {
        if (this.isOutOfBounds(row, col))
            return;
        this._map[row][col] = value;
    }
    removeAt(row, col) {
        if (this.isOutOfBounds(row, col))
            return;
        this._map[row][col] = null;
    }
    isOutOfBounds(row, col) {
        return (row > this.numRows - 1 || col > this.numCols - 1 || row < 0 || col < 0);
    }
    forEach(func) {
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                func(this._map[i][j], i, j);
            }
        }
    }
    get numCols() {
        return this._numCols;
    }
    get numRows() {
        return this._numRows;
    }
    get data() {
        return this._map;
    }
}
exports.default = Grid2D;
