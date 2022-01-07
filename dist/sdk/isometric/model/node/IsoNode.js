"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iso_utils_1 = require("../../utils/iso.utils");
const GameNode_1 = require("../../../common/model/node/GameNode");
class IsoNode extends GameNode_1.default {
    constructor() {
        super(...arguments);
        this.isoX = 0;
        this.isoY = 0;
        this.isoZ = 0;
        this.row = 0;
        this.col = 0;
        this.cellWidth = 64;
        this.cellHeight = 32;
        this.width = 64;
        this.height = 64;
    }
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
