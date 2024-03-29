import Stage, { StageEvent } from "./Stage";
import DisplayObject from "./DisplayObject";
import {INotification} from "@thetinyspark/tiny-observer";
import Texture from "../texture/Texture";
import TextureData from "../texture/TextureData";
import CanvasUtils from "../utils/CanvasUtils";
/**
 * The Stats class is a basic frame counter.
 * It supports basic functionality like start, stop, getFps
 * ```typescript
 * import {Stage, Stats} from "@thetinyspark/moocaccino-barista";
 * // Create stage instance
 * const stage:Stage = new Stage();
 * // Defines renderer canvas width & height
 * stage.getRenderer().getCanvas().width = stage.width = 1024;
 * stage.getRenderer().getCanvas().height = stage.height = 1024;
 * ```
 * ```typescript
 * // Create and add stats object
 * const stats:Stats = new Stats();
 * stats.x = stats.y = 0;
 * stats.width = 100;
 * stats.height = 30;
 * stage.addChild(stats);
 * ```
 * ```typescript
 * // render loop
 * function render():void{
 *   stage.nextFrame();
 *   window.requestAnimation(render);
 * }
 * render();
 * ```
 */
export default class Stats extends DisplayObject{
    private _stage: Stage|null = null;
    private _lastFrameTime:number = 0;
    private _monitoring:boolean = false;
    private _elapsedTime:number = 0;
    private _context:CanvasRenderingContext2D;

    constructor(){ 
        super(); 

        const data = CanvasUtils.create();
        this.width = data.width = 450;
        this.height = data.height = 50;
        this.texture = new Texture(
            "stats_texture", 
            new TextureData(data), 
            0, 
            0, 
            data.width, 
            data.height
        );
        this.texture.data.isDynamic= true;
        this._context = (this.texture.source as HTMLCanvasElement).getContext("2d");
    }

    /**
     * Returns the stage object which is monitored by Stats instance
     * @returns Stage object
     */
    public getStage(): Stage|null {
        return this._stage;
    }

    /**
     * Sets the stage object which will be monitored by Stats instance
     * @param value Stage object
     */
    public setStage(value: Stage) {
        this.stop();
        this._stage = value;
    }

    /**
     * Starts monitoring the stage
     */
    public start():void{
        if( this._stage !== null )
            this._stage.subscribe(StageEvent.ENTER_FRAME,this._enterFrame);

        this._monitoring = true;
    }

    /**
     * Stops monitoring the stage
     */
    public stop():void{
        if( this._stage !== null )
            this._stage.unsubscribe(StageEvent.ENTER_FRAME, this._enterFrame); 

        this._monitoring = false;
    }

    /**
     * Returns the current FPS (frame per second) of the monitored stage.
     * @returns number
     */
    public getFps():number{
        return this._monitoring ? Math.round( 1000 / this._elapsedTime ) : -1;
    }
    

    private _enterFrame = (notification:INotification):void => {
        this._elapsedTime = new Date().getTime() - this._lastFrameTime;
        this._lastFrameTime = new Date().getTime();
        const currentFrame:number = notification.getPayload() as number;
        const drawCalls = this._stage.getRenderer().getNumDrawCalls();
        const numQuads = this._stage.getRenderer().getChildren().length;
        if( currentFrame % 60 === 0 ){

            const info = "fps: "+this.getFps()+", frame: "+currentFrame + ", drawCalls: "+drawCalls +", quads: "+numQuads;
            
            const context = this._context;
            context.beginPath();
            context.fillStyle = "black";
            context.fillRect(0,0, this.width, this.height); 
            context.fill();
            
            context.font = "20px Arial";
            context.fillStyle = "red"; 
            context.fillText( info, 0, Math.round(this.height / 2));
            context.closePath();
        }
    }

}