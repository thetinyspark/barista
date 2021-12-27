import DisplayObject from "./DisplayObject";
import { mat2d } from "gl-matrix";
import { Rectangle } from "../utils/Geometry";
export default class Camera extends DisplayObject {
    constructor();
    getRevertWorldMatrix(): mat2d;
    getBounds(): Rectangle;
}
