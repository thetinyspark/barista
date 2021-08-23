import IDisplayObject from "../display/IDisplayObject";
import IFilter from "./IFilter";
export default class WaterFilter implements IFilter {
    private _save;
    private _model;
    private _raindrop;
    private _water;
    resolution: number;
    dropSize: number;
    constructor();
    create2DArray(canvas: HTMLCanvasElement): number[][];
    createRadialCanvas(width: number, height: number): HTMLCanvasElement;
    save(child: IDisplayObject): void;
    touchWater(x: number, y: number, pressure: number): void;
    apply(child: IDisplayObject): void;
    rollback(child: IDisplayObject): void;
}
export declare class WaterCanvas {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    texture: HTMLImageElement;
    private texPixels;
    private workBuffer;
    constructor(canvas: any, texture: any);
    private buildBuffers;
    draw(map: number[][], transform?: boolean): void;
}
export declare class WaterModel {
    resolution: number;
    damping: number;
    clipping: number;
    evolveThreshold: number;
    width: number;
    height: number;
    evolving: boolean;
    private previousFrame;
    private currentFrame;
    private dataFrame;
    constructor(width: any, height: any, resolution: any);
    touchWater(x: any, y: any, pressure: any, array2d: any): void;
    compute(): void;
    getInterpolatedFrame(): number[][];
    getCurrentFrame(): number[][];
    reset(width: any, height: any, resolution: any): void;
}
