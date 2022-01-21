import IDisplayObject from "../../display/IDisplayObject";
import Default2DShader from "./Default2DShader";
import IRenderer from "../IRenderer";
import WebGlConfig from "./WebGlConfig";
import CanvasUtils from "../../utils/CanvasUtils";
import BatchTexture from "./batch/BatchTexture";
import TextureDataManager from "./TextureDataManager";
import { TextureData } from "../../texture";
import BatchDrawCall from "./batch/BatchDrawCall";
/**
 * The Webgl2DRenderer class is the base class for WebGL2d rendering.
 */
export default class Webgl2DRenderer implements IRenderer{
    private _children:IDisplayObject[] = []; 
    private _canvas:HTMLCanvasElement;
    private _context:WebGLRenderingContext;
    private _vertexArray:Float32Array;
    private _indexArray:Uint16Array;
    private _vertexBuffer:WebGLBuffer;
    private _indexBuffer:WebGLBuffer;
    private _currentShader:Default2DShader;
    private _drawCalls:number = 0;

    constructor(){
        this._init();
    }

    private _init():void{

        // init canvas
        this._canvas = CanvasUtils.create(); 
        this._context = this._canvas.getContext("webgl");

        this._vertexArray = WebGlConfig.createVertexArray();
        this._indexArray = WebGlConfig.createIndexArray();

        // init buffer
        this._vertexBuffer = this._context.createBuffer();
        this._indexBuffer = this._context.createBuffer();

       
        // bind buffers
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._vertexBuffer);
		this._context.bufferData(this._context.ARRAY_BUFFER, this._vertexArray, this._context.DYNAMIC_DRAW );
		
		this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._indexBuffer );
		this._context.bufferData(this._context.ELEMENT_ARRAY_BUFFER, this._indexArray, this._context.STATIC_DRAW);

        // init default shader
        this._currentShader = new Default2DShader(this._context);

        // disable depth test
		this._context.disable(this._context.DEPTH_TEST);

        // disable culling faces
		this._context.disable(this._context.CULL_FACE);

        // init blend func
		this._context.blendFunc( this._context.ONE, this._context.ONE_MINUS_SRC_ALPHA );
		this._context.enable(this._context.BLEND);
    }    


    add(child: IDisplayObject): void {
        this._children.push(child);
    }

    getNumDrawCalls(): number {
        return this._drawCalls;
    }

    getCanvas():HTMLCanvasElement{
        return this._canvas;
    }   

    getContext():CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext{
        return this._context;
    }

    getChildren(): IDisplayObject[] {
        return this._children;
    }

    clear(): void {
        this._children = []; 
    }
    
    draw(canvas:HTMLCanvasElement, context: WebGLRenderingContext): void {

        const x = canvas.width/2;  
        const y = -canvas.height/2;
        context.uniform2f( this._currentShader.projectionPointer, x, y );
        context.clearColor(0.0,0.0,0.0,1.0);
		context.viewport(0, 0, canvas.width, canvas.height);
		context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);

        const manager = new TextureDataManager();
        const batches = this.batch(this._children);

        this._drawCalls = 0;
        
        batches.forEach( 
            (current:BatchTexture)=>{

                manager.reset(context, WebGlConfig.MAX_TEXTURES_UNITS);

                Array.from(current.datas).forEach( 
                    (textureData:TextureData, index:number)=>{
                        manager.fillChannelAt(index, textureData);
                    }
                ); 

                current.subBatches.forEach( 
                    (subBatch:BatchDrawCall)=>{
                        WebGlConfig.pushVerticesInto(subBatch.objects, this._vertexArray);
                        context.bufferSubData(context.ARRAY_BUFFER, 0, this._vertexArray);
                        context.drawElements(
                            context.TRIANGLES, 
                            subBatch.objects.length * WebGlConfig.INDICES_PER_QUAD, 
                            context.UNSIGNED_SHORT, 
                            0 
                        );

                        this._drawCalls++;
                    }
                )
            }
        );
    }

    batch(children:IDisplayObject[]):BatchTexture[]{
        const batchTextures = BatchTexture.create(children.filter( child => child.texture !== null), WebGlConfig.MAX_TEXTURES_UNITS);
        batchTextures.forEach( 
            (current)=>{
                current.subBatches = BatchDrawCall.create(current.objects, WebGlConfig.MAX_QUAD_PER_CALL);
            }
        ); 

        return batchTextures;
    }

}