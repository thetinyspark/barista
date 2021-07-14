import { IDisplayObject } from "./IDisplayObject";
import { IDisplayObjectContainer } from "./IDisplayObjectContainer";

export default class DisplayObject implements IDisplayObject{

    public x: number = 0;
    public y: number = 0;
    public width: number = 0;
    public height: number = 0;
    public parent:IDisplayObjectContainer|null = null;

    public render(context: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
}