import { IDisplayObject } from "../../../display";
import IBatch from "./IBatch";
/**
 * The BatchDrawCall class is the base class to make batches of objects
 * according to a maximum number of objects per batch.
 * It is used by the WebGL2DRenderer class.
 */
export default class BatchDrawCall implements IBatch {
    /**
     * Splits an IDisplayObject Array into batches which contains
     * a maximum of <maxObjectsPerBatch> per batch.
     * @param objects IDisplayObject[] an array of IDisplayObjects
     * @param maxObjectsPerBatch number maximum objects per batch
     * @returns
     */
    static create(objects: IDisplayObject[], maxObjectsPerBatch: number): BatchDrawCall[];
    /**
     * An array of subBatches.
     * You can use it to develop your
     * own batching system
     */
    subBatches: IBatch[];
    /**
     * Tells wether or not this batch is full
     */
    full: boolean;
    /**
     * The batch's objects
     */
    objects: IDisplayObject[];
}
