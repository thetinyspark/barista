import { mat2d } from "gl-matrix";
import IRenderer from "../rendering/IRenderer";
import DisplayObject from "./DisplayObject";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
/**
 * The DisplayObjectContainer class is the base class for every DisplayObjects containers.
 * It supports basic functionality like adding, removing, containing children at a specific index or not.
 * It inherits from DisplayObject, so it could be transformed, but it's texture property is useless.
 */
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
    update(worldMatrix: mat2d, worldOpacity: number): void;
    render(renderer: IRenderer): void;
}
