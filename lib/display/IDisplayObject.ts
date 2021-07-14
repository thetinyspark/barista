import { mat2d } from "gl-matrix";
import { IDisplayObjectContainer } from "./IDisplayObjectContainer";

export interface IDisplayObject{
    render(context:CanvasRenderingContext2D):void;
    updateMatrix():void;
    parent:IDisplayObjectContainer|null;
    matrix:mat2d;
    worldMatrix:mat2d;
    scaleX:number;
    scaleY:number;
    rotation:number;
    x:number;
    y:number;
    width:number;
    height:number;
}