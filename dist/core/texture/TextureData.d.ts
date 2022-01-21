/**
 * The TextureData class is the base class for containing graphic source.
 * It defines a width, a height and a dynamic property
 * It can create,hold and return a WebGLTexture from the graphic source.
 */
export default class TextureData {
    /**
     * The width of the texture data
     */
    width: number;
    /**
     * The height of the texture data
     */
    height: number;
    /**
     * The position of the texture data inside webgl program
     * (used by TextureDataManager at every frame do NOT touch it unless you know what you're doing)
     */
    texturePos: number;
    private _source;
    private _uid;
    private _glTexture;
    private _isDynamic;
    private _updateNextFrame;
    private static _counter;
    /**
     * Creates a new TextureData object which hold the graphic source passed in param.
     * @param source CanvasImageSource the graphic source
     */
    constructor(source: CanvasImageSource);
    /**
     * Sets the current TextureData source
     * @param source CanvasImageSource
     */
    setSource(source: CanvasImageSource): void;
    /**
     * Returns the current TextureData source
     * @returns CanvasImageSource
     */
    getSource(): CanvasImageSource;
    /**
     * Returns a WebGLTexture object created from the source.
     * If the TextureData is dynamic, the WebGLTexture will
     * be refreshed and sent to the rendering context passed in param.
     * @param context WebGLRenderingContext
     * @returns WebGLTexture object
     */
    getGlTexture(context: WebGLRenderingContext): WebGLTexture;
    /**
     * The TextureData unique id
     */
    get uid(): string;
    /**
     * Says if current TextureData is dynamic or not
     * @returns boolean
     */
    get isDynamic(): boolean;
    /**
     * Sets the dynamic property of the current TextureData
     */
    set isDynamic(value: boolean);
}
