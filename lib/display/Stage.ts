import DisplayObjectContainer from "./DisplayObjectContainer";
export default class Stage extends DisplayObjectContainer{

    private _canvas:HTMLCanvasElement;
    private _context:CanvasRenderingContext2D;
    private _currentFrame:number = 0;

    constructor(){
        super();
        this._setCanvas(document.createElement("canvas"));
    }

    private _setCanvas(canvas:HTMLCanvasElement):void{
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
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
        this._context.clearRect(0,0, this._canvas.width, this._canvas.height);
        this._currentFrame++; 
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);
        this.render(this._context);
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    }
}

export enum StageEvent{
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}