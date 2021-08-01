import IDisplayObject from "../display/IDisplayObject";
export default interface IRenderer {
    add(child: IDisplayObject): void;
    getChildren(): IDisplayObject[];
    clear(): void;
    getContext(): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext;
    getCanvas(): HTMLCanvasElement;
    draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext): void;
}
