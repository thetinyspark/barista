import DisplayObject from "./DisplayObject";
import { mat2d } from "gl-matrix";
import Geometry, {Rectangle} from "../utils/Geometry";
/**
 * The Camera class is the base class for every Camera.
 * A camera is used to look at the scene from a specific point of view. 
 * It inherits from DisplayObject so you can transform it, BUT
 * it will result on a visual "opposite" transformation in the final scene. 
 */
export default class Camera extends DisplayObject{
    constructor(){
        super();
    }

   /**
   * Returns the opposite of the camera's worldMatrix.
   * It is used by the scene (Stage) to simulate a certain 
   * point of view.
   **/
    public getRevertWorldMatrix(){
        return Geometry.getRevertWorldMatrix(this.worldMatrix);
    }

   /**
   * Returns the real bounds of the camera.
   * You could use it on clipping strategy.
   **/
    public getBounds():Rectangle{
        return Geometry.getBoundingRect(this);
    }
}