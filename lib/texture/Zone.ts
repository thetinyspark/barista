/**
 * The Zone class represents a 2d Region which can be bound to a specific data.
 * It is used by Spritesheet class but you can use it for another 
 * space partitionning/packing problem. A Zone instance can be splitted on 
 * the right, left, top and bottom sides.
 */
export default class Zone{
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public data: any = null;

    public isEmpty():boolean{
        return this.data === null;
    }

    private _partialClone():Zone{
        const zone = new Zone();
        zone.x = this.x;
        zone.y = this.y;
        zone.width = this.width;
        zone.height = this.height;
        return zone;
    }

    /**
     * Splits the Zone on the right side and create another zone.
     * @param limit number The x coordinates which splits the Zone
     * @returns Zone
     */
    public splitRight(limit:number):Zone{
        if( limit >= this.width )
            return null;

        const other = this._partialClone();
        other.x += limit;
        other.width -= limit;
        this.width = limit;
        return other;
    }
    /**
     * Splits the Zone on the left side and create another zone.
     * @param limit number The x coordinates which splits the Zone
     * @returns Zone
     */
    public splitLeft(limit:number):Zone{
        if( limit >= this.width )
            return null;

        const other = this._partialClone();
        this.x += limit;
        this.width -= limit;
        other.width = limit;
        return other;
    }
    /**
     * Splits the Zone on the bottom side and create another zone.
     * @param limit number The y coordinates which splits the Zone
     * @returns Zone
     */
    public splitBottom(limit:number):Zone{
        if( limit >= this.height )
            return null;

        const other = this._partialClone();
        other.y += limit;
        other.height -= limit;
        this.height = limit;
        return other;
    }
    /**
     * Splits the Zone on the top side and create another zone.
     * @param limit number The y coordinates which splits the Zone
     * @returns Zone
     */
    public splitTop(limit:number):Zone{
        if( limit >= this.height )
            return null;

        const other = this._partialClone();
        this.y += limit;
        this.height -= limit;
        other.height = limit;
        return other;
    }
    /**
     * Returns the Zone's area .
     * @returns number
     */
    public getArea():number{
        return this.width * this.height;
    }
    /**
     * Says if the Zone could contain an hypothetic rectangular 
     * object which has a specific width & height.
     * @param width number
     * @param height number
     * @returns 
     */
    public canContain(width:number, height:number):boolean{
        return width <= this.width && height <= this.height;
    }
}