import { Canvas } from "canvas";

/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
export default class CanvasUtils{
    public static create(width:number = 1, height:number = 1):HTMLCanvasElement{
        return new Canvas(width,height) as unknown as HTMLCanvasElement;
    }

    public static fillRect(canvas:HTMLCanvasElement,color:string, x:number, y:number, width:number, height:number){
        const context = canvas.getContext("2d"); 
        context.save();
        context.beginPath();
        context.fillStyle = color; 
        context.fillRect(x,y,width, height); 
        context.fill();
        context.closePath();
        context.restore();
    }

    public static getCanvasPixels(canvas:HTMLCanvasElement):Uint8ClampedArray{
        const offscreen = CanvasUtils.create(canvas.width, canvas.height); 
        offscreen.getContext("2d").drawImage(canvas, 0, 0); 
        return offscreen.getContext("2d").getImageData(0,0,offscreen.width, offscreen.height).data;
    }
    
    public static  getCanvasPixel(canvas:HTMLCanvasElement, x:number, y:number):number[]{
        const pixels = CanvasUtils.getCanvasPixels(canvas);
        const pos = Math.floor( y * canvas.width * 4 ) + (x*4);
        return [
            pixels[pos],
            pixels[pos+1],
            pixels[pos+2],
            pixels[pos+3],
        ]; 
    }
    
    public static canvasPixelToRGBA(pixelData: number[]):{r:number, g:number, b:number, a:number}{
        return {
            r: pixelData[0],
            g: pixelData[1],
            b: pixelData[2],
            a: pixelData[3]
        }
    }

    public static pixelsAreTheSame(pixelsA:number[], pixelsB:number[]):boolean{
        if( pixelsA.length !== pixelsB.length )
            return false; 
    
        for( let i:number = 0; i < pixelsA.length; i++ ){
            if( pixelsA[i] !== pixelsB[i])
                return false;
        }

        return true;
    }
}