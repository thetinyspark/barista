import IDisplayObject from "../display/IDisplayObject";
import IFilter from "./IFilter";

export default class PixelateFilter implements IFilter {
  private _save: CanvasImageSource | null = null;
  public scaleX: number = 1;
  public scaleY: number = 1;

  public save(child:IDisplayObject):void{
    if (child.texture !== null)
        this._save = child.texture.data.getSource();
  }

  public apply(child: IDisplayObject): void {
    if (child.texture === null) 
        return;

    const dest = document.createElement("canvas");
    const ctx = dest.getContext("2d"); 

    dest.width = child.width;
    dest.height = child.height;

    ctx.save();
    ctx.scale(1/this.scaleX, 1/this.scaleY);
    ctx.drawImage(this._save, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.scale(this.scaleX, this.scaleY);
    ctx.drawImage(dest, 0, 0);
    ctx.restore();
    
    child.texture.data.setSource(dest);
  }

  public rollback(child: IDisplayObject): void {
    if (child.texture === null || this._save === null ) 
        return;

    child.texture.data.setSource(this._save);
  }
}
