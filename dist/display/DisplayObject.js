"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gl_matrix_1 = require("gl-matrix");
var Emitter_1 = require("../event/Emitter");
var DisplayObject = /** @class */ (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.texture = null;
        _this.worldMatrix = gl_matrix_1.mat2d.create();
        _this.matrix = gl_matrix_1.mat2d.create();
        _this.x = 0;
        _this.y = 0;
        _this.opacity = 1;
        _this.worldOpacity = 1;
        _this.scaleX = 1;
        _this.scaleY = 1;
        _this.rotation = 0;
        _this.width = 0;
        _this.height = 0;
        _this.parent = null;
        return _this;
    }
    DisplayObject.prototype.update = function (worldMatrix, worldOpacity) {
        if (worldOpacity === void 0) { worldOpacity = 1; }
        gl_matrix_1.mat2d.identity(this.matrix);
        gl_matrix_1.mat2d.translate(this.matrix, this.matrix, [this.x, this.y]);
        gl_matrix_1.mat2d.rotate(this.matrix, this.matrix, this.rotation * (Math.PI / 180));
        gl_matrix_1.mat2d.scale(this.matrix, this.matrix, [this.scaleX, this.scaleY]);
        gl_matrix_1.mat2d.multiply(this.worldMatrix, worldMatrix, this.matrix);
        this.worldOpacity = worldOpacity * this.opacity;
    };
    DisplayObject.prototype.render = function (renderer) {
        renderer.add(this);
    };
    return DisplayObject;
}(Emitter_1.default));
exports.default = DisplayObject;
