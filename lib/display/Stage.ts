import { mat2d } from "gl-matrix";
import Canvas2DRenderer from "../rendering/Canvas2DRenderer";
import IRenderer from "../rendering/IRenderer";
import DisplayObjectContainer from "./DisplayObjectContainer";
export default class Stage extends DisplayObjectContainer{

    private _canvas:HTMLCanvasElement;
    private _context:CanvasRenderingContext2D;
    private _currentFrame:number = 0;
    private _renderer:IRenderer = new Canvas2DRenderer();

    constructor(){
        super();
    }

    public getRenderer():IRenderer{
        return this._renderer;
    }

    public setRenderer(renderer:IRenderer):void{
        this._renderer = renderer;
    }

    public getCanvas():HTMLCanvasElement{
        return this._renderer.getCanvas();
    }

    public getContext():CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext{
        return this._renderer.getContext();
    }

    public getCurrentFrame():number{
        return this._currentFrame;
    }

    public nextFrame():void{
        this._currentFrame++; 
        this.update(mat2d.create(), 1);
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);

        // clear the rendering pipeline
        this._renderer.clear();

        // add children to rendering pipeline
        this.render(this._renderer);

        // draw objects
        this._renderer.draw(this._renderer.getCanvas(), this._renderer.getContext());
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    }
}

export enum StageEvent{
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}