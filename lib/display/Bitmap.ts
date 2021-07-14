import DisplayObject from "./DisplayObject";

export default class Bitmap extends DisplayObject{
    public texture:HTMLImageElement|HTMLCanvasElement|null = null;
    constructor(){
        super();
    }

    public render(context:CanvasRenderingContext2D){
        const matrix = this.worldMatrix;
        context.save();
        context.transform(matrix[0],matrix[1],matrix[2],matrix[3], matrix[4], matrix[5]);
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