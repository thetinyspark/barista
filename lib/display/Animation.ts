import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import DisplayObject from "./DisplayObject";

export default class Animation extends DisplayObject{

    private _framesTextures:Texture[] = [];
    private _currentFrameIndex:number = 0;
    private _playing:boolean = false; 
    private _forwarding:boolean = true;
    public loop:boolean = false; 

    public play():void{
        this._playing = true; 
        this._forwarding = true;
    }

    public rewind():void{
        this._playing = true; 
        this._forwarding = false;
    }

    public stop():void{
        this._playing = false;
    }

    public render(renderer:IRenderer):void{
        super.render(renderer); 

        if( this._playing ){
            const step:number = (this._forwarding) ? 1 : -1;
            this.goToFrame(this._currentFrameIndex + step);
            this.texture = this.getCurrentFrameTexture();
        }
    }

    public clearFrames():void{
        this._currentFrameIndex = 0;
        this._framesTextures = [];
    }

    public setFrameTexture(frameIndex:number, texture:Texture):void{
        this._framesTextures[frameIndex] = texture; 
    }

    public getCurrentFrameTexture():Texture|null{
        return this.getFrameTexture(this.getCurrentFrameIndex());
    }

    public getFrameTexture(frameIndex:number):Texture|null{
        return this._framesTextures[frameIndex] || null;
    }

    public getPreviousDefinedFrameTexture(frameIndex:number):Texture|null{
        let texture:Texture|null = null; 

        while( texture === null && frameIndex > -1 ){
            texture = this.getFrameTexture(frameIndex--);
        }

        return texture;
    }

    public getNextDefinedFrameTexture(frameIndex:number):Texture|null{
        let texture:Texture|null = null; 

        while( texture === null && frameIndex <= this.getLastFrameIndex() ){
            texture = this.getFrameTexture(frameIndex++);
        }

        return texture;
    }

    public removeFrameTexture(frameIndex:number):void{
        this._framesTextures[frameIndex] = null;
    }

    public getAnimationLength():number{
        return this._framesTextures.length;
    }

    public getLastFrameIndex():number{
        return this.getAnimationLength() - 1;
    }

    public getCurrentFrameIndex():number{
        return this._currentFrameIndex;
    }

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
        this.emit( AnimationEvent.PLAY_FRAME, this._currentFrameIndex );
    }
}


export enum AnimationEvent{
    PLAY_FRAME = "PLAY_FRAME"
}