export default class Grid2D<T> {
    private _map;
    private _numRows;
    private _numCols;
    constructor();
    reset(rows: number, cols: number): void;
    destroy(): void;
    getNeighbours(row: number, col: number): {
        topLeft: T;
        top: T;
        topRight: T;
        left: T;
        center: T;
        right: T;
        bottomLeft: T;
        bottom: T;
        bottomRight: T;
    };
    getLeft(row: number, col: number): T;
    getRight(row: number, col: number): T;
    getBottom(row: number, col: number): T;
    getBottomLeft(row: number, col: number): T;
    getBottomRight(row: number, col: number): T;
    getTop(row: number, col: number): T;
    getTopLeft(row: number, col: number): T;
    getTopRight(row: number, col: number): T;
    getAt(row: number, col: number): T | null;
    addAt(row: number, col: number, value: T): void;
    removeAt(row: number, col: number): void;
    isOutOfBounds(row: number, col: number): boolean;
    forEach(func: (value: T, row: number, col: number) => void): void;
    map<U>(func: (value: T, row: number, col: number) => U): Grid2D<U>;
    extract(fromRow: number, toRow: number, fromCol: number, toCol: number): Grid2D<T>;
    get numCols(): number;
    get numRows(): number;
    get data(): T[][] | null[][];
    static from<T>(data: T[][]): Grid2D<T>;
}
