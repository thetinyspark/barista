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
        for (let k = 0; k < layers; k++) {
            const layer = [];
            this._map.push(layer);
            for (let i = 0; i < rows; i++) {
                const row = [];
                layer.push(row);
                for (let j = 0; j < cols; j++) {
                    row.push(null);
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
        return this._map[layer][row][col];
    }
    addAt(row, col, layer, value) {
        if (this.isOutOfBounds(row, col, layer))
            return;
        this._map[layer][row][col] = value;
    }
    removeAt(row, col, layer) {
        if (this.isOutOfBounds(row, col, layer))
            return;
        this._map[layer][row][col] = null;
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
        for (let k = 0; k < this.numLayers; k++) {
            for (let i = 0; i < this.numRows; i++) {
                for (let j = 0; j < this.numCols; j++) {
                    func(this._map[k][i][j], i, j, k);
                }
            }
        }
    }
    getNeighbours(row, col, layer) {
        return {
            topLeftFront: this.getTopLeftFront(row, col, layer),
            topFront: this.getTopFront(row, col, layer),
            topRightFront: this.getTopRightFront(row, col, layer),
            leftFront: this.getLeftFront(row, col, layer),
            centerFront: this.getFront(row, col, layer),
            rightFront: this.getRightFront(row, col, layer),
            bottomLeftFront: this.getBottomLeftFront(row, col, layer),
            bottomFront: this.getBottomFront(row, col, layer),
            bottomRightFront: this.getBottomRightFront(row, col, layer),
            topLeftBack: this.getTopLeftBack(row, col, layer),
            topBack: this.getTopBack(row, col, layer),
            topRightBack: this.getTopRightBack(row, col, layer),
            leftBack: this.getLeftBack(row, col, layer),
            centerBack: this.getBack(row, col, layer),
            rightBack: this.getRightBack(row, col, layer),
            bottomLeftBack: this.getBottomLeftBack(row, col, layer),
            bottomBack: this.getBottomBack(row, col, layer),
            bottomRightBack: this.getBottomRightBack(row, col, layer),
            topLeft: this.getTopLeft(row, col, layer),
            top: this.getTop(row, col, layer),
            topRight: this.getTopRight(row, col, layer),
            left: this.getLeft(row, col, layer),
            center: this.getAt(row, col, layer),
            right: this.getRight(row, col, layer),
            bottomLeft: this.getBottomLeft(row, col, layer),
            bottom: this.getBottom(row, col, layer),
            bottomRight: this.getBottomRight(row, col, layer),
        };
    }
    getLeftFront(row, col, layer) {
        return this.getAt(row, col - 1, layer - 1);
    }
    getRightFront(row, col, layer) {
        return this.getAt(row, col + 1, layer - 1);
    }
    getBottomFront(row, col, layer) {
        return this.getAt(row + 1, col, layer - 1);
    }
    getBottomLeftFront(row, col, layer) {
        return this.getAt(row + 1, col - 1, layer - 1);
    }
    getBottomRightFront(row, col, layer) {
        return this.getAt(row + 1, col + 1, layer - 1);
    }
    getTopFront(row, col, layer) {
        return this.getAt(row - 1, col, layer - 1);
    }
    getTopLeftFront(row, col, layer) {
        return this.getAt(row - 1, col - 1, layer - 1);
    }
    getTopRightFront(row, col, layer) {
        return this.getAt(row - 1, col + 1, layer - 1);
    }
    getFront(row, col, layer) {
        return this.getAt(row, col, layer - 1);
    }
    getBack(row, col, layer) {
        return this.getAt(row, col, layer + 1);
    }
    getLeftBack(row, col, layer) {
        return this.getAt(row, col - 1, layer + 1);
    }
    getRightBack(row, col, layer) {
        return this.getAt(row, col + 1, layer + 1);
    }
    getBottomBack(row, col, layer) {
        return this.getAt(row + 1, col, layer + 1);
    }
    getBottomLeftBack(row, col, layer) {
        return this.getAt(row + 1, col - 1, layer + 1);
    }
    getBottomRightBack(row, col, layer) {
        return this.getAt(row + 1, col + 1, layer + 1);
    }
    getTopBack(row, col, layer) {
        return this.getAt(row - 1, col, layer + 1);
    }
    getTopLeftBack(row, col, layer) {
        return this.getAt(row - 1, col - 1, layer + 1);
    }
    getTopRightBack(row, col, layer) {
        return this.getAt(row - 1, col + 1, layer + 1);
    }
    getLeft(row, col, layer) {
        return this.getAt(row, col - 1, layer);
    }
    getRight(row, col, layer) {
        return this.getAt(row, col + 1, layer);
    }
    getBottom(row, col, layer) {
        return this.getAt(row + 1, col, layer);
    }
    getBottomLeft(row, col, layer) {
        return this.getAt(row + 1, col - 1, layer);
    }
    getBottomRight(row, col, layer) {
        return this.getAt(row + 1, col + 1, layer);
    }
    getTop(row, col, layer) {
        return this.getAt(row - 1, col, layer);
    }
    getTopLeft(row, col, layer) {
        return this.getAt(row - 1, col - 1, layer);
    }
    getTopRight(row, col, layer) {
        return this.getAt(row - 1, col + 1, layer);
    }
    get numLayers() {
        return this._numLayers;
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
exports.default = Grid3D;
