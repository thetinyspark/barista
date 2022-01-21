import CanvasUtils from "../../../../../lib/core/utils/CanvasUtils";
import BatchDrawCall from "../../../../../lib/core/rendering/webgl/batch/BatchDrawCall";
import { createColoredTexture, createObjectsFromTexture } from "../../../../test_utils/canvas.utils.spec";

describe('BatchDrawCall test suite', 
    ()=>{

        const datas = ["red"].map( c => createColoredTexture(c, 100,100));
        const canvas = CanvasUtils.create(100,100);
        const dataTest = [
            {
                id:1,
                maxObjectsPerBatch: 2000,
                objects: [...createObjectsFromTexture(2000, datas[0])], 
                expectedBatches: [
                    {
                        length:2000, 
                        full: true
                    }
                ],
            },
            {
                id:2,
                maxObjectsPerBatch: 1000,
                objects: [...createObjectsFromTexture(1900, datas[0])], 
                expectedBatches: [
                    {
                        length:1000, 
                        full: true
                    },
                    {
                        length:900, 
                        full: false
                    },
                ],
            },
            {
                id:3,
                maxObjectsPerBatch: 1000,
                objects: [...createObjectsFromTexture(2000, datas[0])], 
                expectedBatches: [
                    {
                        length:1000, 
                        full: true
                    },
                    {
                        length:1000, 
                        full: true
                    },
                ],
            },
        ];

        
        dataTest.forEach(
            (cur)=>{
                it(`should be able to create batches from displayObjects according to max objects per batch for id:${cur.id}`, 
                ()=>{
                    // given 
                    const batches = BatchDrawCall.create(cur.objects, cur.maxObjectsPerBatch);
        
                    // when 
                    const result = batches.map( 
                        (batch:BatchDrawCall, index)=>{
                            return {length: batch.objects.length, full: batch.full}
                        }
                    );

                    // then 
                    expect(batches.length).toEqual(cur.expectedBatches.length);
                    expect(result).toEqual(cur.expectedBatches);
                });
            }
        )
        

        
    }
)