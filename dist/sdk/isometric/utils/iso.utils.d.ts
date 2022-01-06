import { Isometric } from "../mixins/mixins";
/**
* Converts a pair of x,y coordinates with specifics cell's width and height into a pair of row,col
* @method screenToIso
* @param {number} x
* @param {number} y
* @param {number} cellW
* @param {number} cellH
* @return {row:number,col:number}
*/
export declare function screenToIso(x: number, y: number, cellW: number, cellH: number): {
    row: number;
    col: number;
};
/**
* Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y
* @method isoToScreen
* @param {number} row
* @param {number} col
* @param {number} cellW
* @param {number} cellH
* @return {x:number,y:number} a Point Object
*/
export declare function isoToScreen(row: number, col: number, cellW: number, cellH: number): {
    x: number;
    y: number;
};
/**
 * Sort object according to a top iso view (camera) and their isoNode coordinates  (isoX, isoY, isoZ).
 * - Smaller isoY means object is farther.
 * - Greater isoY means object is closer.
 *
 * If both objects share the same isoY:
 * - Smaller isoZ means objects is farther.
 * - Greater isoZ means objects is closer.
 */
export declare function isoSort(a: Isometric, b: Isometric): 1 | -1;
