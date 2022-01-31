"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The BatchTexture class is the base class to make batches of objects
 * according to a maximum number of TextureData (or texture units) per batch.
 * It is used by the WebGL2DRenderer class.
 */
class BatchTexture {
    constructor() {
        /**
         * An array of subBatches.
         * You can use it to develop your
         * own batching system
         */
        this.subBatches = [];
        /**
         * The batch's objects
         */
        this.objects = [];
        /**
         * TextureData objects uids
         */
        this.uids = new Set();
        /**
         * TextureData objects
         */
        this.datas = new Set();
    }
    /**
     * Splits an IDisplayObject Array into batches which contains
     * a maximum of <maxTexturesPerBatch> per batch.
     * @param objects IDisplayObject[] an array of IDisplayObjects
     * @param maxObjectsPerBatch number maximum TextureData per batch
     * @returns
     */
    static create(objects, maxTexturesPerBatch) {
        const batches = [new BatchTexture()];
        let currentBatch = batches[0];
        let start = 0;
        for (let i = 0; i < objects.length; i++) {
            const object = objects[i];
            const uid = object.texture.textureUid;
            const hasUid = currentBatch.uids.has(uid);
            if (!hasUid) {
                if (currentBatch.uids.size >= maxTexturesPerBatch) {
                    currentBatch.objects = objects.slice(start, i);
                    start = i;
                    currentBatch = new BatchTexture();
                    batches.push(currentBatch);
                }
                currentBatch.uids.add(uid);
                currentBatch.datas.add(object.texture.data);
            }
        }
        currentBatch.objects = objects.slice(start);
        return batches.filter(b => b.objects.length > 0);
    }
}
exports.default = BatchTexture;
