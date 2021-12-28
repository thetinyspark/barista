import { mat2d } from "gl-matrix";
import Canvas2DRenderer from "../rendering/Canvas2DRenderer";
import IRenderer from "../rendering/IRenderer";
import Camera from "./Camera";
import DisplayObjectContainer from "./DisplayObjectContainer";
export default class Stage extends DisplayObjectContainer{


    private _camera:Camera = null;
    private _currentFrame:number = 0;
    private _renderer:IRenderer = new Canvas2DRenderer();
    private _clippingStrategy:ClippingStrategy = null;

    constructor(){
        super();
    }

    public setCamera(camera:Camera):void{
        this._camera = camera;
    }

    public getCamera():Camera{
        return this._camera;
    }

    public setClippingStrategy(strategy:ClippingStrategy):void{
        this._clippingStrategy = strategy;
    }

    public getClippingStrategy():ClippingStrategy{
        return this._clippingStrategy;
    }


    public getRenderer():IRenderer{
        return this._renderer;
    }

    public setRenderer(renderer:IRenderer):void{
        this._renderer = renderer;
    }

    public getCanvas():HTMLCanvasElement{
        return this._renderer.getCanvas();
    }

    public getContext():CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext{
        return this._renderer.getContext();
    }

    public getCurrentFrame():number{
        return this._currentFrame;
    }

    public nextFrame():void{
        this._currentFrame++; 
        if( this._camera !== null ){
            this._camera.update(mat2d.create(), 1);
            this.update(this._camera.getRevertWorldMatrix(), 1);
        }
        else{
            this.update(mat2d.create(), 1);
        }
        
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);

        // apply clipping strategy if there is one
        if( this._clippingStrategy !== null && this._camera !== null ){
            this._clippingStrategy(this, this._camera)
        }

        // clear the rendering pipeline
        this._renderer.clear();

        // add children to rendering pipeline
        this.render(this._renderer);

        // draw objects
        this._renderer.draw(this._renderer.getCanvas(), this._renderer.getContext());
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    }
}

export enum StageEvent{
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}

export type ClippingStrategy = (stage:Stage, camera:Camera) => void;