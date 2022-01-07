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
    forEach(func: (value: T, row: number, col: number, layer: number) => void): void;
    getNeighbours(row: number, col: number, layer: number): {
        topLeftFront: T;
        topFront: T;
        topRightFront: T;
        leftFront: T;
        centerFront: T;
        rightFront: T;
        bottomLeftFront: T;
        bottomFront: T;
        bottomRightFront: T;
        topLeftBack: T;
        topBack: T;
        topRightBack: T;
        leftBack: T;
        centerBack: T;
        rightBack: T;
        bottomLeftBack: T;
        bottomBack: T;
        bottomRightBack: T;
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
    getLeftFront(row: number, col: number, layer: number): T;
    getRightFront(row: number, col: number, layer: number): T;
    getBottomFront(row: number, col: number, layer: number): T;
    getBottomLeftFront(row: number, col: number, layer: number): T;
    getBottomRightFront(row: number, col: number, layer: number): T;
    getTopFront(row: number, col: number, layer: number): T;
    getTopLeftFront(row: number, col: number, layer: number): T;
    getTopRightFront(row: number, col: number, layer: number): T;
    getFront(row: number, col: number, layer: number): T;
    getBack(row: number, col: number, layer: number): T;
    getLeftBack(row: number, col: number, layer: number): T;
    getRightBack(row: number, col: number, layer: number): T;
    getBottomBack(row: number, col: number, layer: number): T;
    getBottomLeftBack(row: number, col: number, layer: number): T;
    getBottomRightBack(row: number, col: number, layer: number): T;
    getTopBack(row: number, col: number, layer: number): T;
    getTopLeftBack(row: number, col: number, layer: number): T;
    getTopRightBack(row: number, col: number, layer: number): T;
    getLeft(row: number, col: number, layer: number): T;
    getRight(row: number, col: number, layer: number): T;
    getBottom(row: number, col: number, layer: number): T;
    getBottomLeft(row: number, col: number, layer: number): T;
    getBottomRight(row: number, col: number, layer: number): T;
    getTop(row: number, col: number, layer: number): T;
    getTopLeft(row: number, col: number, layer: number): T;
    getTopRight(row: number, col: number, layer: number): T;
    get numLayers(): number;
    get numCols(): number;
    get numRows(): number;
    get data(): T[][][];
}