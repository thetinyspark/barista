import { isoToScreen, screenToIso } from "../../utils/iso.utils";
import GameNode from "../../../common/model/node/GameNode";

export default class IsoNode extends GameNode{

    public isoX:number = 0; 
    public isoY:number = 0; 
    public isoZ:number = 0;
    public row:number = 0; 
    public col:number = 0; 
    public cellWidth:number = 64;
    public cellHeight:number = 32;
    public width:number = 64; 
    public height:number = 64; 

    public get offsetY():number{
        return this.height - this.cellHeight;
    }

    public get offsetX():number{
        return ( this.width - this.cellWidth ) >> 1;
    }

    public resetRowAndColFromCoordinates():void{
        const coords = screenToIso(this.isoX, this.isoY, this.cellWidth, this.cellHeight); 
        this.col = coords.col;
        this.row = coords.row;
    }

    public resetCoordinatesFromRowAndCol():void{
        const coords = isoToScreen(this.row,this.col, this.cellWidth, this.cellHeight);
        this.isoX = coords.x; 
        this.isoY = coords.y;
        this.isoZ = 0;
    }
}