import IDisplayObject from "./IDisplayObject";
export default interface IDisplayObjectContainer extends IDisplayObject {
    addChild(child: IDisplayObject): any;
    removeChild(child: IDisplayObject): IDisplayObject;
    addChildAt(child: IDisplayObject, index: number): any;
    removeChildAt(index: number): IDisplayObject;
    getChildren(): IDisplayObject[];
    getChildIndex(child: IDisplayObject): number;
    contains(child: IDisplayObject): boolean;
    removeChildren(): any;
}
