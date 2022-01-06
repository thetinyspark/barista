
import IsoNode from "../model/node/IsoNode";

export type Constructable<T>   = new (...args: any[]) => T;

export interface Isometric{
    isoNode:IsoNode|null;
    syncWithNode():void;
}

export default function makeIsometric<T extends Constructable<any>>(userClass:T){
    return class extends userClass implements Isometric{
        public isoNode:IsoNode = new IsoNode();
        constructor(...args:any[]){super(...args);}

        public syncWithNode():void{
            if( this.isoNode !== null ){
                this.y = this.isoNode.isoY - this.isoNode.isoZ - this.isoNode.offsetY;
                this.x = this.isoNode.isoX - this.isoNode.offsetX;
            }
        }
    }
}