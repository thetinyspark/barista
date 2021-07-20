export default class Texture {
    data: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    id: string;
    private _texUid;
    private static _COUNTER;
    private static _map;
    static getTextureUidByData(data: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): string;
    constructor(id: string, data: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, sx?: number, sy?: number, sw?: number, sh?: number);
    get textureUid(): string;
    createSubTexture(id: string, sx: number, sy: number, sw: number, sh: number): Texture;
}
