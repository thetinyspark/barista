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
var DisplayObjectContainer_1 = require("../../../../core/display/DisplayObjectContainer");
var iso_utils_1 = require("../../utils/iso.utils");
var IsoMap = /** @class */ (function (_super) {
    __extends(IsoMap, _super);
    function IsoMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortAuto = false;
        return _this;
    }
    IsoMap.prototype.sort = function () {
        var children = this.getChildren();
        children.sort(iso_utils_1.isoSort);
    };
    IsoMap.prototype.render = function (renderer) {
        if (this.sortAuto) {
            this.sort();
        }
        _super.prototype.render.call(this, renderer);
    };
    return IsoMap;
}(DisplayObjectContainer_1.default));
exports.default = IsoMap;
