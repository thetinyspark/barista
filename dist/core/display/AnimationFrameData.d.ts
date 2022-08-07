import { Texture } from "../texture";
export default class AnimationFrameData {
    name: string;
    index: number;
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    originalWidth: number;
    originalHeight: number;
    texture: Texture | null;
}
