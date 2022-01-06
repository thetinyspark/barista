import CanvasUtils from "../../lib/utils/CanvasUtils";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import Stage from "../../lib/display/Stage";
import IFilter from "../../lib/filters/IFilter";
import Canvas2DRenderer from "../../lib/rendering/Canvas2DRenderer";
import Webglrenderer from "../../lib/rendering/webgl/Webgl2DRenderer";
import Texture from "../../lib/texture/Texture";
import TextureData from "../../lib/texture/TextureData";
import { audioBase64d, videobase64 } from "./data.base64.spec";


export function base64ToBlob(base64:string):Blob{
    // Split into two parts
    const parts = base64.split(';base64,');
    
    // Hold the content type
    const contentType = parts[0].split(':')[1];
    
    // Decode Base64 string
    const decodedData = window.atob(parts[1]);
    
    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);
    
    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
        uInt8Array[i] = decodedData.charCodeAt(i);
    }
    
    // Return BLOB after conversion
    return new Blob([uInt8Array], { type: contentType });
}

export function createVideoBlob(){
    return base64ToBlob(videobase64);
}

export function createAudioBlob(){
    return base64ToBlob(audioBase64d);
}

export function createCanvas(width:number, height:number):HTMLCanvasElement{
    return CanvasUtils.create(width,height);
}

export function clearCanvas(canvas:HTMLCanvasElement):void{
    canvas.getContext("2d").clearRect(0,0,canvas.width, canvas.height);
}

export function fillRect(canvas:HTMLCanvasElement,color:string, x:number, y:number, width:number, height:number){
    CanvasUtils.fillRect(canvas,color,x,y,width,height);
}

export function createTextureFromCanvas(id:string, canvas:HTMLCanvasElement):Texture{
    const data = new TextureData(canvas);
    return new Texture(id, data, 0,0,canvas.width, canvas.height);
}

export function createDisplayObjectFromCanvas(texId:string, canvas:HTMLCanvasElement):IDisplayObject{
    const object = new DisplayObject();
    object.texture = createTextureFromCanvas(texId, canvas);
    object.width = canvas.width;
    object.height = canvas.height;
    return object;
}

export function getCanvasPixels(canvas:HTMLCanvasElement):Uint8ClampedArray{
    return CanvasUtils.getCanvasPixels(canvas);
}

export function getCanvasPixel(canvas:HTMLCanvasElement, x:number, y:number):number[]{
    return CanvasUtils.getCanvasPixel(canvas, x, y);
}

export function canvasPixelToRGBA(pixelData: number[]):{r:number, g:number, b:number, a:number}{
    return CanvasUtils.canvasPixelToRGBA(pixelData);
}

export function create2DScene(width:number, height:number):Stage{
    const stage = new Stage();
    const renderer = new Canvas2DRenderer(); 
    stage.setRenderer(renderer);
    stage.getCanvas().width = stage.width = width; 
    stage.getCanvas().height = stage.height = height; 
    return stage;
}

export function createGlScene(width:number, height:number):Stage{
    const stage = new Stage();
    const renderer = new Webglrenderer(); 
    stage.setRenderer(renderer);
    stage.getCanvas().width = stage.width = width; 
    stage.getCanvas().height = stage.height = height; 
    return stage;
}

export function pixelsAreTheSame(pixelsA:number[], pixelsB:number[]):boolean{
    return CanvasUtils.pixelsAreTheSame(pixelsA, pixelsB);
}

export function getRedFilter():IFilter{

    const filter = {
        _save: null, 

        save(child:IDisplayObject):void{
            if( child.texture === null )
                return; 

            this._save = child.texture.data.getSource() as HTMLCanvasElement;
        },
        apply(child:IDisplayObject):void{
            if( child.texture === null )
                return; 
                
           
            const dest = document.createElement("canvas");
            dest.width = child.width; 
            dest.height = child.height; 
            const ctx = dest.getContext("2d");
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.fillRect(0,0,dest.width, dest.height);
            ctx.closePath();
            ctx.restore();
            child.texture.data.setSource(dest); 
        }, 
        rollback(child:IDisplayObject):void{
            if( child.texture === null )
                return; 
            child.texture.data.setSource(this._save); 
        }
    }; 
    return filter;
}