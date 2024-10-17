import { DisplayObjectContainer, IDisplayObject } from "../../core/display";
import { Texture } from "../../core/texture";
import { Rectangle } from "../../core/utils";
export default class Scale9Grid extends DisplayObjectContainer {
    private _topLeft;
    private _topRight;
    private _topCenter;
    private _left;
    private _center;
    private _right;
    private _bottomLeft;
    private _bottomCenter;
    private _bottomRight;
    constructor();
    getTopLeft(): IDisplayObject;
    getTopRight(): IDisplayObject;
    getTopCenter(): IDisplayObject;
    getLeft(): IDisplayObject;
    getCenter(): IDisplayObject;
    getRight(): IDisplayObject;
    getBottomLeft(): IDisplayObject;
    getBottomCenter(): IDisplayObject;
    getBottomRight(): IDisplayObject;
    setGrid(texture: Texture, center: Rectangle): void;
    resize(width: number, height: number): void;
}
