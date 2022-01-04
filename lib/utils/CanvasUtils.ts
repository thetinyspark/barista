/**
 * The CanvasUtils class is a set of utilitaries for canvas elements.
 */
export default class CanvasUtils{
    public static create(width:number = 1, height:number = 1):HTMLCanvasElement{
        const canvas = document.createElement("canvas"); 
        canvas.width = width; 
        canvas.height = height;
        return canvas;
    }
}