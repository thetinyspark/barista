import { mat2d } from "gl-matrix";
import { Emitter } from "@thetinyspark/tiny-observer";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
import IFilter from "../filters/IFilter";
import { Point } from "..";
/**
 * The DisplayObject class is the base class for all objects that can be placed on the display list.
 * It supports basic functionality like the x and y position of an object, as well as more advanced
 * properties of the object such as its transformation matrix.
 */
export default class DisplayObject extends Emitter implements IDisplayObject {
    filters: IFilter[];
    texture: Texture | null;
    worldMatrix: mat2d;
    matrix: mat2d;
    x: number;
    y: number;
    opacity: number;
    worldOpacity: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    width: number;
    height: number;
    transformOrigin: Point;
    parent: IDisplayObjectContainer | null;
    snapshot(): HTMLCanvasElement;
    update(worldMatrix: mat2d, worldOpacity?: number): void;
    render(renderer: IRenderer): void;
    /**
    * Creates and returns a Display Object from a Texture object.
    * The resulting object will have the same width and height
    * as the "sx" and "sy" properties of the Texture object.
    * The "texture" property will contains the Texture object.
    **/
    static createFromTexture(texture: Texture): IDisplayObject;
}
