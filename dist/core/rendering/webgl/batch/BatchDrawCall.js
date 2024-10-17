"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The BatchDrawCall class is the base class to make batches of objects
 * according to a maximum number of objects per batch.
 * It is used by the WebGL2DRenderer class.
 */
class BatchDrawCall {
    /**
     * Splits an IDisplayObject Array into batches which contains
     * a maximum of <maxObjectsPerBatch> per batch.
     * @param objects IDisplayObject[] an array of IDisplayObjects
     * @param maxObjectsPerBatch number maximum objects per batch
     * @returns
     */
    static create(objects, maxObjectsPerBatch) {
        const batches = [];
        while (objects.length > 0) {
            const batch = new BatchDrawCall();
            batch.objects = objects.splice(0, maxObjectsPerBatch);
            batch.full = batch.objects.length >= maxObjectsPerBatch;
            batches.push(batch);
        }
        return batches.filter(b => b.objects.length > 0);
    }
    /**
     * An array of subBatches.
     * You can use it to develop your
     * own batching system
     */
    subBatches = [];
    /**
     * Tells wether or not this batch is full
     */
    full = false;
    /**
     * The batch's objects
     */
    objects = [];
}
exports.default = BatchDrawCall;
