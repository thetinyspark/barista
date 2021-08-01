import IDisplayObject from "../../display/IDisplayObject";
import IRenderer from "../IRenderer";
export declare const VERTEX_SIZE: number;
export declare const NUM_VERTICES_PER_QUAD: number;
export declare const MAX_QUAD_PER_CALL: number;
export declare const VERTEX_ARRAY_SIZE: number;
export declare const INDICES_PER_QUAD: number;
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
    createVertexArray(): Float32Array;
    createIndexArray(): Uint16Array;
}
