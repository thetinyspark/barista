"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.getNextPowerOf2 = function (value) {
        var num = 1;
        while (num < value) {
            num *= 2;
        }
        return num;
    };
    return MathUtils;
}());
exports.default = MathUtils;
