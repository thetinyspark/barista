import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import AnimationFrameData from "./AnimationFrameData";
import DisplayObject from "./DisplayObject";
import DisplayObjectContainer from "./DisplayObjectContainer";
/**
 * The Animation class is the base class for all animations that can be placed on the display list.
 * It supports basic functionality like play, rewind, stop, loop the animations.
 * It is basically a DisplayObject with a an array of "frame textures".
 * Everytime the render method is called, the currentFrameIndex is increased or decreased
 * depending on animation length, animation way (backward||forward)
 */
export default class Animation extends DisplayObjectContainer{

    private _frames:AnimationFrameData[]        = [];
    private _currentFrameIndex:number           = 0;
    private _playing:boolean                    = false; 
    private _forwarding:boolean                 = true;
    public loop:boolean                         = false; 

    constructor(){
        super();
        this.addChild(new DisplayObject());
    }

    /**
     * Plays the animation forward
     */
    public play():void{
        this._playing = true; 
        this._forwarding = true;
    }

    /**
     * Plays the animation backward
     */
    public rewind():void{
        this._playing = true; 
        this._forwarding = false;
    }

    /**
     * Stop the animation
     */
    public stop():void{
        this._playing = false;
    }


    public render(renderer:IRenderer):void{
        super.render(renderer); 

        if( this._playing ){
            const step:number = (this._forwarding) ? 1 : -1;
            this.goToFrame(this._currentFrameIndex + step);
        }
    }

    /**
     * Clears every frames. 
     */
    public clearFrames():void{
        this._currentFrameIndex = 0;
        this._frames = [];
    }

    /**
     * Sets frame data for the frame index passed in params
     * @param frameIndex the frame index
     * @param frameData  the AnimationFrameData associated to the frame index
     */
    public setFrameAt(frameIndex:number, frameData:AnimationFrameData):void{
        frameData.index = frameIndex;
        this._frames[frameIndex] = frameData; 
    }

    /**
     * Returns the frame data at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    public getFrameAt(frameIndex:number):AnimationFrameData|null{
        return this._frames[frameIndex] || null;
    }

    /**
     * Returns the current frame data if it exists
     * @returns an AnimationFrameData object or null
     */
    public getCurrentFrame():AnimationFrameData|null{
        let current:AnimationFrameData = this.getFrameAt(this.getCurrentFrameIndex());
        if( current === null && this._forwarding )
            current = this.getPreviousDefinedFrameAt(this.getCurrentFrameIndex());
        else if( current === null && !this._forwarding )
            current = this.getNextDefinedFrameAt( this.getCurrentFrameIndex() );
        
        return current;
    }

    /**
     * Returns the closest defined frame data( if it exists) 
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    public getPreviousDefinedFrameAt(frameIndex:number):AnimationFrameData|null{
        let frame:AnimationFrameData|null = null; 

        while( frame === null && frameIndex > -1 ){
            frame = this.getFrameAt(frameIndex--);
        }

        return frame;
    }

    /**
     * Returns the closest defined frame data( if it exists) 
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    public getNextDefinedFrameAt(frameIndex:number):AnimationFrameData|null{
        let frame:AnimationFrameData|null = null; 

        while( frame === null && frameIndex <= this.getLastFrameIndex() ){
            frame = this.getFrameAt(frameIndex++);
        }

        return frame;
    }

    /**
     * Removes the frame data at a specific index
     * @param frameIndex the specific index
     */
    public removeFrameAt(frameIndex:number):void{
        this._frames[frameIndex] = null;
    }


    /**
     * @returns number the animation length (num frames)
     */
    public getAnimationLength():number{
        return this._frames.length;
    }

    /**
     * @returns number The last valid frame index (0-based)
     */
    public getLastFrameIndex():number{
        return this.getAnimationLength() - 1;
    }

    /**
     * @returns number the current frame index
     */
    public getCurrentFrameIndex():number{
        return this._currentFrameIndex;
    }

    /**
     * Go to the specific frame index
     * @param frameIndex the specific frame index
     */
    public goToFrame(frameIndex:number):void{
        if( this.loop ){
            frameIndex = (frameIndex > this.getLastFrameIndex()) ? 0 : frameIndex;
            frameIndex = (frameIndex <  0) ? this.getLastFrameIndex() : frameIndex;
        }
        else{
            frameIndex = (frameIndex > this.getLastFrameIndex()) ? this.getLastFrameIndex() : frameIndex;
            frameIndex = (frameIndex <  0) ? 0 : frameIndex;
        }
        this._currentFrameIndex = frameIndex;

        const frame     = this.getCurrentFrame();
        const child     = this.getChildren()[0];
        child.texture   = frame.texture;
        child.width     = frame.width;
        child.height    = frame.height;
        child.x         = frame.offsetX;
        child.y         = frame.offsetY;

        this.emit( AnimationEvent.PLAY_FRAME, this._currentFrameIndex );
    }

    /**
     * Creates and returns a new Animation from a set of pairs "frame/texture" objects.
     * @param desc an array of frames & textures
     * @returns Animation object
     */
    public static createFromTexturesAndFrames(desc:{frame:number, texture:Texture}[]):Animation{
        const anim = new Animation();
        desc.forEach( 
            (frameConfig)=>{
                const data          = new AnimationFrameData();
                data.width          = frameConfig.texture.sw;
                data.height         = frameConfig.texture.sh;
                data.originalWidth  = data.width;
                data.originalHeight = data.height;
                data.texture        = frameConfig.texture;
                anim.setFrameAt(frameConfig.frame,data);
            }
        );
        return anim;
    }
}


export enum AnimationEvent{
    PLAY_FRAME = "PLAY_FRAME"
}