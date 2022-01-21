import { IDisplayObject } from "../../../display";
import { TextureData } from "../../../texture";
import IBatch from "./IBatch";
/**
 * The BatchTexture class is the base class to make batches of objects
 * according to a maximum number of TextureData (or texture units) per batch.
 * It is used by the WebGL2DRenderer class.
 */
export default class BatchTexture implements IBatch {
    /**
     * Splits an IDisplayObject Array into batches which contains
     * a maximum of <maxTexturesPerBatch> per batch.
     * @param objects IDisplayObject[] an array of IDisplayObjects
     * @param maxObjectsPerBatch number maximum TextureData per batch
     * @returns
     */
    static create(objects: IDisplayObject[], maxTexturesPerBatch: number): BatchTexture[];
    /**
     * An array of subBatches.
     * You can use it to develop your
     * own batching system
     */
    subBatches: IBatch[];
    /**
     * The batch's objects
     */
    objects: IDisplayObject[];
    /**
     * TextureData objects uids
     */
    uids: Set<string>;
    /**
     * TextureData objects
     */
    datas: Set<TextureData>;
}
