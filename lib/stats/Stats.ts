import Stage, { StageEvent } from "../display/Stage";
import INotification from "../event/INotification";

export default class Stats{
    private _stage: Stage|null = null;
    private _lastFrameTime:number = 0;
    private _monitoring:boolean = false;
    private _elapsedTime:number = 0;

    constructor(){}

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


}