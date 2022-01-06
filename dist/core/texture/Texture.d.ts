import TextureData from "./TextureData";
/**
 * The UV type represents the uv coordinates of the texture
 * sx, sy, sw, sh properties into the TextureData
 */
export declare type UV = {
    u: number;
    v: number;
};
/**
 * The Texture class is the base class for defining DisplayObjects textures.
 * It relies on a TextureData object, which contains the graphic source.
 * A Texture object represents a portion of the original source.
 */
export default class Texture {
    private _data;
    /**
     * The x coordinates of the source portion to be drawn
     */
    sx: number;
    /**
     * The y coordinates of the source portion to be drawn
     */
    sy: number;
    /**
     * The width of the source portion to be drawn
     */
    sw: number;
    /**
     * The height of the source portion to be drawn
     */
    sh: number;
    /**
     * The topleft uv coordinates of source portion to be drawn
     */
    topLeftUv: UV;
    /**
     * The topright uv coordinates of source portion to be drawn
     */
    topRightUv: UV;
    /**
     * The bottomleft uv coordinates of source portion to be drawn
     */
    bottomLeftUv: UV;
    /**
     * The bottomright uv coordinates of source portion to be drawn
     */
    bottomRightUv: UV;
    /**
     * The id of the Texture object
     */
    id: string;
    constructor(id: string, data: TextureData, sx?: number, sy?: number, sw?: number, sh?: number);
    /**
     * Calculates uv coordinates according to the
     * source width and height, and the sx, sy, sw, sh
     * properties of the Texture object
     */
    calcUv(): void;
    /**
     * Returns the TextureData unique id
     * @returns string
     */
    get textureUid(): string;
    /**
     * Returns the underlying TextureData
     * @returns TextureData
     */
    get data(): TextureData;
    /**
     * Returns the graphic source
     * @returns CanvasImageSource
     */
    get source(): CanvasImageSource;
    /**
     * Creates a sub texture from this Texture object
     * @param id string
     * @param sx number
     * @param sy number
     * @param sw number
     * @param sh number
     * @returns Texture object
     */
    createSubTexture(id: string, sx: number, sy: number, sw: number, sh: number): Texture;
    /**
     * Creates A set of subtextures
     * @param zones {id:string, sx:number, sy:number, sw:number, sh:number}[]
     * @returns Texture[] object
     */
    createSubTextures(zones: {
        id: string;
        sx: number;
        sy: number;
        sw: number;
        sh: number;
    }[]): Texture[];
    /**
     * Creates a new Texture Object, and its underlying
     * TextureData object from a graphic source
     * @param id string The new Texture id
     * @param source CanvasImageSource The graphic source
     * @returns Texture object
     */
    static createFromSource(id: string, source: CanvasImageSource): Texture;
}
