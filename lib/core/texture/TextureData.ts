import CanvasUtils from "../utils/CanvasUtils";
import MathUtils from "../utils/MathUtils";
/**
 * The TextureData class is the base class for containing graphic source.
 * It defines a width, a height and a dynamic property 
 * It can create,hold and return a WebGLTexture from the graphic source.
 */
export default class TextureData{

    /**
     * The width of the texture data
     */
    public width:number = 0;
    /**
     * The height of the texture data
     */
    public height:number = 0;
    /**
     * The position of the texture data inside webgl program
     * (used by TextureDataManager at every frame do NOT touch it unless you know what you're doing)
     */
    public texturePos:number = 0;
    private _source:CanvasImageSource;
    private _uid:string;
    private _glTexture:WebGLTexture|null = null;
    private _isDynamic: boolean = false;
    private _updateNextFrame:boolean = false;

    private static _counter:number = 0;

    /**
     * Creates a new TextureData object which hold the graphic source passed in param.
     * @param source CanvasImageSource the graphic source
     */
    constructor(source:CanvasImageSource){
        this.setSource(source);
        this._uid = "texture_data_"+TextureData._counter++;
    }

    /**
     * Sets the current TextureData source
     * @param source CanvasImageSource
     */
    public setSource(source:CanvasImageSource):void{
        const nwidth:number = MathUtils.getNextPowerOf2(source.width as number);
        const nheight:number = MathUtils.getNextPowerOf2(source.height as number);
        const canvas = CanvasUtils.create();
        const context = canvas.getContext("2d");
        canvas.width = nwidth;
        canvas.height = nheight;

        context.drawImage(source, 0, 0);
        this._source = canvas;
        this.width = nwidth;
        this.height = nheight;

        this._updateNextFrame = true;
    }

    /**
     * Returns the current TextureData source
     * @returns CanvasImageSource
     */
    public getSource():CanvasImageSource{
        return this._source;
    }

    /**
     * Returns a WebGLTexture object created from the source.
     * If the TextureData is dynamic, the WebGLTexture will 
     * be refreshed and sent to the rendering context passed in param.
     * @param context WebGLRenderingContext
     * @returns WebGLTexture object
     */
    public getGlTexture(context:WebGLRenderingContext):WebGLTexture{


        if( this._glTexture === null ){
            this._glTexture = context.createTexture(); 
        
            context.bindTexture(context.TEXTURE_2D, this._glTexture);
            context.pixelStorei(context.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, this._source as TexImageSource);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MAG_FILTER, context.LINEAR);
            context.texParameteri(context.TEXTURE_2D, context.TEXTURE_MIN_FILTER, context.LINEAR);
            context.bindTexture(context.TEXTURE_2D, null);
        }

        if( this._isDynamic || this._updateNextFrame ){
            this._updateNextFrame = false;
            context.bindTexture(context.TEXTURE_2D, this._glTexture);
            context.texImage2D(context.TEXTURE_2D, 0, context.RGBA, context.RGBA, context.UNSIGNED_BYTE, this._source as TexImageSource);
        }
        
        return this._glTexture;
    }

    /**
     * The TextureData unique id
     */
    public get uid():string{
        return this._uid;
    }

    /**
     * Says if current TextureData is dynamic or not
     * @returns boolean
     */
    public get isDynamic(): boolean {
        return this._isDynamic;
    }
    
    /**
     * Sets the dynamic property of the current TextureData
     */
    public set isDynamic(value: boolean) {
        this._isDynamic = value;
    }
}