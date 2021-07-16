import IDisplayObject from "../display/IDisplayObject";
import IRenderer from "./IRenderer";
export default class Canvas2DRenderer implements IRenderer {
    private _children;
    add(child: IDisplayObject): void;
    getChildren(): IDisplayObject[];
    clear(): void;
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void;
}
