"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The MathUtils class is a set of utilitaries mathematical functions.
 */
class MathUtils {
    /**
     * Calculates and returns the next power of 2
     * equals or greather than the value passed in param.
     * @param value number
     * @returns number
     */
    static getNextPowerOf2(value) {
        let num = 1;
        while (num < value) {
            num *= 2;
        }
        return num;
    }
}
exports.default = MathUtils;
