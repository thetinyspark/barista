import { IDisplayObjectContainer } from "./IDisplayObjectContainer";

export interface IDisplayObject{
    render(context:CanvasRenderingContext2D):void;
    parent:IDisplayObjectContainer|null;
    x:number;
    y:number;
    width:number;
    height:number;
}