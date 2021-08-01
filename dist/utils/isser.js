"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDisplayObjectContainer = void 0;
function isDisplayObjectContainer(value) {
    return value.getChildren !== undefined;
}
exports.isDisplayObjectContainer = isDisplayObjectContainer;
