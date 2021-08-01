import TextureData from "./TextureData";
export declare type UV = {
    u: number;
    v: number;
};
export default class Texture {
    private _data;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    topLeftUv: UV;
    topRightUv: UV;
    bottomLeftUv: UV;
    bottomRightUv: UV;
    id: string;
    constructor(id: string, data: TextureData, sx?: number, sy?: number, sw?: number, sh?: number);
    calcUv(): void;
    get textureUid(): string;
    get data(): TextureData;
    get source(): CanvasImageSource;
    createSubTexture(id: string, sx: number, sy: number, sw: number, sh: number): Texture;
}
