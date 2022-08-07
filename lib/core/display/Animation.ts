import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import DisplayObject from "./DisplayObject";
/**
 * The Animation class is the base class for all animations that can be placed on the display list.
 * It supports basic functionality like play, rewind, stop, loop the animations.
 * It is basically a DisplayObject with a an array of "frame textures".
 * Everytime the render method is called, the currentFrameIndex is increased or decreased
 * depending on animation length, animation way (backward||forward)
 */
export default class Animation extends DisplayObject{

    private _framesOffset:{offsetX:number, offsetY:number}[] = [];
    private _framesTextures:Texture[] = [];
    private _currentFrameIndex:number = 0;
    private _playing:boolean = false; 
    private _forwarding:boolean = true;
    public loop:boolean = false; 

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
        this._framesTextures = [];
        this._framesOffset = [];
    }

    /**
     * Sets the texture for the frame index passed in params
     * @param frameIndex the frame index
     * @param texture  the texture associated to the frame index
     */
    public setFrameTexture(frameIndex:number, texture:Texture):void{
        this._framesTextures[frameIndex] = texture; 
    }

    /**
     * Sets the texture for the frame index passed in params
     * @param frameIndex the frame index
     * @param offsetX  the offsetX associated to the frame index
     * @param offsetY  the offsetX associated to the frame index
     */
    public setFrameOffset(frameIndex:number, offsetX:number, offsetY:number):void{
        this._framesOffset[frameIndex] = {offsetX, offsetY}; 
    }

    /**
     * Returns the current frame texture if it exists
     * @returns a Texture object or null
     */
    public getCurrentFrameOffset():{offsetX:number, offsetY:number}{
        let current:{offsetX:number, offsetY:number} = this.getFrameOffset(this.getCurrentFrameIndex());
        if( current === null && this._forwarding )
            current = this.getPreviousDefinedFrameOffset(this.getCurrentFrameIndex());
        else if( current === null && !this._forwarding )
            current = this.getNextDefinedFrameOffset( this.getCurrentFrameIndex() );
        
        return current;
    }
    /**
     * Returns the current frame texture if it exists
     * @returns a Texture object or null
     */
    public getCurrentFrameTexture():Texture|null{
        let current:Texture = this.getFrameTexture(this.getCurrentFrameIndex());
        if( current === null && this._forwarding )
            current = this.getPreviousDefinedFrameTexture(this.getCurrentFrameIndex());
        else if( current === null && !this._forwarding )
            current = this.getNextDefinedFrameTexture( this.getCurrentFrameIndex() );
        
        return current;
    }

    /**
     * Returns the frame texture at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    public getFrameTexture(frameIndex:number):Texture|null{
        return this._framesTextures[frameIndex] || null;
    }

    /**
     * Returns the frame offsets at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns an object
     */
    public getFrameOffset(frameIndex:number):{offsetX:number, offsetY:number}|null{
        return this._framesOffset[frameIndex] || null;
    }

    /**
     * Returns the closest defined frame texture( if it exists) 
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    public getPreviousDefinedFrameTexture(frameIndex:number):Texture|null{
        let texture:Texture|null = null; 

        while( texture === null && frameIndex > -1 ){
            texture = this.getFrameTexture(frameIndex--);
        }

        return texture;
    }

    /**
     * Returns the closest defined frame offset( if it exists) 
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an object with offsetX & offsetY or null
     */
    public getPreviousDefinedFrameOffset(frameIndex:number):{offsetX:number, offsetY:number}|null{
        let offset:{offsetX:number, offsetY:number}|null = null; 

        while( offset === null && frameIndex > -1 ){
            offset = this.getFrameOffset(frameIndex--);
        }

        return offset;
    }

    /**
     * Returns the closest defined frame texture( if it exists) 
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    public getNextDefinedFrameTexture(frameIndex:number):Texture|null{
        let texture:Texture|null = null; 

        while( texture === null && frameIndex <= this.getLastFrameIndex() ){
            texture = this.getFrameTexture(frameIndex++);
        }

        return texture;
    }

    
    /**
     * Returns the closest defined frame offset( if it exists) 
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an object with offsetX & offsetY or null
     */
     public getNextDefinedFrameOffset(frameIndex:number):{offsetX:number, offsetY:number}|null{
        let offset:{offsetX:number, offsetY:number}|null = null; 

        while( offset === null && frameIndex <= this.getLastFrameIndex() ){
            offset = this.getFrameOffset(frameIndex++);
        }

        return offset;
    }

    /**
     * Removes the frame texture at a specific index
     * @param frameIndex the specific index
     */
    public removeFrameTexture(frameIndex:number):void{
        this._framesTextures[frameIndex] = null;
    }

    /**
     * Removes the frame offset at a specific index
     * @param frameIndex the specific index
     */
    public removeFrameOffset(frameIndex:number):void{
        this._framesOffset[frameIndex] = null;
    }

    /**
     * @returns number the animation length (num frames)
     */
    public getAnimationLength():number{
        return this._framesTextures.length;
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
        this.texture = this.getCurrentFrameTexture();
        const offset = this.getCurrentFrameOffset(); 
        if( offset !== null ){
            this.offsetX = offset.offsetX;
            this.offsetY = offset.offsetY;
        }
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
                anim.setFrameTexture(frameConfig.frame, frameConfig.texture);
            }
        );
        return anim;
    }
}


export enum AnimationEvent{
    PLAY_FRAME = "PLAY_FRAME"
}