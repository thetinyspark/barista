import Stage, { StageEvent } from "./Stage";
import DisplayObject from "./DisplayObject";
import INotification from "../event/INotification";
import Texture from "../texture/Texture";
import TextureData from "../texture/TextureData";

export default class Stats extends DisplayObject{
    private _stage: Stage|null = null;
    private _lastFrameTime:number = 0;
    private _monitoring:boolean = false;
    private _elapsedTime:number = 0;
    private _context:CanvasRenderingContext2D;

    constructor(){ 
        super(); 

        const data = document.createElement("canvas"); 
        data.width = 100;
        data.height = 50;
        this.texture = new Texture(
            "stats_texture", 
            new TextureData(data), 
            0, 
            0, 
            data.width, 
            data.height
        );
        this._context = (this.texture.source as HTMLCanvasElement).getContext("2d");
    }

    public getStage(): Stage|null {
        return this._stage;
    }

    public start():void{
        if( this._stage !== null )
            this._stage.subscribe(StageEvent.ENTER_FRAME,this._enterFrame);

        this._monitoring = true;
    }
    
    public stop():void{
        if( this._stage !== null )
            this._stage.unsubscribe(StageEvent.ENTER_FRAME, this._enterFrame); 

        this._monitoring = false;
    }

    public setStage(value: Stage) {
        this.stop();
        this._stage = value;
    }

    private _enterFrame = (notification:INotification):void => {
        this._elapsedTime = new Date().getTime() - this._lastFrameTime;
        this._lastFrameTime = new Date().getTime();

        const context = this._context;
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0,0, this.width, this.height); 
        context.fill();
        
        context.fillStyle = "red"; 
        context.fillText( this.getFps().toString(), 0, Math.round(this.height / 2));
        context.closePath();
    }

    public getFps():number{
        return this._monitoring ? Math.round( 1000 / this._elapsedTime ) : -1;
    }
}