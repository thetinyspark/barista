import DisplayObject from "./DisplayObject";
export default class Bitmap extends DisplayObject {
    texture: HTMLImageElement | HTMLCanvasElement | null;
    constructor();
    render(context: CanvasRenderingContext2D): void;
}
