import Stage, { StageEvent } from "../display/Stage";
import DisplayObject from "../display/DisplayObject";
import INotification from "../event/INotification";
import IRenderer from "../rendering/IRenderer";

export default class Stats extends DisplayObject{
    private _stage: Stage|null = null;
    private _lastFrameTime:number = 0;
    private _monitoring:boolean = false;
    private _elapsedTime:number = 0;

    constructor(){ 
        super(); 
        this.texture = document.createElement("canvas"); 
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
    }

    public getFps():number{
        return this._monitoring ? Math.round( 1000 / this._elapsedTime ) : -1;
    }

    public render(renderer:IRenderer):void{
        super.render(renderer);
        const context = ( this.texture as HTMLCanvasElement ).getContext("2d");
        this.texture.width = this.width;
        this.texture.height = this.height;
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(0,0, this.width, this.height); 
        context.fill();

        context.fillStyle = "red"; 
        context.fillText( this.getFps().toString(), 0, Math.round(this.height / 2));
        context.closePath();
    }


}