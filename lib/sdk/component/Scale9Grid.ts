import { DisplayObject, DisplayObjectContainer, IDisplayObject } from "../../core/display";
import { Texture } from "../../core/texture";
import { Rectangle } from "../../core/utils";

export default class Scale9Grid extends DisplayObjectContainer{    

    private _topLeft:IDisplayObject;
    private _topRight:IDisplayObject;
    private _topCenter:IDisplayObject;
    private _left:IDisplayObject;
    private _center:IDisplayObject;
    private _right:IDisplayObject;
    private _bottomLeft:IDisplayObject;
    private _bottomCenter:IDisplayObject;
    private _bottomRight:IDisplayObject;
    constructor(){
        super();
    }

    public getTopLeft():IDisplayObject{ return this._topLeft; }
    public getTopRight():IDisplayObject{ return this._topRight; }
    public getTopCenter():IDisplayObject{ return this._topCenter; }
    public getLeft():IDisplayObject{ return this._left; }
    public getCenter():IDisplayObject{ return this._center; }
    public getRight():IDisplayObject{ return this._right; }
    public getBottomLeft():IDisplayObject{ return this._bottomLeft; }
    public getBottomCenter():IDisplayObject{ return this._bottomCenter; }
    public getBottomRight():IDisplayObject{ return this._bottomRight; }

    public setGrid(texture:Texture, center:Rectangle):void{
        const bounds:Rectangle = {x:texture.sx, y:texture.sy, width:texture.sw, height:texture.sh};
        const topleft:Rectangle = {x:bounds.x, y:bounds.y, width:center.x, height:center.y};
        const topright:Rectangle = {x:bounds.x + center.x + center.width, y:bounds.y, width:bounds.width - (center.x + center.width), height:center.y};
        const topcenter:Rectangle = {x:bounds.x + center.x, y:bounds.y, width:center.width, height:center.y};
        const left:Rectangle = {x:bounds.x, y:bounds.y + center.y, width:center.x, height:center.height};
        const bottomleft:Rectangle = {x:left.x, y:left.y + left.height, width: left.width, height: (bounds.y + bounds.height) - ( left.y + left.height)};

        this._topLeft = DisplayObject.createFromTexture(texture.createSubTexture("topleft", topleft.x, topleft.y, topleft.width, topleft.height));
        this._topRight = DisplayObject.createFromTexture(texture.createSubTexture("topright", topright.x, topright.y, topright.width, topright.height));
        this._topCenter = DisplayObject.createFromTexture(texture.createSubTexture("topcenter", topcenter.x, topcenter.y, topcenter.width, topcenter.height));
        this._left = DisplayObject.createFromTexture(texture.createSubTexture("left", left.x, left.y, left.width, left.height));
        this._center = DisplayObject.createFromTexture(texture.createSubTexture("center", this._topCenter.texture.sx, this._left.texture.sy, this._topCenter.texture.sw, this._left.texture.sh));
        this._right = DisplayObject.createFromTexture(texture.createSubTexture("right", this._topRight.texture.sx, this._center.texture.sy, this._topRight.texture.sw, this._center.texture.sh));
        this._bottomLeft = DisplayObject.createFromTexture(texture.createSubTexture("bottomleft", bottomleft.x, bottomleft.y, bottomleft.width, bottomleft.height));
        this._bottomCenter = DisplayObject.createFromTexture(texture.createSubTexture("bottomcenter", this._center.texture.sx, this._bottomLeft.texture.sy, this._center.texture.sw, this._bottomLeft.texture.sh));
        this._bottomRight = DisplayObject.createFromTexture(texture.createSubTexture("bottomright", this._topRight.texture.sx, this._bottomLeft.texture.sy, this._topRight.texture.sw, this._bottomLeft.texture.sh));
    }

    public resize(width:number, height:number):void{
        this.removeChildren();
        this.addChild(this._topLeft);
        this.addChild(this._topCenter);
        this.addChild(this._topRight);
        this.addChild(this._left);
        this.addChild(this._center);
        this.addChild(this._right);
        this.addChild(this._bottomLeft);
        this.addChild(this._bottomCenter);
        this.addChild(this._bottomRight);

        /*replace and resize everyone*/

        // top center
        this._topCenter.x = this._topLeft.width;
        this._topCenter.width = width - this._topLeft.width - this._topRight.width;

        // top right
        this._topRight.x = width - this._topRight.width;

        // left
        this._left.y = this._topLeft.y + this._topLeft.height;
        this._left.height = height - this._topLeft.height - this._bottomLeft.height;

        // center
        this._center.x = this._topCenter.x;
        this._center.y = this._left.y;
        this._center.width = this._topCenter.width;
        this._center.height = this._left.height;

        // right
        this._right.x = this._topRight.x;
        this._right.y = this._center.y;
        this._right.height = this._center.height;

        // bottomleft
        this._bottomLeft.y = this._left.y + this._left.height;

        // bottomcenter
        this._bottomCenter.x = this._center.x;
        this._bottomCenter.y = this._bottomLeft.y;
        this._bottomCenter.width = this._center.width;

        // bottomright
        this._bottomRight.x = this._right.x;
        this._bottomRight.y = this._bottomLeft.y;

        this.width = width;
        this.height = height;
    }
}