import IDisplayObject from "../../display/IDisplayObject";
import IRenderer from "../IRenderer";
/**
 * The Webgl2DRenderer class is the base class for WebGL2d rendering.
 */
export default class Webgl2DRenderer implements IRenderer {
    private _children;
    private _canvas;
    private _context;
    private _vertexArray;
    private _indexArray;
    private _vertexBuffer;
    private _indexBuffer;
    private _currentShader;
    private _currentTexture;
    constructor();
    private _init;
    add(child: IDisplayObject): void;
    getCanvas(): HTMLCanvasElement;
    getContext(): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext;
    getChildren(): IDisplayObject[];
    clear(): void;
    draw(canvas: HTMLCanvasElement, context: WebGLRenderingContext): void;
    batch(children: IDisplayObject[]): IDisplayObject[][];
}
