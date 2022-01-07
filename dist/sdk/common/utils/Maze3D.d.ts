import { GameNode } from "../model/node";
export default class Maze3D {
    private _grid;
    private _pathCoords;
    private _currentRow;
    private _currentCol;
    private _currentLayer;
    reset(rows: number, cols: number, depth: number, startRow: number, startCol: number, startLayer: number): void;
    getRows(): number;
    getCols(): number;
    getLayers(): number;
    getCurrentNode(): GameNode;
    getData(): GameNode[][][];
    isFinished(): boolean;
    finalize(): void;
    step(): void;
}
