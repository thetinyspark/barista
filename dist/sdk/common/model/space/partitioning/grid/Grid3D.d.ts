export default class Grid3D<T> {
    protected _map: Array<Array<Array<T | null>>>;
    private _numRows;
    private _numCols;
    private _numLayers;
    constructor();
    reset(rows: number, cols: number, layers: number): void;
    destroy(): void;
    getAt(row: number, col: number, layer: number): T | null;
    addAt(row: number, col: number, layer: number, value: T): void;
    removeAt(row: number, col: number, layer: number): void;
    isOutOfBounds(row: number, col: number, layer: number): boolean;
    forEach(func: Function): void;
    get numLayers(): number;
    get numCols(): number;
    get numRows(): number;
}
