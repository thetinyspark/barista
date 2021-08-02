export default class TextureData {
    width: number;
    height: number;
    private _source;
    private _uid;
    private _glTexture;
    private _isDynamic;
    private static _counter;
    constructor(source: CanvasImageSource);
    private _setSource;
    get isDynamic(): boolean;
    set isDynamic(value: boolean);
    getGlTexture(context: WebGLRenderingContext): WebGLTexture;
    getSource(): CanvasImageSource;
    get uid(): string;
}
