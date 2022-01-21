import IDisplayObject from "../display/IDisplayObject";
import IRenderer from "./IRenderer";
/**
 * The Canvas2DRenderer class is the base class for non GPU 2d rendering.
 */
export default class Canvas2DRenderer implements IRenderer {
    private _children;
    private _canvas;
    private _context;
    constructor();
    getNumDrawCalls(): number;
    getContext(): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext;
    getCanvas(): HTMLCanvasElement;
    add(child: IDisplayObject): void;
    getChildren(): IDisplayObject[];
    clear(): void;
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void;
}
