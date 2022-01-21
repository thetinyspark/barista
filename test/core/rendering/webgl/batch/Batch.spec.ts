import CanvasUtils from "../../../../../lib/core/utils/CanvasUtils";
import BatchTexture from "../../../../../lib/core/rendering/webgl/batch/BatchTexture";
import BatchDrawCall from "../../../../../lib/core/rendering/webgl/batch/BatchDrawCall";
import { createColoredTexture, createObjectsFromTexture } from "../../../../test_utils/canvas.utils.spec";

describe('Batch test suite', 
    ()=>{

        const datas = [
            "red","blue","green","orange",
            "purple","pink","white","black",
            "yellow","gray","maroon","fushia",
            "aquamarine","azur","beige","brown",
            "chocolate"
        ].map( c => createColoredTexture(c, 100,100));
        const canvas = CanvasUtils.create(100,100);
        const context:WebGLRenderingContext = canvas.getContext("webgl");
        const dataTest = [
            {
                id:1,
                maxTextureUnits: 1, 
                maxObjectsPerBatch: 2000,
                objects: [
                    ...createObjectsFromTexture(2000, datas[0]),
                    ...createObjectsFromTexture(2000, datas[1]),
                ], 
                expectedBatches: [
                    {   
                        uids:[datas[0].textureUid],
                        batches:[2000], 
                    }, 
                    {
                        uids:[datas[1].textureUid],
                        batches:[2000], 
                    }
                ],
            },
            {
                id:2,
                maxTextureUnits: 2, 
                maxObjectsPerBatch: 2000,
                objects: [
                    ...createObjectsFromTexture(2000, datas[0]),
                    ...createObjectsFromTexture(2000, datas[1]),
                ], 
                expectedBatches: [
                    {   
                        uids:[datas[0].textureUid, datas[1].textureUid],
                        batches:[2000,2000], 
                    }, 
                ],
            },
            {
                id:3,
                maxTextureUnits: 2, 
                maxObjectsPerBatch: 4000,
                objects: [
                    ...createObjectsFromTexture(2000, datas[0]),
                    ...createObjectsFromTexture(2000, datas[1]),
                ], 
                expectedBatches: [
                    {   
                        uids:[datas[0].textureUid, datas[1].textureUid],
                        batches:[4000], 
                    }, 
                ],
            },
            {
                id:4,
                maxTextureUnits: 2, 
                maxObjectsPerBatch: 3999,
                objects: [
                    ...createObjectsFromTexture(2000, datas[0]),
                    ...createObjectsFromTexture(2000, datas[1]),
                ], 
                expectedBatches: [
                    {   
                        uids:[datas[0].textureUid, datas[1].textureUid],
                        batches:[3999,1], 
                    }, 
                ],
            },
            {
                id:5,
                maxTextureUnits: 1, 
                maxObjectsPerBatch: 600,
                objects: [
                    ...createObjectsFromTexture(2000, datas[0]),
                    ...createObjectsFromTexture(2000, datas[1]),
                ], 
                expectedBatches: [
                    {   
                        uids:[datas[0].textureUid],
                        batches:[600,600,600,200], 
                    }, 
                    {   
                        uids:[datas[1].textureUid],
                        batches:[600,600,600,200], 
                    }, 
                ],
            },
        ];
        
        dataTest.forEach(
            (cur)=>{
                it(`should be able to create batches from displayObjects according to max objects &  max textures units per batch for id:${cur.id}`, 
                ()=>{
                    // given
                    const batchTextures = BatchTexture.create(cur.objects, cur.maxTextureUnits);
                    batchTextures.forEach(
                        (bt)=>{
                            bt.subBatches = BatchDrawCall.create(bt.objects, cur.maxObjectsPerBatch);
                        }
                    );

                    // when
                    const result = batchTextures.map( 
                        (bt)=>{
                            return {
                                uids: Array.from(bt.uids), 
                                batches: bt.subBatches.map( sub => sub.objects.length )
                            }
                        }
                    );
        
                    // then
                    expect(result).toEqual(cur.expectedBatches);
                });
            }
        )
        

        
    }
)