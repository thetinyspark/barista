import { mat2d } from "gl-matrix";
import Canvas2DRenderer from "../rendering/Canvas2DRenderer";
import IRenderer from "../rendering/IRenderer";
import Camera from "./Camera";
import DisplayObjectContainer from "./DisplayObjectContainer";
/**
 * The Stage class is the base class for the scene.
 * It supports basic functionality like camera, clipping strategy, rendering...
 */
export default class Stage extends DisplayObjectContainer{


    private _camera:Camera = null;
    private _currentFrame:number = 0;
    private _renderer:IRenderer = new Canvas2DRenderer();
    private _clippingStrategy:ClippingStrategy = null;

    constructor(){
        super();
    }

    /**
     * Sets the current Stage Camera, default is null
     * @param camera Camera object
     */
    public setCamera(camera:Camera):void{
        this._camera = camera;
    }

    /**
     * Returns the current stage's Camera
     * @returns Camera object
     */
    public getCamera():Camera{
        return this._camera;
    }

    /**
     * Sets a specific function which is used to clip the scene.
     * Clipping the scene consists of removing certain objects from 
     * the rendering pipeline according to specific conditions.
     * @param strategy ClippingStrategy function
     */
    public setClippingStrategy(strategy:ClippingStrategy):void{
        this._clippingStrategy = strategy;
    }

    /**
     * Returns the current stage's clipping strategy, default is null
     * @returns ClippingStrategy function
     */
    public getClippingStrategy():ClippingStrategy{
        return this._clippingStrategy;
    }

    /**
     * Returns the current stage's renderer, default is Canvas2DRenderer
     * @returns IRenderer object
     */
    public getRenderer():IRenderer{
        return this._renderer;
    }

    /**
     * Sets the current stage's renderer
     * @param renderer IRenderer object
     */
    public setRenderer(renderer:IRenderer):void{
        this._renderer = renderer;
    }

    /**
     * Returns the renderer's canvas.
     * @returns HTMLCanvasElement object
     */
    public getCanvas():HTMLCanvasElement{
        return this._renderer.getCanvas();
    }

    /**
     * Returns the renderer's rendering context
     * @returns CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext object
     */
    public getContext():CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext{
        return this._renderer.getContext();
    }

    /**
     * Returns the current frame
     * @returns number
     */
    public getCurrentFrame():number{
        return this._currentFrame;
    }

    /**
     * Updates every DisplayObject matrices. 
     * Increase current frame.
     * Applies clipping strategy if there is one.
     * Renders the display list.
     * Emit events (ENTER_FRAME & FRAME_END)
     */
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