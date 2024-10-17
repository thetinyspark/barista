"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObjectContainer_1 = require("../../../../core/display/DisplayObjectContainer");
const iso_utils_1 = require("../../utils/iso.utils");
class IsoMap extends DisplayObjectContainer_1.default {
    sortAuto = false;
    sort() {
        const children = this.getChildren();
        children.sort(iso_utils_1.isoSort);
    }
    render(renderer) {
        if (this.sortAuto) {
            this.sort();
        }
        super.render(renderer);
    }
}
exports.default = IsoMap;
