import { mat2d } from "gl-matrix";
import IDisplayObject from "../display/IDisplayObject";
/**
 * The Geometry class is a set of utilitaries functions.
 */
export default class Geometry {
    static TO_RADIANS: number;
    /**
     * Array of precompute degree to radians angles
     */
    static FAST_ANGLES: number[];
    /**
     * Array of precompute sinus(degree to radians angles)
     */
    static FAST_SIN: number[];
    /**
     * Array of precompute cosinus(degree to radians angles)
     */
    static FAST_COS: number[];
    private static getFastAngle;
    private static getFastSinus;
    private static getFastCosinus;
    static updateTransformAll(worldMatrix: any, objects: IDisplayObject[]): void;
    static updateTransform(worldMatrix: mat2d, object: IDisplayObject): void;
    /**
     * Calculates and returns the IDisplayObject's Hitbox
     * in the world space coordinates.
     * @param child IDisplayObject
     * @returns HitBox
     */
    static getHitbox(child: IDisplayObject): Hitbox;
    /**
     * Calculates and returns the IDisplayObject's bouding Rectangle
     * in the world space coordinates.
     * @param child IDisplayObject
     * @returns Rectangle
     */
    static getBoundingRect(child: IDisplayObject): Rectangle;
    /**
     * Transforms a pair of x,y coordinates with a matrix
     * @param x number
     * @param y number
     * @param matrix mat2d
     * @returns Point
     */
    static transformPoint(x: number, y: number, matrix: mat2d): Point;
    /**
     * Says if the IDisplayObject collides the x,y coordinates or not
     * @param x number
     * @param y number
     * @param child IDisplayObject
     * @returns boolean
     */
    static collide(x: number, y: number, child: IDisplayObject): boolean;
}
/**
 * An object type which defines four points representing an hitbox
 */
export declare type Hitbox = {
    topLeft: Point;
    topRight: Point;
    bottomLeft: Point;
    bottomRight: Point;
};
/**
 * An object type which a 2d point (x,y)
 */
export declare type Point = {
    x: number;
    y: number;
};
/**
 * An object type which represents a Rectangle
 */
export declare type Rectangle = {
    x: number;
    y: number;
    width: number;
    height: number;
};
