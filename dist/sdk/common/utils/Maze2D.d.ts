import { GameNode } from "../model/node";
export default class Maze2D {
    private _grid;
    private _pathCoords;
    private _currentRow;
    private _currentCol;
    reset(rows: number, cols: number, startRow: number, startCol: number): void;
    getRows(): number;
    getCols(): number;
    getCurrentNode(): GameNode;
    getData(): GameNode[][];
    isFinished(): boolean;
    finalize(): void;
    step(): void;
}
export declare enum MazeNodeType {
    WALL = "WALL",
    FREE = "FREE",
    BLOCK = "BLOCK"
}
