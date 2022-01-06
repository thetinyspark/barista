import { TextureData } from "..";
import Texture from "../texture/Texture";
import CanvasUtils from "../utils/CanvasUtils";
import MathUtils from "../utils/MathUtils";
import Zone from "./Zone";

/**
 * The Spritesheet class is usefull to gather multiples CanvasImageSources together. 
 * The sources will be transformed into a set of Texture objects.
 * A Spritesheet object has a width and a height, it means that it can contains
 * a certain amount of CanvasImageSources. 
 */
export default class Spritesheet {
  private _width: number = 0;
  private _height: number = 0;
  private _zones: Zone[] = [];
  private _textures:Texture[] = [];
  private _textureData:TextureData = null;

  constructor(width: number, height: number, sources:{id:string,source:CanvasImageSource}[] = []) {
    this._reset(width,height, sources);
  }

  private _sortZonesByAreaAsc(a: Zone, b: Zone): number {
    return a.getArea() > b.getArea() ? -1 : 1;
  }

  private _sortSourcesByAreaAsc(
    a:{id:string,source:CanvasImageSource}, 
    b:{id:string,source:CanvasImageSource}
  ):number{
    const area1:number = (a.source.width as number) * (a.source.height as number);
    const area2:number = (b.source.width as number) * (b.source.height as number);
    return area1 > area2 ? -1 : 1;
  }

  private _drawTextures():Texture[]{
    const source = CanvasUtils.create(this._width, this._height);
    const mainTexture = Texture.createFromSource("main",source);
    const canvas = mainTexture.data.getSource() as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    const filledZones = this.getZones().filter( zone => !zone.isEmpty());
    const textureZones = filledZones.map(
      (zone)=>{
        return {
          id: zone.data.id,
          sx: zone.x,
          sy: zone.y,
          sw: zone.width,
          sh: zone.height,
        }
      }
    );

    filledZones.forEach( 
      (zone)=>{
        context.save();
        context.drawImage( zone.data.source,zone.x, zone.y, zone.width, zone.height );
        context.restore();
      }
    );

    this._textureData = mainTexture.data;

    return mainTexture.createSubTextures(textureZones);
  }

  private _addSource(source:{id:string, source: CanvasImageSource}): boolean {
    const zone: Zone = this._findFreeZoneFor(source.source);
    if (zone === null) 
        return false;

    
    const bottom = zone.splitBottom(source.source.height as number);
    const right = zone.splitRight(source.source.width as number );

    zone.data = source;

    if( right !== null && right.getArea() > 0 )
      this._zones.push(right);

    if(bottom !== null && bottom.getArea() > 0 )
      this._zones.push(bottom);
    
    return true;
  }

  private _findFreeZoneFor(source: CanvasImageSource): Zone {
    this._zones.sort(this._sortZonesByAreaAsc);
    return (
      this._zones.find((zone) => {
        return (
          zone.canContain(source.width as number, source.height as number) && 
          zone.isEmpty()
        );
      }) || null
    );
  }

  private _reset(width:number, height:number, sources:{id:string,source:CanvasImageSource}[]):void{
    this._width = MathUtils.getNextPowerOf2(width);
    this._height = MathUtils.getNextPowerOf2(height);

    const zone = new Zone();
    zone.x = 0;
    zone.y = 0;
    zone.width = this._width;
    zone.height = this._height;
    zone.data = null;
    this._zones = [ zone ];

    sources.sort(this._sortSourcesByAreaAsc);

    while(sources.length > 0 ){
      const current = sources.shift();
      this._addSource(current);
    }

    this._textures = this._drawTextures();
  }

  /**
   * Returns a the new TextureData.
   * @returns TextureData
   */
  public getTextureData():TextureData{
    return this._textureData;
  }

  /**
   * Returns a set of Texture objects which could be put onto this Spritesheet.
   * @returns Texture[]
   */
  public getTextures():Texture[]{
    return this._textures;
  }

  /**
   * Returns a set of Zone objects which associated to their source and ids.
   * @returns Zone[]
   */
  public getZones(): Zone[] {
    return this._zones;
  }

  /**
   * Returns the Spritesheet width
   * @returns number
   */
  public getWidth(): number {
    return this._width;
  }
  
  /**
   * Returns the Spritesheet width
   * @returns number
   */
  public getHeight(): number {
    return this._height;
  }
}