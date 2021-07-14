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
        this._currentFrame++; 
        this.render(this._context);
    }
}