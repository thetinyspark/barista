import DisplayObject from "./DisplayObject";

export default class Bitmap extends DisplayObject{
    public texture:HTMLImageElement|HTMLCanvasElement|null = null;
    
    constructor(){
        super();
    }

    public render(context:CanvasRenderingContext2D){
        context.save();
        context.drawImage(
            this.texture, 
            0,
            0,
            this.texture.width,
            this.texture.height,
            0,
            0,
            this.width, 
            this.height
        );
        context.restore();
    }
}