import TextureData from "./TextureData";

/**
 * The UV type represents the uv coordinates of the texture 
 * sx, sy, sw, sh properties into the TextureData
 */
export type UV = {u:number, v:number};

/**
 * The Texture class is the base class for defining DisplayObjects textures.
 * It relies on a TextureData object, which contains the graphic source. 
 * A Texture object represents a portion of the original source. 
 */
export default class Texture{
    private _data:TextureData; 
    /**
     * The x coordinates of the source portion to be drawn 
     */
    public sx:number = 0; 
    /**
     * The y coordinates of the source portion to be drawn 
     */
    public sy:number = 0; 
    /**
     * The width of the source portion to be drawn 
     */
    public sw:number = 0; 
    /**
     * The height of the source portion to be drawn 
     */
    public sh:number = 0;

    /**
     * The topleft uv coordinates of source portion to be drawn 
     */
    public topLeftUv:UV = {u:0, v:0};
    /**
     * The topright uv coordinates of source portion to be drawn 
     */
    public topRightUv:UV = {u:0, v:0};
    /**
     * The bottomleft uv coordinates of source portion to be drawn 
     */
    public bottomLeftUv:UV = {u:0, v:0};
    /**
     * The bottomright uv coordinates of source portion to be drawn 
     */
    public bottomRightUv:UV = {u:0, v:0};

    /**
     * The id of the Texture object
     */
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

    /**
     * Calculates uv coordinates according to the 
     * source width and height, and the sx, sy, sw, sh
     * properties of the Texture object
     */
    public calcUv():void{
        const width:number = this._data.getSource().width as number;
        const height:number = this._data.getSource().height as number;
        const xl:number = this.sx / width;
        const xr:number = ( this.sx + this.sw ) / width;
        const yt:number = (this.sy / height);
        const yb:number = ( ( this.sy + this.sh ) / height);

        this.topLeftUv.u = xl;
        this.topLeftUv.v = yt;

        this.topRightUv.u = xr;
        this.topRightUv.v = yt;

        this.bottomLeftUv.u = xl;
        this.bottomLeftUv.v = yb;

        this.bottomRightUv.u = xr;
        this.bottomRightUv.v = yb;

    }

    /**
     * Returns the TextureData unique id
     * @returns string
     */
    public get textureUid():string{
        return this._data.uid;
    }    

    /**
     * Returns the underlying TextureData
     * @returns TextureData
     */
    public get data():TextureData{
        return this._data;
    }

    /**
     * Returns the graphic source
     * @returns CanvasImageSource
     */
    public get source():CanvasImageSource{
        return this._data.getSource();
    }

    /**
     * Creates a sub texture from this Texture object
     * @param id string
     * @param sx number
     * @param sy number
     * @param sw number
     * @param sh number
     * @returns Texture object
     */
    public createSubTexture(id:string, sx:number, sy:number, sw:number, sh:number ):Texture{
        return new Texture(id, this._data, sx, sy, sw, sh);
    }

    /**
     * Creates A set of subtextures
     * @param zones {id:string, sx:number, sy:number, sw:number, sh:number}[]
     * @returns Texture[] object
     */
    public createSubTextures(zones:{id:string, sx:number, sy:number, sw:number, sh:number}[]):Texture[]{
        return zones.map(
            (zone)=>this.createSubTexture(zone.id, zone.sx, zone.sy, zone.sw, zone.sh)
        );
    }
    
    /**
     * Creates a new Texture Object, and its underlying 
     * TextureData object from a graphic source
     * @param id string The new Texture id
     * @param source CanvasImageSource The graphic source
     * @returns Texture object
     */
    public static createFromSource(id:string, source:CanvasImageSource):Texture{
        const data = new TextureData(source);
        return new Texture(id, data, 0, 0, data.width, data.height);
    }
}