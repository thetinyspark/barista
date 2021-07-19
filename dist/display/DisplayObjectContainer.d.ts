import { mat2d } from "gl-matrix";
import IRenderer from "../rendering/IRenderer";
import DisplayObject from "./DisplayObject";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
export default class DisplayObjectContainer extends DisplayObject implements IDisplayObjectContainer {
    private _children;
    addChild(child: IDisplayObject): void;
    removeChild(child: IDisplayObject): IDisplayObject;
    addChildAt(child: IDisplayObject, index: number): void;
    removeChildAt(index: number): IDisplayObject;
    getChildren(): IDisplayObject[];
    getChildIndex(child: IDisplayObject): number;
    contains(child: IDisplayObject): boolean;
    removeChildren(): void;
    update(worldMatrix?: mat2d | null): void;
    render(renderer: IRenderer): void;
}
