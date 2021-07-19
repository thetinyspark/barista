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
        this._setCanvas(document.createElement("canvas"));
    }

    private _setCanvas(canvas:HTMLCanvasElement):void{
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
    }

    public getRenderer():IRenderer{
        return this._renderer;
    }

    public setRenderer(renderer:IRenderer):void{
        this._renderer = renderer;
    }

    public getCanvas():HTMLCanvasElement{
        return this._canvas;
    }

    public getContext():CanvasRenderingContext2D{
        return this._context;
    }

    public getCurrentFrame():number{
        return this._currentFrame;
    }

    public nextFrame():void{
        this.update(mat2d.create());

        this._context.clearRect(0,0, this._canvas.width, this._canvas.height);
        this._currentFrame++; 
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);

        // clear the rendering pipeline
        this._renderer.clear();

        // add children to rendering pipeline
        this.render(this._renderer);

        // draw objects
        this._renderer.draw(this._canvas, this._context);
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    }
}

export enum StageEvent{
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}