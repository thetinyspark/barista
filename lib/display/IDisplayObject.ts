import { mat2d } from "gl-matrix";
import IEmitter from "../event/IEmitter";
import IDisplayObjectContainer from "./IDisplayObjectContainer";

export default interface IDisplayObject extends IEmitter{
    prepareContext(context:CanvasRenderingContext2D):void;
    restoreContext(context:CanvasRenderingContext2D):void;
    render(context:CanvasRenderingContext2D):void;
    updateMatrix(worldMatrix:mat2d|null):void;
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
    opacity:number;
}