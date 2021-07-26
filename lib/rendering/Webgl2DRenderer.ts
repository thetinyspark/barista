import IDisplayObject from "../display/IDisplayObject";
import Texture from "../texture/Texture";
import Default2DShader from "./webgl/shaders/Default2DShader";
import IRenderer from "./IRenderer";
import { createIndexArray, createVertexArray } from "./webgl/utils/utils";

export default class Webgl2DRenderer implements IRenderer{
    private _children:IDisplayObject[] = []; 
    private _canvas:HTMLCanvasElement;
    private _context:WebGLRenderingContext;
    private _vertexArray:Float32Array;
    private _indexArray:Uint16Array;
    private _vertexBuffer:WebGLBuffer;
    private _indexBuffer:WebGLBuffer;
    private _currentShader:Default2DShader;
    private _counter:number = 0;
    private _currentTexture:Texture;
    private _maxObjPerDrawCall:number = 2000;

    constructor(){
        this._init();
    }

    private _init():void{

        // init canvas
        this._canvas = document.createElement("canvas"); 
        this._context = this._canvas.getContext("webgl");

        // init default shader
        this._currentShader = new Default2DShader(this._context);

    
        this._vertexArray = createVertexArray();
        this._indexArray = createIndexArray();

        // init buffer
        this._vertexBuffer = this._context.createBuffer();
        this._indexBuffer = this._context.createBuffer();

       
        // bind buffers
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._vertexBuffer);
		this._context.bufferData(this._context.ARRAY_BUFFER, this._vertexArray, this._context.DYNAMIC_DRAW );
		
		this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._indexBuffer );
		this._context.bufferData(this._context.ELEMENT_ARRAY_BUFFER, this._indexArray, this._context.STATIC_DRAW);
    }    

    private _flush():void{
        // const context = this._context;		
		
		// if( this._counter == 0 )
		// 	return;
			
		// context.activeTexture(context.TEXTURE0);
		// // context.bindTexture(context.TEXTURE_2D, this._currentTexture.getGLTexture(this._context));
			
		// if( this._counter > this._maxObjPerDrawCall >> 1 )
		// {
		// 	context.bufferSubData(context.ARRAY_BUFFER, 0, this._vertexArray);
		// }
		// else
		// {
		// 	const view = this._vertexArray.subarray(0, this._counter * 4 * Default2DShader.VERTEX_SIZE);
		// 	context.bufferSubData(context.ARRAY_BUFFER, 0, view);
		// }
		
		
		// context.drawElements(context.TRIANGLES, this._counter * 6, context.UNSIGNED_SHORT, 0 );
		// this._counter = 0;
    }

    add(child: IDisplayObject): void {
        this._children.push(child);
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
    
    draw(): void {

        // context.uniform2f( this._currentShader.projectionPointer, projectionVector.x, projectionVector.y );
        this._context.uniform2f( this._currentShader.projectionPointer, 0, 0 );
        this._counter = 0;
    }
    
}