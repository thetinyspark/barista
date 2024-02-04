"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = exports.isWebGLAvailable = exports.isDisplayObjectContainer = exports.Geometry = exports.CanvasUtils = void 0;
const NodeCanvasUtils_1 = require("./NodeCanvasUtils");
exports.CanvasUtils = NodeCanvasUtils_1.default;
const Geometry_1 = require("./Geometry");
exports.Geometry = Geometry_1.default;
const isser_1 = require("./isser");
Object.defineProperty(exports, "isDisplayObjectContainer", { enumerable: true, get: function () { return isser_1.isDisplayObjectContainer; } });
Object.defineProperty(exports, "isWebGLAvailable", { enumerable: true, get: function () { return isser_1.isWebGLAvailable; } });
const MathUtils_1 = require("./MathUtils");
exports.MathUtils = MathUtils_1.default;