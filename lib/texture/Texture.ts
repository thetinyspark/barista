export default class Texture{
    public data:HTMLImageElement|HTMLCanvasElement|HTMLVideoElement; 
    public sx:number = 0; 
    public sy:number = 0; 
    public sw:number = 0; 
    public sh:number = 0;
    public id:string = "";

    private _texUid:string = "";

    private static _COUNTER:number = 0;
    private static _map:Map<HTMLImageElement|HTMLCanvasElement|HTMLVideoElement, string> = new Map<HTMLImageElement|HTMLCanvasElement|HTMLVideoElement, string >();

    public static getTextureUidByData(data:HTMLImageElement|HTMLCanvasElement|HTMLVideoElement):string{
        const uid:string = "texture_data_" + this._COUNTER++; 
        if( this._map.has(data) ){
            return this._map.get(data);
        }
        else{
            this._map.set(data, uid); 
            return uid;
        }
    }
    

    constructor(
        id:string = "",
        data:HTMLImageElement|HTMLCanvasElement|HTMLVideoElement, 
        sx:number = 0, 
        sy:number = 0,
        sw:number = 0, 
        sh:number = 0
    ){
        this.data = data;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.id = id;
        this._texUid = Texture.getTextureUidByData(this.data);
    }

    public get textureUid():string{
        return this._texUid;
    }

    public createSubTexture(id:string, sx:number, sy:number, sw:number, sh:number ):Texture{
        return new Texture(id, this.data, sx, sy, sw, sh);
    }
    
}