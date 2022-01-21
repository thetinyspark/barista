import CanvasUtils from "../../../../../lib/core/utils/CanvasUtils";
import BatchTexture from "../../../../../lib/core/rendering/webgl/batch/BatchTexture";
import { createColoredTexture, createObjectsFromTexture } from "../../../../test_utils/canvas.utils.spec";

describe('BatchTexture test suite', 
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
                objects: [...createObjectsFromTexture(2000, datas[0])], 
                expectedBatches: [
                    {
                        length:2000, 
                        uids:[datas[0].textureUid]
                    }
                ],
            },
            {
                id:2,
                maxTextureUnits: 1, 
                objects: [
                    ...createObjectsFromTexture(1000, datas[0]),
                    ...createObjectsFromTexture(1000, datas[1]),
                ], 
                expectedBatches: [
                    {
                        length:1000, 
                        uids:[datas[0].textureUid]
                    }, 
                    {
                        length: 1000, 
                        uids:[datas[1].textureUid]
                    }
                ],
            },{
                id:3,
                maxTextureUnits: 16, 
                objects: [
                    ...createObjectsFromTexture(1000, datas[0]),
                    ...createObjectsFromTexture(1000, datas[1]),
                    ...createObjectsFromTexture(1000, datas[2]),
                    ...createObjectsFromTexture(1000, datas[3]),
                    ...createObjectsFromTexture(1000, datas[4]),
                    ...createObjectsFromTexture(1000, datas[5]),
                    ...createObjectsFromTexture(1000, datas[6]),
                    ...createObjectsFromTexture(1000, datas[7]),
                    ...createObjectsFromTexture(1000, datas[8]),
                    ...createObjectsFromTexture(1000, datas[9]),
                    ...createObjectsFromTexture(1000, datas[10]),
                    ...createObjectsFromTexture(1000, datas[11]),
                    ...createObjectsFromTexture(1000, datas[12]),
                    ...createObjectsFromTexture(1000, datas[13]),
                    ...createObjectsFromTexture(1000, datas[14]),
                    ...createObjectsFromTexture(1000, datas[15]),
                    ...createObjectsFromTexture(1000, datas[16]),
                ], 
                expectedBatches: [
                    {
                        length:16000, 
                        uids:[
                            datas[0].textureUid,datas[1].textureUid,datas[2].textureUid,datas[3].textureUid,
                            datas[4].textureUid,datas[5].textureUid,datas[6].textureUid,datas[7].textureUid,
                            datas[8].textureUid,datas[9].textureUid,datas[10].textureUid,datas[11].textureUid,
                            datas[12].textureUid,datas[13].textureUid,datas[14].textureUid,datas[15].textureUid,
                        ]
                    }, 
                    {
                        length: 1000, 
                        uids:[datas[16].textureUid]
                    }
                ],
            },
        ];

        
        dataTest.forEach(
            (cur)=>{
                it(`should be able to create batches from displayObjects according to max textures units per batch for id:${cur.id}`, 
                ()=>{
                    // given 
                    const batches = BatchTexture.create(cur.objects, cur.maxTextureUnits);
        
                    // when 
                    const result = batches.map( 
                        (batch:BatchTexture, index)=>{
                            return {length: batch.objects.length, uids: Array.from(batch.uids)}
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