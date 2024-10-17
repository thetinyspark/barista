"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iso_utils_1 = require("../../utils/iso.utils");
const GameNode_1 = require("../../../common/model/node/GameNode");
class IsoNode extends GameNode_1.default {
    isoX = 0;
    isoY = 0;
    isoZ = 0;
    row = 0;
    col = 0;
    cellWidth = 64;
    cellHeight = 32;
    width = 64;
    height = 64;
    get offsetY() {
        return this.height - this.cellHeight;
    }
    get offsetX() {
        return (this.width - this.cellWidth) >> 1;
    }
    resetRowAndColFromCoordinates() {
        const coords = iso_utils_1.screenToIso(this.isoX, this.isoY, this.cellWidth, this.cellHeight);
        this.col = coords.col;
        this.row = coords.row;
    }
    resetCoordinatesFromRowAndCol() {
        const coords = iso_utils_1.isoToScreen(this.row, this.col, this.cellWidth, this.cellHeight);
        this.isoX = coords.x;
        this.isoY = coords.y;
        this.isoZ = 0;
    }
}
exports.default = IsoNode;
