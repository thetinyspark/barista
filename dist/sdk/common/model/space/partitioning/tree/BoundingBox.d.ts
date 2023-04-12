export default class BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    toString(): string;
    collideBox(box: BoundingBox): boolean;
    collidePoint(x: number, y: number): boolean;
    getMidX(): number;
    getMidY(): number;
    splitVertical(): Array<BoundingBox>;
    splitHorizontal(): Array<BoundingBox>;
}
