"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grid3D {
    constructor() {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
        this._numLayers = 0;
    }
    reset(rows, cols, layers) {
        this._numRows = rows;
        this._numCols = cols;
        this._numLayers = layers;
        this._map = [];
        for (let i = 0; i < rows; i++) {
            const col = [];
            this._map.push(col);
            for (let j = 0; j < cols; j++) {
                const layer = [];
                col.push(layer);
                for (let k = 0; k < layers; k++) {
                    layer.push(null);
                }
            }
        }
    }
    destroy() {
        this._map = [];
        this._numRows = 0;
        this._numCols = 0;
        this._numLayers = 0;
    }
    getAt(row, col, layer) {
        if (this.isOutOfBounds(row, col, layer))
            return null;
        return this._map[row][col][layer];
    }
    addAt(row, col, layer, value) {
        if (this.isOutOfBounds(row, col, layer))
            return;
        this._map[row][col][layer] = value;
    }
    removeAt(row, col, layer) {
        if (this.isOutOfBounds(row, col, layer))
            return;
        this._map[row][col][layer] = null;
    }
    isOutOfBounds(row, col, layer) {
        return (row > this.numRows - 1 ||
            col > this.numCols - 1 ||
            layer > this.numLayers - 1 ||
            layer < 0 ||
            row < 0 ||
            col < 0);
    }
    forEach(func) {
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                for (let k = 0; k < this.numLayers; k++) {
                    func(this._map[i][j][k], i, j, k);
                }
            }
        }
    }
    get numLayers() {
        return this._numLayers;
    }
    get numCols() {
        return this._numRows;
    }
    get numRows() {
        return this._numCols;
    }
}
exports.default = Grid3D;
