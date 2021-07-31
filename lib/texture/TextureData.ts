import { getNextPowerOf2 } from "../rendering/webgl/utils/utils";
export default class TextureData{

    public width:number = 0;
    public height:number = 0;
    private _source:CanvasImageSource;
    private _uid:string;
    private _glTexture:WebGLTexture|null = null;
    private static _counter:number = 0;

    constructor(source:CanvasImageSource){
        this._setSource(source);
        this._uid = "texture_data_"+TextureData._counter++;
    }

    private _setSource(source:CanvasImageSource):void{
        const nwidth:number = getNextPowerOf2(source.width as number);
        const nheight:number = getNextPowerOf2(source.height as number);
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = nwidth;
        canvas.height = nheight;

        context.drawImage(source, 0, 0);
        this._source = canvas;
        this.width = nwidth;
        this.height = nheight;
    }

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

        return this._glTexture;
    }

    public getSource():CanvasImageSource{
        return this._source;
    }

    public get uid():string{
        return this._uid;
    }

}