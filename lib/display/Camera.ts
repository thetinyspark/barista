import DisplayObject from "./DisplayObject";
import { mat2d } from "gl-matrix";
import Geometry, {Rectangle} from "../utils/Geometry";

export default class Camera extends DisplayObject{
    constructor(){
        super();
    }

    public getRevertWorldMatrix(){
        const out = mat2d.create();
        mat2d.invert(out, this.worldMatrix);
        return out;
    }

    public getBounds():Rectangle{
        return Geometry.getBoundingRect(this);
    }
}