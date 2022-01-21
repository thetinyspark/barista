import { IDisplayObject } from "../../../display";
/**
 * Base interface for describing an object batch
 */
export default interface IBatch{
    /**
     * The batch's objects
     */
    objects:IDisplayObject[]; 
    /**
     * An array of subBatches. 
     * You can use it to develop your
     * own batching system
     */
    subBatches:IBatch[];
}