import TextureData from "./TextureData";


export type UV = {u:number, v:number};

export default class Texture{
    private _data:TextureData; 
    public sx:number = 0; 
    public sy:number = 0; 
    public sw:number = 0; 
    public sh:number = 0;

    public topLeftUv:UV = {u:0, v:0};
    public topRightUv:UV = {u:0, v:0};
    public bottomLeftUv:UV = {u:0, v:0};
    public bottomRightUv:UV = {u:0, v:0};

    public id:string = "";    
    

    constructor(
        id:string = "",
        data:TextureData, 
        sx:number = 0, 
        sy:number = 0,
        sw:number = 0, 
        sh:number = 0
    ){
        this._data = data;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.id = id;
        this.calcUv();
    }

    public calcUv():void{
        const width:number = this._data.getSource().width as number;
        const height:number = this._data.getSource().height as number;
        const xl:number = this.sx / width;
        const xr:number = ( this.sx + this.sw ) / width;
        const yt:number = 1-(this.sy / height);
        const yb:number = 1-( ( this.sy + this.sh ) / height);

        this.topLeftUv.u = xl;
        this.topLeftUv.v = yt;

        this.topRightUv.u = xr;
        this.topRightUv.v = yt;

        this.bottomLeftUv.u = xl;
        this.bottomLeftUv.v = yb;

        this.bottomRightUv.u = xr;
        this.bottomRightUv.v = yb;

    }

    public get textureUid():string{
        return this._data.uid;
    }    

    public get data():TextureData{
        return this._data;
    }

    public get source():CanvasImageSource{
        return this._data.getSource();
    }

    public createSubTexture(id:string, sx:number, sy:number, sw:number, sh:number ):Texture{
        return new Texture(id, this._data, sx, sy, sw, sh);
    }
    
}