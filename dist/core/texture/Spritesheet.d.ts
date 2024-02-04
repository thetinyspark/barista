import TextureData from "../texture/TextureData";
import { Texture } from "../../index";
import Zone from "./Zone";
/**
 * The Spritesheet class is usefull to gather multiples CanvasImageSources together.
 * The sources will be transformed into a set of Texture objects.
 * A Spritesheet object has a width and a height, it means that it can contains
 * a certain amount of CanvasImageSources.
 */
export default class Spritesheet {
    private _width;
    private _height;
    private _zones;
    private _textures;
    private _textureData;
    constructor(width: number, height: number, sources?: {
        id: string;
        source: CanvasImageSource;
    }[]);
    private _sortZonesByAreaAsc;
    private _sortSourcesByAreaAsc;
    private _drawTextures;
    private _addSource;
    private _findFreeZoneFor;
    private _reset;
    /**
     * Returns a the new TextureData.
     * @returns TextureData
     */
    getTextureData(): TextureData;
    /**
     * Returns a set of Texture objects which could be put onto this Spritesheet.
     * @returns Texture[]
     */
    getTextures(): Texture[];
    /**
     * Returns a set of Zone objects which associated to their source and ids.
     * @returns Zone[]
     */
    getZones(): Zone[];
    /**
     * Returns the Spritesheet width
     * @returns number
     */
    getWidth(): number;
    /**
     * Returns the Spritesheet width
     * @returns number
     */
    getHeight(): number;
}
