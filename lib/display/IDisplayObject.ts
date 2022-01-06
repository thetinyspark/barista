import { IEmitter } from "@thetinyspark/tiny-observer";
import { mat2d } from "gl-matrix";
import { Point } from "..";
import IFilter from "../filters/IFilter";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObjectContainer from "./IDisplayObjectContainer";

export default interface IDisplayObject extends IEmitter {
  /**
   * Draws the object into using the IRenderer passed in param
   */
  render(renderer: IRenderer): void;
  /**
   * update object's matrix, world matrix, opacity and world opacity
   */
  update(worldMatrix: mat2d, worldOpacity: number): void;
  /**
   * Returns a snapshot of the object
   */
  snapshot(): HTMLCanvasElement;
  /**
   * An indexed array that contains each filter associated to the object
   */
  filters: IFilter[];
  /**
   * The current texture object associated to this object.
   */
  texture: Texture | null;
  /**
   * Indicates the IDisplayObjectContainer object that contains this object.
   */
  parent: IDisplayObjectContainer | null;
  /**
   * The transformation matrix of the object
   */
  matrix: mat2d;
  /**
   * contains the result of object's matrix by world transformation matrix
   */
  worldMatrix: mat2d;
  /**
   * Indicates the horizontal scale (percentage) of the object as applied from the registration point.
   */
  scaleX: number;
  /**
   * Indicates the vertical scale (percentage) of the object as applied from the registration point.
   */
  scaleY: number;
  /**
   * Indicates the rotation of the object, in degrees, from its original orientation.
   */
  rotation: number;
  /**
   * Indicates the x coordinate of the object relative to the local coordinates of its parent.
   */
  x: number;
  /**
   * Indicates the y coordinate of the object relative to the local coordinates of its parent.
   */
  y: number;
  /**
   * Indicates the width of the object, in pixels.
   */
  width: number;
  /**
   * Indicates the height of the display object, in pixels.
   */
  height: number;
  /**
   * Indicates the transparency value of the object.
   */
  opacity: number;
  /**
   * Indicates the result of object's opacity by world's opacity.
   */
  worldOpacity: number;
  /**
   * The origin point of all object's transformations
   */
  transformOrigin: Point;
  /**
   * Says wether or not the object is visible 
   */
  visible: Boolean;
}
