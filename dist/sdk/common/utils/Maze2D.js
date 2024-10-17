"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grid_1 = require("../model/space/partitioning/grid");
const node_1 = require("../model/node");
const MazeNodeType_1 = require("./MazeNodeType");
class Maze2D {
    _grid = null;
    _pathCoords;
    _currentRow = 0;
    _currentCol = 0;
    reset(rows, cols, startRow, startCol) {
        this._pathCoords = [];
        this._grid = new grid_1.Grid2D();
        this._grid.reset(rows, cols);
        this._currentRow = startRow;
        this._currentCol = startCol;
        this._grid.forEach((value, row, col) => {
            const node = new node_1.GameNode();
            node.state.type = (row % 2 == 0 || col % 2 == 0) ? MazeNodeType_1.default.WALL : MazeNodeType_1.default.BLOCK;
            this._grid.addAt(row, col, node);
        });
    }
    getRows() {
        return this._grid.numRows;
    }
    getCols() {
        return this._grid.numCols;
    }
    getCurrentNode() {
        return this._grid.getAt(this._currentRow, this._currentCol);
    }
    getData() {
        return this._grid.data;
    }
    isFinished() {
        return this._currentRow === null && this._currentCol === null;
    }
    finalize() {
        while (!this.isFinished()) {
            this.step();
        }
    }
    step() {
        if (this.isFinished())
            return;
        const grid = this._grid;
        const path = this._pathCoords;
        const row = this._currentRow;
        const col = this._currentCol;
        // on passe notre case courante à FREE (libre)
        grid.getAt(row, col).state.type = MazeNodeType_1.default.FREE;
        // on récupère tous les voisins et les murs qui nous en séparent
        const neighbours = [
            {
                wall: this._grid.getLeft(row, col),
                target: this._grid.getLeft(row, col - 1),
                row: row,
                col: col - 2
            },
            {
                wall: this._grid.getRight(row, col),
                target: this._grid.getRight(row, col + 1),
                row: row,
                col: col + 2
            },
            {
                wall: this._grid.getTop(row, col),
                target: this._grid.getTop(row - 1, col),
                row: row - 2,
                col: col
            },
            {
                wall: this._grid.getBottom(row, col),
                target: this._grid.getBottom(row + 1, col),
                row: row + 2,
                col: col
            }
        ].filter((value) => {
            return value.wall !== null && value.target !== null && value.target.state.type === MazeNodeType_1.default.BLOCK;
        });
        if (neighbours.length > 0) {
            // on récupère un voisin au hasard
            const index = Math.round(Math.random() * (neighbours.length - 1));
            const current = neighbours[index];
            // alors on fait en sorte de passer le mur qui nous sépare du voisin à FREE
            current.wall.state.type = MazeNodeType_1.default.FREE;
            // on passe notre voisin a FREE aussi
            current.target.state.type = MazeNodeType_1.default.FREE;
            // on ajoute nos coordonnées de départ au chemin 
            // qui nous a mené jusqu'à la nouvelle case
            path.push([row, col]);
            // on spécifie notre prochain point de départ
            this._currentRow = current.row;
            this._currentCol = current.col;
        }
        else if (path.length > 0) {
            // si aucune case adjacente n'est intéréssante, alors on remonte le chemin
            // à rebours et on tente de "creuser" à partir d'une des cases précédentes
            // on retire le dernier élément du chemin
            let coords = path.pop();
            // on spécifie notre prochain point de départ
            this._currentRow = coords[0];
            this._currentCol = coords[1];
        }
        else {
            // C'est fini
            this._currentRow = null;
            this._currentCol = null;
        }
    }
}
exports.default = Maze2D;
