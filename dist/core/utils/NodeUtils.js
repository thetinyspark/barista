"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
var nodeDocument = {
    createElement(tag) {
        if (tag === "canvas") {
            return new canvas_1.Canvas(1, 1);
        }
        else if (tag === "audio") {
            return null;
        }
        else if (tag === "video") {
            return null;
        }
    }
};
exports.default = nodeDocument;
