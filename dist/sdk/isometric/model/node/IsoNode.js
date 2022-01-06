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
var iso_utils_1 = require("../../utils/iso.utils");
var GameNode_1 = require("../../../common/model/node/GameNode");
var IsoNode = /** @class */ (function (_super) {
    __extends(IsoNode, _super);
    function IsoNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isoX = 0;
        _this.isoY = 0;
        _this.isoZ = 0;
        _this.row = 0;
        _this.col = 0;
        _this.cellWidth = 64;
        _this.cellHeight = 32;
        _this.width = 64;
        _this.height = 64;
        return _this;
    }
    Object.defineProperty(IsoNode.prototype, "offsetY", {
        get: function () {
            return this.height - this.cellHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IsoNode.prototype, "offsetX", {
        get: function () {
            return (this.width - this.cellWidth) >> 1;
        },
        enumerable: false,
        configurable: true
    });
    IsoNode.prototype.resetRowAndColFromCoordinates = function () {
        var coords = iso_utils_1.screenToIso(this.isoX, this.isoY, this.cellWidth, this.cellHeight);
        this.col = coords.col;
        this.row = coords.row;
    };
    IsoNode.prototype.resetCoordinatesFromRowAndCol = function () {
        var coords = iso_utils_1.isoToScreen(this.row, this.col, this.cellWidth, this.cellHeight);
        this.isoX = coords.x;
        this.isoY = coords.y;
        this.isoZ = 0;
    };
    return IsoNode;
}(GameNode_1.default));
exports.default = IsoNode;
