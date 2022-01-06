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
export function screenToIso(x:number, y:number, cellW:number, cellH:number):{row:number, col:number} {
	let obj = {row:0,col:0};
	let divY:number = y / cellH;
	let divX:number = x / cellW;
	obj.col = divY + divX;
	obj.row = divY - divX;
	return obj;
}

/**
* Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y
* @method isoToScreen
* @param {number} row
* @param {number} col
* @param {number} cellW
* @param {number} cellH
* @return {x:number,y:number} a Point Object
*/
export function isoToScreen(row:number, col:number, cellW:number, cellH:number):{x:number,y:number} {
	let x:number = (col - row) * (cellW * 0.5);
	let y:number = (col + row) * (cellH * 0.5);
	return {x:x >> 0, y:y >> 0};
}

/**
 * Sort object according to a top iso view (camera) and their isoNode coordinates  (isoX, isoY, isoZ).
 * - Smaller isoY means object is farther.
 * - Greater isoY means object is closer.
 * 
 * If both objects share the same isoY: 
 * - Smaller isoZ means objects is farther.
 * - Greater isoZ means objects is closer.
 */
export function isoSort(a:Isometric, b:Isometric){
	if( !a.isoNode || !b.isoNode )
		return -1; 

	if( a.isoNode.isoY === b.isoNode.isoY )
		return a.isoNode.isoZ < b.isoNode.isoZ ? -1 : 1;
		
	return a.isoNode.isoY < b.isoNode.isoY ? -1 : 1;
}