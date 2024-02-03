"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsoNode_1 = require("../model/node/IsoNode");
function makeIsometric(userClass) {
    return class extends userClass {
        isoNode = new IsoNode_1.default();
        constructor(...args) { super(...args); }
        syncWithNode() {
            if (this.isoNode !== null) {
                this.y = this.isoNode.isoY - this.isoNode.isoZ - this.isoNode.offsetY;
                this.x = this.isoNode.isoX - this.isoNode.offsetX;
            }
        }
    };
}
exports.default = makeIsometric;
