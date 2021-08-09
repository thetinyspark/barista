export default class TextureData {
    width: number;
    height: number;
    private _source;
    private _uid;
    private _glTexture;
    private _isDynamic;
    private _updateNextFrame;
    private static _counter;
    constructor(source: CanvasImageSource);
    setSource(source: CanvasImageSource): void;
    getGlTexture(context: WebGLRenderingContext): WebGLTexture;
    getSource(): CanvasImageSource;
    get uid(): string;
    get isDynamic(): boolean;
    set isDynamic(value: boolean);
}
