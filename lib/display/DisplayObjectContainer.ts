import DisplayObject from "./DisplayObject";
import { IDisplayObject } from "./IDisplayObject";
import { IDisplayObjectContainer } from "./IDisplayObjectContainer";

export default class DisplayObjectContainer extends DisplayObject implements IDisplayObjectContainer {

    private _children:IDisplayObject[] = [];

    public addChild(child: IDisplayObject) {
        if( this.contains(child ))
            this.removeChild(child);

        this._children.push(child);
        child.parent = this;
    }

    public removeChild(child: IDisplayObject):IDisplayObject {
        const pos:number = this.getChildIndex(child);
        return this.removeChildAt(pos);
    }

    public addChildAt(child: IDisplayObject, index: number) {
        if( this.contains(child ))
            this.removeChild(child);

        const before = this._children.splice(0,index); 
        child.parent = this;
        this._children = [...before, child, ...this._children];
    }

    public removeChildAt(index: number):IDisplayObject {
        const child:IDisplayObject = this._children[index] || null;
        if( child === null )
            throw new Error("out of bound index for removeChildAt"); 

        this._children.splice(index, 1);
        child.parent = null;
        return child;
    }

    public getChildren(): IDisplayObject[] {
        return this._children;
    }

    public getChildIndex(child: IDisplayObject): number {
        return this._children.indexOf(child);
    }

    public contains(child: IDisplayObject): boolean {
        return child.parent === this && this.getChildIndex(child) > -1;
    }

    public removeChildren() {
        while( this._children.length > 0 ){
            this.removeChildAt(0);
        }
    }

    public render(context:CanvasRenderingContext2D):void{
        this._children.forEach( 
            (child:IDisplayObject)=>{
                child.render(context);
            }
        );
    }
    
}