import { EMSGSIZE } from "constants";
import { mat2d } from "gl-matrix";
import Emitter from "../event/Emitter";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";

export default class DisplayObject extends Emitter implements IDisplayObject{

    public worldMatrix: mat2d = mat2d.create();
    public matrix: mat2d = mat2d.create();
    public x: number = 0;
    public y: number = 0;
    public opacity:number = 1;
    public scaleX:number = 1;
    public scaleY:number = 1;
    public rotation:number = 0;
    public width: number = 0;
    public height: number = 0;
    public parent:IDisplayObjectContainer|null = null;


    public updateMatrix( worldMatrix:mat2d|null = null ):void{
        mat2d.identity(this.matrix);
        mat2d.translate(this.matrix, this.matrix, [this.x, this.y]);
        mat2d.rotate(this.matrix, this.matrix, this.rotation * (Math.PI / 180));
        mat2d.scale(this.matrix, this.matrix, [this.scaleX, this.scaleY]);

        if( worldMatrix !== null )
            mat2d.multiply(this.worldMatrix, worldMatrix, this.matrix);
        else
            this.worldMatrix = this.matrix;
    }

    public prepareContext(context: CanvasRenderingContext2D):void{
        const matrix = this.matrix;
        context.save();
        context.globalAlpha = context.globalAlpha * this.opacity;
        context.transform(matrix[0],matrix[1],matrix[2],matrix[3], matrix[4], matrix[5]);
    }

    public restoreContext(context:CanvasRenderingContext2D):void{
        context.restore();
    }

    public render(context: CanvasRenderingContext2D): void {}
}