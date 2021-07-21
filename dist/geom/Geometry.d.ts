import { mat2d } from "gl-matrix";
import IDisplayObject from "../display/IDisplayObject";
export default class Geometry {
    private static _isDisplayObjectContainer;
    static getHitbox(child: IDisplayObject): Hitbox;
    static getBoundingRect(child: IDisplayObject): Rectangle;
    static transformPoint(x: number, y: number, matrix: mat2d): Point;
    static collide(x: number, y: number, child: IDisplayObject): boolean;
}
export declare type Hitbox = {
    topLeft: Point;
    topRight: Point;
    bottomLeft: Point;
    bottomRight: Point;
};
export declare type Point = {
    x: number;
    y: number;
};
export declare type Rectangle = {
    x: number;
    y: number;
    width: number;
    height: number;
};
