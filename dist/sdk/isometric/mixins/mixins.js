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
var IsoNode_1 = require("../model/node/IsoNode");
function makeIsometric(userClass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.isoNode = new IsoNode_1.default();
            return _this;
        }
        class_1.prototype.syncWithNode = function () {
            if (this.isoNode !== null) {
                this.y = this.isoNode.isoY - this.isoNode.isoZ - this.isoNode.offsetY;
                this.x = this.isoNode.isoX - this.isoNode.offsetX;
            }
        };
        return class_1;
    }(userClass));
}
exports.default = makeIsometric;
