import TextureDataManager from "../../../../lib/core/rendering/webgl/TextureDataManager";
import TextureData from "../../../../lib/core/texture/TextureData";

describe('TextureDataManager test suite', 
    ()=>{

        const fakeCanvas:HTMLCanvasElement = document.createElement("canvas");
        let fakeTextureData = new TextureData(fakeCanvas);
        const manager:TextureDataManager  = new TextureDataManager();
        const context:WebGLRenderingContext = fakeCanvas.getContext("webgl");
        const max = context.getParameter(context.MAX_TEXTURE_IMAGE_UNITS);

        it('should reset channels & context',
            ()=>{
                // given 
                manager.reset(context, max );

                // when 
                const channels = manager.getChannels();

                // then
                expect(channels.length).toEqual(max);
            }
        );

        it('should be able to get a channel at a specific position, this channel should be empty', 
            ()=>{
                // given 
                const pos = Math.round( Math.random() * (max-1) );
                manager.reset(context, max );

                // when 
                const channel = manager.getChannelAt(pos);

                // then
                expect(channel).not.toBeNull();
                expect(channel.id).toEqual(context['TEXTURE'+pos]);
                expect(channel.pos).toEqual(pos);
                expect(channel.data).toBeNull();
                expect(manager.isChannelEmptyAt(pos)).toBeTrue();
            }
        );

        it('should be able to fill a channel at a specific position, this channel shoud not empty', 
            ()=>{
                // given 
                const pos = Math.round( Math.random() * (max-1) );
                manager.reset(context, max );

                // when 
                manager.fillChannelAt(pos, fakeTextureData);
                const channel = manager.getChannelAt(pos);

                // then
                expect(channel).not.toBeNull();
                expect(channel.id).toEqual(context['TEXTURE'+pos]);
                expect(channel.pos).toEqual(pos);
                expect(channel.data).toBe(fakeTextureData);
                expect(manager.isChannelEmptyAt(pos)).toBeFalse();
            }
        );

        it('should be able to get all empty channels', 
            ()=>{
                // given 
                const pos = Math.round( Math.random() * (max-1) );
                manager.reset(context, max );

                // when 
                manager.fillChannelAt(pos, fakeTextureData);
                const empty = manager.getEmptyChannels();

                // then
                expect(empty.length).toEqual(max-1);
            }
        );

        it('should be able to get all non empty channels', 
            ()=>{
                // given 
                const pos = Math.round( Math.random() * (max-1) );
                manager.reset(context, max );

                // when 
                manager.fillChannelAt(pos, fakeTextureData);
                const empty = manager.getNonEmptyChannels();

                // then
                expect(empty.length).toEqual(1);
                expect(empty[0].pos).toEqual(pos);
            }
        );

        it('should be able to get all non empty channels mapped by their uids', 
            ()=>{
                // given 
                const pos = Math.round( Math.random() * (max-1) );
                manager.reset(context, max );

                // when 
                manager.fillChannelAt(pos, fakeTextureData);
                const map = manager.getNonEmptyChannelsMappedByUid();

                // then
                expect(map.get(fakeTextureData.uid)).not.toBeNull();
                expect(map.get(fakeTextureData.uid).pos).toEqual(pos);
                expect(map.get(fakeTextureData.uid).data).toBe(fakeTextureData);
            }
        );

        it('should be able to say if there is at least one empty channel', 
            ()=>{
                // given 
                manager.reset(context, max );
                for( let i = 0; i < max - 1; i++ ){
                    manager.fillChannelAt(i, fakeTextureData);
                }
                // when 
                const result1 = manager.hasEmptyChannels();
                manager.fillChannelAt(max-1,fakeTextureData);
                const result2 = manager.hasEmptyChannels();

                // then
                expect(result1).toBeTrue();
                expect(result2).toBeFalse();
            }
        );

        it( 'should be able to get a channel by its uid', 
        ()=>{
            // given 
            const pos = Math.round( Math.random() * (max-1) );
            manager.reset(context, max );

            // when 
            manager.fillChannelAt(pos, fakeTextureData);

            // then
            expect(manager.getChannelByUid(fakeTextureData.uid)).toBe( manager.getChannelAt(pos));
        });
    }
)