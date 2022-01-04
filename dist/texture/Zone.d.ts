/**
 * The Zone class represents a 2d Region which can be bound to a specific data.
 * It is used by Spritesheet class but you can use it for another
 * space partitionning/packing problem. A Zone instance can be splitted on
 * the right, left, top and bottom sides.
 */
export default class Zone {
    x: number;
    y: number;
    width: number;
    height: number;
    data: any;
    isEmpty(): boolean;
    private _partialClone;
    /**
     * Splits the Zone on the right side and create another zone.
     * @param limit number The x coordinates which splits the Zone
     * @returns Zone
     */
    splitRight(limit: number): Zone;
    /**
     * Splits the Zone on the left side and create another zone.
     * @param limit number The x coordinates which splits the Zone
     * @returns Zone
     */
    splitLeft(limit: number): Zone;
    /**
     * Splits the Zone on the bottom side and create another zone.
     * @param limit number The y coordinates which splits the Zone
     * @returns Zone
     */
    splitBottom(limit: number): Zone;
    /**
     * Splits the Zone on the top side and create another zone.
     * @param limit number The y coordinates which splits the Zone
     * @returns Zone
     */
    splitTop(limit: number): Zone;
    /**
     * Returns the Zone's area .
     * @returns number
     */
    getArea(): number;
    /**
     * Says if the Zone could contain an hypothetic rectangular
     * object which has a specific width & height.
     * @param width number
     * @param height number
     * @returns
     */
    canContain(width: number, height: number): boolean;
}
