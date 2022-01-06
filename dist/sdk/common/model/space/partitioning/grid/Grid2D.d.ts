export default class Grid2D<T> {
    private _map;
    private _numRows;
    private _numCols;
    constructor();
    reset(rows: number, cols: number): void;
    destroy(): void;
    getAt(row: number, col: number): T | null;
    addAt(row: number, col: number, value: T): void;
    removeAt(row: number, col: number): void;
    isOutOfBounds(row: number, col: number): boolean;
    forEach(func: Function): void;
    get numCols(): number;
    get numRows(): number;
}
