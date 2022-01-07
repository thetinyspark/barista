"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Texture_1 = require("../texture/Texture");
const CanvasUtils_1 = require("../utils/CanvasUtils");
const MathUtils_1 = require("../utils/MathUtils");
const Zone_1 = require("./Zone");
/**
 * The Spritesheet class is usefull to gather multiples CanvasImageSources together.
 * The sources will be transformed into a set of Texture objects.
 * A Spritesheet object has a width and a height, it means that it can contains
 * a certain amount of CanvasImageSources.
 */
class Spritesheet {
    constructor(width, height, sources = []) {
        this._width = 0;
        this._height = 0;
        this._zones = [];
        this._textures = [];
        this._textureData = null;
        this._reset(width, height, sources);
    }
    _sortZonesByAreaAsc(a, b) {
        return a.getArea() > b.getArea() ? -1 : 1;
    }
    _sortSourcesByAreaAsc(a, b) {
        const area1 = a.source.width * a.source.height;
        const area2 = b.source.width * b.source.height;
        return area1 > area2 ? -1 : 1;
    }
    _drawTextures() {
        const source = CanvasUtils_1.default.create(this._width, this._height);
        const mainTexture = Texture_1.default.createFromSource("main", source);
        const canvas = mainTexture.data.getSource();
        const context = canvas.getContext("2d");
        const filledZones = this.getZones().filter(zone => !zone.isEmpty());
        const textureZones = filledZones.map((zone) => {
            return {
                id: zone.data.id,
                sx: zone.x,
                sy: zone.y,
                sw: zone.width,
                sh: zone.height,
            };
        });
        filledZones.forEach((zone) => {
            context.save();
            context.drawImage(zone.data.source, zone.x, zone.y, zone.width, zone.height);
            context.restore();
        });
        this._textureData = mainTexture.data;
        return mainTexture.createSubTextures(textureZones);
    }
    _addSource(source) {
        const zone = this._findFreeZoneFor(source.source);
        if (zone === null)
            return false;
        const bottom = zone.splitBottom(source.source.height);
        const right = zone.splitRight(source.source.width);
        zone.data = source;
        if (right !== null && right.getArea() > 0)
            this._zones.push(right);
        if (bottom !== null && bottom.getArea() > 0)
            this._zones.push(bottom);
        return true;
    }
    _findFreeZoneFor(source) {
        this._zones.sort(this._sortZonesByAreaAsc);
        return (this._zones.find((zone) => {
            return (zone.canContain(source.width, source.height) &&
                zone.isEmpty());
        }) || null);
    }
    _reset(width, height, sources) {
        this._width = MathUtils_1.default.getNextPowerOf2(width);
        this._height = MathUtils_1.default.getNextPowerOf2(height);
        const zone = new Zone_1.default();
        zone.x = 0;
        zone.y = 0;
        zone.width = this._width;
        zone.height = this._height;
        zone.data = null;
        this._zones = [zone];
        sources.sort(this._sortSourcesByAreaAsc);
        while (sources.length > 0) {
            const current = sources.shift();
            this._addSource(current);
        }
        this._textures = this._drawTextures();
    }
    /**
     * Returns a the new TextureData.
     * @returns TextureData
     */
    getTextureData() {
        return this._textureData;
    }
    /**
     * Returns a set of Texture objects which could be put onto this Spritesheet.
     * @returns Texture[]
     */
    getTextures() {
        return this._textures;
    }
    /**
     * Returns a set of Zone objects which associated to their source and ids.
     * @returns Zone[]
     */
    getZones() {
        return this._zones;
    }
    /**
     * Returns the Spritesheet width
     * @returns number
     */
    getWidth() {
        return this._width;
    }
    /**
     * Returns the Spritesheet width
     * @returns number
     */
    getHeight() {
        return this._height;
    }
}
exports.default = Spritesheet;
