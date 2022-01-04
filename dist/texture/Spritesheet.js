"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Texture_1 = require("../texture/Texture");
var CanvasUtils_1 = require("../utils/CanvasUtils");
var MathUtils_1 = require("../utils/MathUtils");
var Zone_1 = require("./Zone");
/**
 * The Spritesheet class is usefull to gather multiples CanvasImageSources together.
 * The sources will be transformed into a set of Texture objects.
 * A Spritesheet object has a width and a height, it means that it can contains
 * a certain amount of CanvasImageSources.
 */
var Spritesheet = /** @class */ (function () {
    function Spritesheet(width, height, sources) {
        if (sources === void 0) { sources = []; }
        this._width = 0;
        this._height = 0;
        this._zones = [];
        this._textures = [];
        this._reset(width, height, sources);
    }
    Spritesheet.prototype._sortZonesByAreaAsc = function (a, b) {
        return a.getArea() > b.getArea() ? -1 : 1;
    };
    Spritesheet.prototype._sortSourcesByAreaAsc = function (a, b) {
        var area1 = a.source.width * a.source.height;
        var area2 = b.source.width * b.source.height;
        return area1 > area2 ? -1 : 1;
    };
    Spritesheet.prototype._drawTextures = function () {
        var canvas = CanvasUtils_1.default.create(this._width, this._height);
        var context = canvas.getContext("2d");
        var mainTexture = Texture_1.default.createFromSource("main", canvas);
        var filledZones = this.getZones().filter(function (zone) { return !zone.isEmpty(); });
        var textureZones = filledZones.map(function (zone) {
            return {
                id: zone.data.id,
                sx: zone.x,
                sy: zone.y,
                sw: zone.width,
                sh: zone.height,
            };
        });
        filledZones.forEach(function (zone) {
            context.save();
            context.drawImage(mainTexture.data.getSource(), zone.x, zone.y, zone.width, zone.height);
            context.restore();
        });
        return mainTexture.createSubTextures(textureZones);
    };
    Spritesheet.prototype._addSource = function (source) {
        var zone = this._findFreeZoneFor(source.source);
        if (zone === null)
            return false;
        var bottom = zone.splitBottom(source.source.height);
        var right = zone.splitRight(source.source.width);
        zone.data = source;
        if (right !== null && right.getArea() > 0)
            this._zones.push(right);
        if (bottom !== null && bottom.getArea() > 0)
            this._zones.push(bottom);
        return true;
    };
    Spritesheet.prototype._findFreeZoneFor = function (source) {
        this._zones.sort(this._sortZonesByAreaAsc);
        return (this._zones.find(function (zone) {
            return (zone.canContain(source.width, source.height) &&
                zone.isEmpty());
        }) || null);
    };
    Spritesheet.prototype._reset = function (width, height, sources) {
        this._width = MathUtils_1.default.getNextPowerOf2(width);
        this._height = MathUtils_1.default.getNextPowerOf2(height);
        var zone = new Zone_1.default();
        zone.x = 0;
        zone.y = 0;
        zone.width = this._width;
        zone.height = this._height;
        zone.data = null;
        this._zones = [zone];
        sources.sort(this._sortSourcesByAreaAsc);
        while (sources.length > 0) {
            var current = sources.shift();
            this._addSource(current);
        }
        this._textures = this._drawTextures();
    };
    /**
     * Returns a set of Texture objects which could be put onto this Spritesheet.
     * @returns Texture[]
     */
    Spritesheet.prototype.getTextures = function () {
        return this._textures;
    };
    /**
     * Returns a set of Zone objects which associated to their source and ids.
     * @returns Zone[]
     */
    Spritesheet.prototype.getZones = function () {
        return this._zones;
    };
    /**
     * Returns the Spritesheet width
     * @returns number
     */
    Spritesheet.prototype.getWidth = function () {
        return this._width;
    };
    /**
     * Returns the Spritesheet width
     * @returns number
     */
    Spritesheet.prototype.getHeight = function () {
        return this._height;
    };
    return Spritesheet;
}());
exports.default = Spritesheet;
