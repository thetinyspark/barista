"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The MathUtils class is a set of utilitaries mathematical functions.
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    /**
     * Calculates and returns the next power of 2
     * equals or greather than the value passed in param.
     * @param value number
     * @returns number
     */
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
