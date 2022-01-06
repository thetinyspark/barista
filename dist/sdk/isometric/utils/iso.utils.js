"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isoSort = exports.isoToScreen = exports.screenToIso = void 0;
/**
* Converts a pair of x,y coordinates with specifics cell's width and height into a pair of row,col
* @method screenToIso
* @param {number} x
* @param {number} y
* @param {number} cellW
* @param {number} cellH
* @return {row:number,col:number}
*/
function screenToIso(x, y, cellW, cellH) {
    var obj = { row: 0, col: 0 };
    var divY = y / cellH;
    var divX = x / cellW;
    obj.col = divY + divX;
    obj.row = divY - divX;
    return obj;
}
exports.screenToIso = screenToIso;
/**
* Converts a pair of row,col coordinates with specifics cell's width and height into a pair of x,y
* @method isoToScreen
* @param {number} row
* @param {number} col
* @param {number} cellW
* @param {number} cellH
* @return {x:number,y:number} a Point Object
*/
function isoToScreen(row, col, cellW, cellH) {
    var x = (col - row) * (cellW * 0.5);
    var y = (col + row) * (cellH * 0.5);
    return { x: x >> 0, y: y >> 0 };
}
exports.isoToScreen = isoToScreen;
/**
 * Sort object according to a top iso view (camera) and their isoNode coordinates  (isoX, isoY, isoZ).
 * - Smaller isoY means object is farther.
 * - Greater isoY means object is closer.
 *
 * If both objects share the same isoY:
 * - Smaller isoZ means objects is farther.
 * - Greater isoZ means objects is closer.
 */
function isoSort(a, b) {
    if (!a.isoNode || !b.isoNode)
        return -1;
    if (a.isoNode.isoY === b.isoNode.isoY)
        return a.isoNode.isoZ < b.isoNode.isoZ ? -1 : 1;
    return a.isoNode.isoY < b.isoNode.isoY ? -1 : 1;
}
exports.isoSort = isoSort;
