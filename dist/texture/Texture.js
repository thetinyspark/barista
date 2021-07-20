"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Texture {
    constructor(id = "", data, sx = 0, sy = 0, sw = 0, sh = 0) {
        this.sx = 0;
        this.sy = 0;
        this.sw = 0;
        this.sh = 0;
        this.id = "";
        this._texUid = "";
        this.data = data;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.id = id;
        this._texUid = Texture.getTextureUidByData(this.data);
    }
    static getTextureUidByData(data) {
        const uid = "texture_data_" + this._COUNTER++;
        if (this._map.has(data)) {
            return this._map.get(data);
        }
        else {
            this._map.set(data, uid);
            return uid;
        }
    }
    get textureUid() {
        return this._texUid;
    }
    createSubTexture(id, sx, sy, sw, sh) {
        return new Texture(id, this.data, sx, sy, sw, sh);
    }
}
exports.default = Texture;
Texture._COUNTER = 0;
Texture._map = new Map();
