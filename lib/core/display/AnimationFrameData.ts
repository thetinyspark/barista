import { Texture } from "../texture";

export default class AnimationFrameData{
    public name:string              = "";
    public index:number             = 0;
    public width:number             = 0;
    public height:number            = 0;
    public offsetX:number           = 0;
    public offsetY:number           = 0;
    public originalWidth:number     = 0;
    public originalHeight:number    = 0;
    public texture:Texture | null   =  null;
}