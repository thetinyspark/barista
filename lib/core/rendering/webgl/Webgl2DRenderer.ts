import IDisplayObject from "../../display/IDisplayObject";
import Texture from "../../texture/Texture";
import Default2DShader from "./Default2DShader";
import IRenderer from "../IRenderer";
import WebGlConfig from "./WebGlConfig";
import CanvasUtils from "../../utils/CanvasUtils";
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
    private _currentTexture:Texture;

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

        const batched = this.batch(this._children); 
        batched.forEach( 
            (currentBatch)=>{
                if( currentBatch.length === 0 )
                    return; 

                const first = currentBatch[0]; 
                this._currentTexture = first.texture; 
                WebGlConfig.pushVerticesInto(currentBatch, this._vertexArray);
                

                const context = this._context;		
                context.activeTexture(context.TEXTURE0);
                context.bindTexture(context.TEXTURE_2D, this._currentTexture.data.getGlTexture(context));
                    
                if( currentBatch.length > WebGlConfig.MAX_QUAD_PER_CALL >> 1 )
                {
                    context.bufferSubData(context.ARRAY_BUFFER, 0, this._vertexArray);
                }
                else
                {
                	const view = this._vertexArray.subarray(0, currentBatch.length * 4 * WebGlConfig.VERTEX_SIZE);
                	context.bufferSubData(context.ARRAY_BUFFER, 0, view);
                }

                context.drawElements(context.TRIANGLES, currentBatch.length * WebGlConfig.INDICES_PER_QUAD, context.UNSIGNED_SHORT, 0 );

            }
        ); 
    }

    batch(children:IDisplayObject[]):IDisplayObject[][]{
    
        const result = []; 
        let batch = [];
        let texId:string = "";
        let counter:number = 0;
        
        for( let i:number = 0; i < children.length; i++ ){

            if( children[i].texture === null )
                continue;

            if( children[i].texture.textureUid !== texId || counter % WebGlConfig.MAX_QUAD_PER_CALL === 0 ){
                batch = [];
                result.push(batch);
                texId = children[i].texture.textureUid;
                counter = 0;
            }
    
            batch.push(children[i]);
            counter++;
        }
    
        return result;
    }

}