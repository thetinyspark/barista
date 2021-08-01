export default class MathUtils{
    public static getNextPowerOf2(value:number):number{
        let num = 1;
        while( num < value ){
            num *= 2;
        }
        
        return num;
    }
}