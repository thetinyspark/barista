import { mat2d } from "gl-matrix";
import Emitter from "../event/Emitter";
import IFilter from "../filters/IFilter";
import Canvas2DRenderer from "../rendering/Canvas2DRenderer";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import Geometry from "../utils/Geometry";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";

export default class DisplayObject extends Emitter implements IDisplayObject{

    public filters:IFilter[] = [];
    public texture:Texture|null = null;
    public worldMatrix: mat2d = mat2d.create();
    public matrix: mat2d = mat2d.create();
    public x: number = 0;
    public y: number = 0;
    public opacity:number = 1;
    public worldOpacity:number = 1;
    public scaleX:number = 1;
    public scaleY:number = 1;
    public rotation:number = 0;
    public width: number = 0;
    public height: number = 0;
    public parent:IDisplayObjectContainer|null = null;

    public snapshot():HTMLCanvasElement{
        const renderer = new Canvas2DRenderer();
        const saveMatrix = this.matrix; 
        const saveWMatrix = this.worldMatrix;
        const canvas = renderer.getCanvas();
        const context = renderer.getContext() as CanvasRenderingContext2D;

        mat2d.identity(this.matrix);
        mat2d.identity(this.worldMatrix);

        
        canvas.width = this.width; 
        canvas.height = this.height; 

        renderer.add(this);
        renderer.draw( canvas, context );

        this.matrix = saveMatrix;
        this.worldMatrix = saveWMatrix;
        return renderer.getCanvas();
    }

    public update( worldMatrix:mat2d, worldOpacity:number = 1 ):void{
        mat2d.identity(this.matrix);
        mat2d.translate(this.matrix, this.matrix, [this.x, this.y]);
        mat2d.rotate(this.matrix, this.matrix, this.rotation * (Math.PI / 180));
        mat2d.scale(this.matrix, this.matrix, [this.scaleX, this.scaleY]);
        mat2d.multiply(this.worldMatrix, worldMatrix, this.matrix);
        this.worldOpacity = worldOpacity * this.opacity;
    }
    
    public render(renderer:IRenderer): void {
        renderer.add(this);
    }
}