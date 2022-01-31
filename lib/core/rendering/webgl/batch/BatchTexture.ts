import { IDisplayObject } from "../../../display";
import { TextureData } from "../../../texture";
import IBatch from "./IBatch";

/**
 * The BatchTexture class is the base class to make batches of objects 
 * according to a maximum number of TextureData (or texture units) per batch.
 * It is used by the WebGL2DRenderer class. 
 */
export default class BatchTexture implements IBatch{

    /**
     * Splits an IDisplayObject Array into batches which contains
     * a maximum of <maxTexturesPerBatch> per batch.
     * @param objects IDisplayObject[] an array of IDisplayObjects
     * @param maxObjectsPerBatch number maximum TextureData per batch
     * @returns 
     */
    public static create(objects:IDisplayObject[], maxTexturesPerBatch:number):BatchTexture[]{
        const batches = [ new BatchTexture() ]; 
        let currentBatch = batches[0];
        let start = 0;
        for( let i = 0; i < objects.length; i++){
            const object = objects[i];
            const uid = object.texture.textureUid;
            const hasUid = currentBatch.uids.has(uid);

            if( !hasUid ){
                if( currentBatch.uids.size >= maxTexturesPerBatch ){
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
        return batches.filter( b => b.objects.length > 0);
    }

    /**
     * An array of subBatches. 
     * You can use it to develop your
     * own batching system
     */
    public subBatches: IBatch[] = [];
    /**
     * The batch's objects
     */
    public objects:IDisplayObject[] = [];
    /**
     * TextureData objects uids
     */
    public uids:Set<string> = new Set();
    /**
     * TextureData objects
     */
    public datas:Set<TextureData> = new Set();
}