import IDisplayObject from "./IDisplayObject";

export default interface IDisplayObjectContainer extends IDisplayObject{
    addChild(child:IDisplayObject);
    removeChild(child:IDisplayObject):IDisplayObject; 
    addChildAt(child:IDisplayObject, index:number);
    removeChildAt(index:number):IDisplayObject; 
    getChildren():IDisplayObject[];
    getChildIndex(child:IDisplayObject):number;
    contains(child:IDisplayObject):boolean;
    removeChildren();
}