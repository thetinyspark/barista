import TextureData from "./TextureData";

export default class Texture{
    private _data:TextureData; 
    public sx:number = 0; 
    public sy:number = 0; 
    public sw:number = 0; 
    public sh:number = 0;
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