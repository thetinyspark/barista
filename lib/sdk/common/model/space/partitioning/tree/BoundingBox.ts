export default class BoundingBox {

    constructor(
        public x:number = 0,
        public y:number = 0,
        public width:number = 0,
        public height:number = 0
    ){}

    public toString(){
        return '[x:'+this.x+',y:'+this.y+',width:'+this.width+',height:'+this.height+']'
    }

    public collideBox(box:BoundingBox):boolean{
        return (
            this.collidePoint(box.x                 , box.y                     ) ||
            this.collidePoint(box.x + box.width     , box.y                     ) ||
            this.collidePoint(box.x                 , box.y + box.height        ) ||
            this.collidePoint(box.x + box.width     , box.y + box.height        ) ||
            box.collidePoint(this.x                 , this.y                    ) ||
            box.collidePoint(this.x + this.width    , this.y                    ) ||
            box.collidePoint(this.x                 , this.y + this.height      ) ||
            box.collidePoint(this.x + this.width    , this.y + this.height      )
        );
    }

    public collidePoint(x:number, y:number):boolean{
        return ( 
            x < this.x                  || 
            y < this.y                  || 
            x > this.x + this.width     || 
            y > this.y + this.height     
        ) ? false : true;
    }   
    
    public getMidX():number{
        return this.x + ( this.width / 2 );
    }

    public getMidY():number{
        return this.y + ( this.height / 2 );
    }

    public splitVertical():Array<BoundingBox>{
        return [
            new BoundingBox(this.x, this.y, this.width / 2, this.height),
            new BoundingBox(this.getMidX(), this.y, this.width / 2, this.height),
        ]
    }

    public splitHorizontal():Array<BoundingBox>{
        return [
            new BoundingBox(this.x, this.y, this.width, this.height / 2),
            new BoundingBox(this.x, this.getMidY(), this.width, this.height / 2)
        ]
    }
}
