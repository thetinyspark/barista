import { IDisplayObject } from "../../../display";
import IBatch from "./IBatch";

/**
 * The BatchDrawCall class is the base class to make batches of objects 
 * according to a maximum number of objects per batch.
 * It is used by the WebGL2DRenderer class. 
 */
export default class BatchDrawCall implements IBatch{

    /**
     * Splits an IDisplayObject Array into batches which contains
     * a maximum of <maxObjectsPerBatch> per batch.
     * @param objects IDisplayObject[] an array of IDisplayObjects
     * @param maxObjectsPerBatch number maximum objects per batch
     * @returns 
     */
    public static create(objects:IDisplayObject[], maxObjectsPerBatch:number):BatchDrawCall[]{
        const batches = []; 
        const copy = objects;
        while( copy.length > 0 ){
            const batch = new BatchDrawCall();
            batch.objects = copy.splice(0,maxObjectsPerBatch);
            batch.full = batch.objects.length >= maxObjectsPerBatch;
            batches.push(batch);
        }

        return batches.filter( b => b.objects.length > 0);
    }

    /**
     * An array of subBatches. 
     * You can use it to develop your
     * own batching system
     */
    public subBatches: IBatch[] = [];

    /**
     * Tells wether or not this batch is full
     */
    public full:boolean = false;

    /**
     * The batch's objects
     */
    public objects:IDisplayObject[] = [];
}