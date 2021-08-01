export default class TextureData {
    width: number;
    height: number;
    private _source;
    private _uid;
    private _glTexture;
    private static _counter;
    constructor(source: CanvasImageSource);
    private _setSource;
    getGlTexture(context: WebGLRenderingContext): WebGLTexture;
    getSource(): CanvasImageSource;
    get uid(): string;
}
