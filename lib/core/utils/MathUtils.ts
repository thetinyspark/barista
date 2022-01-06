/**
 * The MathUtils class is a set of utilitaries mathematical functions.
 */
export default class MathUtils{
    /**
     * Calculates and returns the next power of 2
     * equals or greather than the value passed in param.
     * @param value number
     * @returns number
     */
    public static getNextPowerOf2(value:number):number{
        let num = 1;
        while( num < value ){
            num *= 2;
        }
        
        return num;
    }
}