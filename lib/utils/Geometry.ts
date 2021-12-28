import { mat2d } from "gl-matrix";
import IDisplayObject from "../display/IDisplayObject";
import { isDisplayObjectContainer } from "./isser";

/**
 * The Geometry class is a set of utilitaries functions.
 */
export default class Geometry{

    /**
     * Calculates and returns the IDisplayObject's Hitbox 
     * in the world space coordinates.
     * @param child IDisplayObject
     * @returns HitBox
     */
    public static getHitbox(child:IDisplayObject):Hitbox{

        if( isDisplayObjectContainer(child) ){
            const hitboxes:Hitbox[] = child.getChildren().map(child=>this.getHitbox(child));
            const allX = []; 
            const allY = []; 
            hitboxes.forEach( 
                (box:Hitbox)=>{
                    allX.push(box.topLeft.x, box.topRight.x, box.bottomLeft.x, box.bottomRight.x);
                    allY.push(box.topLeft.y, box.topRight.y, box.bottomLeft.y, box.bottomRight.y);
                }
            ); 

            const left:number = Math.min(...allX);
            const right:number = Math.max(...allX);
            const top:number = Math.min(...allY);
            const bottom:number = Math.max(...allY);
            const result = {
                topLeft: {x:left, y:top}, 
                topRight: {x:right, y:top}, 
                bottomLeft: {x:left, y:bottom}, 
                bottomRight: {x:right, y:bottom}
            };
            return result;
        }
        else{
            const matrix = child.worldMatrix;
            const topLeft:Point = this.transformPoint(0,0, matrix);
            const topRight:Point = this.transformPoint(child.width,0, matrix);
            const bottomLeft:Point = this.transformPoint(0, child.height, matrix);
            const bottomRight:Point = this.transformPoint(child.width, child.height, matrix);
            
            const result =  {
                topLeft: topLeft, 
                topRight: topRight, 
                bottomLeft: bottomLeft, 
                bottomRight: bottomRight
            };
            return result;
        }
    }

    /**
     * Calculates and returns the IDisplayObject's bouding Rectangle 
     * in the world space coordinates.
     * @param child IDisplayObject
     * @returns Rectangle
     */
    public static  getBoundingRect(child:IDisplayObject):Rectangle{

        const hitbox = this.getHitbox(child);        
        const left = Math.min(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        const right = Math.max(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        const top = Math.min(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        const bottom = Math.max(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);

        return {
            x: left, 
            y: top, 
            width: right - left, 
            height: bottom - top
        };
    }

    /**
     * Transforms a pair of x,y coordinates with a matrix
     * @param x number
     * @param y number
     * @param matrix mat2d
     * @returns Point
     */
    public static  transformPoint(x:number, y:number, matrix:mat2d):Point{
        return {
            x: Math.round(x * matrix[0] + y * matrix[2] + matrix[4]),
            y: Math.round(x * matrix[1] + y * matrix[3] + matrix[5]),
        };
    }

    /**
     * Says if the IDisplayObject collides the x,y coordinates or not
     * @param x number
     * @param y number
     * @param child IDisplayObject
     * @returns boolean
     */
    public static collide(x:number, y:number, child:IDisplayObject):boolean{
        const rect = this.getBoundingRect(child);
        const out = ( 
            x < rect.x                 || 
            x > rect.x + rect.width    || 
            y < rect.y                 ||
            y > rect.y + rect.height 
        );
        return !out;
    }
}

/**
 * An object type which defines four points representing an hitbox
 */
export type Hitbox = {topLeft:Point, topRight:Point, bottomLeft:Point, bottomRight:Point};
/**
 * An object type which a 2d point (x,y)
 */
export type Point = {x:number, y:number};
/**
 * An object type which represents a Rectangle
 */
export type Rectangle = {x:number, y:number, width:number, height:number};