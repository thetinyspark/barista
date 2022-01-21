import { TextureData } from "../../texture";
/**
 * The TextureDataManager class is the base class used for 
 * uploading textures on the current webglprogram. 
 * Each TextureData is contained within a WebGLTextureChannel type object. 
 */
export default class TextureDataManager{

    private _textureChannel:WebGLTextureChannel[] = [];
    private _context:WebGLRenderingContext = null;

    /**
     * Reset channels
     * @param context WebGLRenderingContext 
     * @param numChannels number the number of channels you want to create
     */
    reset(context:WebGLRenderingContext, numChannels:number):void{

        this._context = context;
        this._textureChannel = []; 

        for( let i = 0; i < numChannels; i++ ){
            this._textureChannel.push(
                {
                    pos: i,
                    id: this._context['TEXTURE'+i], 
                    data: null
                }
            );
        }
    }

    /**
     * Says wether or not the manager had empty channels or not
     * @returns boolean
     */
    hasEmptyChannels():boolean{
        return this.getEmptyChannels().length > 0;
    }

    /**
     * Returns all empty channels. 
     * A channel is considered empty if it is not
     * associated to a TextureData object
     * @returns WebGLTextureChannel[]
     */
    getEmptyChannels():WebGLTextureChannel[]{
        return this._textureChannel.filter( 
            (channel)=>{
                return channel.data === null;
            }
        )
    }
    /**
     * Returns all non empty channels. 
     * A channel is considered non empty if it is
     * associated to a TextureData object
     * @returns WebGLTextureChannel[]
     */
    getNonEmptyChannels():WebGLTextureChannel[]{
        return this._textureChannel.filter( 
            (channel)=>{
                return channel.data !== null;
            }
        );
    }
    /**
     * Gets a channel by its TextureData's uid
     * @param uid string
     * @returns WebGLTextureChannel || null
     */
    getChannelByUid(uid:string):WebGLTextureChannel{
        return this._textureChannel.find( 
            (channel)=>{
                if( channel.data === null ) 
                    return false;
                return channel.data.uid === uid;
            }
        ) || null;
    }
    /**
     * Get all channels
     * @returns WebGLTextureChannel[]
     */
    getChannels():WebGLTextureChannel[]{
        return this._textureChannel;
    }
    /**
     * Returns a Map which associates uids(string) with a each channel
     * @returns Map<string,WebGLTextureChannel>
     */
    getNonEmptyChannelsMappedByUid():Map<string,WebGLTextureChannel>{
        const map = new Map<string,WebGLTextureChannel>();
        this.getNonEmptyChannels().forEach( 
            (channel)=>{
                map.set(channel.data.uid, channel);
            }
        )
        return map;
    }
    /**
     * Get channel at a specific position
     * @returns WebGLTextureChannel
     */
    getChannelAt(pos:number):WebGLTextureChannel{
        return this._textureChannel[pos] || null;
    }
    /**
     * Says wether or not the channel is empty at a specific position
     * @param pos number
     * @returns boolean
     */
    isChannelEmptyAt(pos:number):boolean{
        return this.getChannelAt(pos).data === null;
    }
    /**
     * Fill the channel with a TextureData object 
     * at a specific position and upload it to 
     * the current running webgl program.
     * Returns true if the operation succeed.
     * @param pos number
     * @param textureData TextureData
     * @returns boolean
     */
    fillChannelAt(pos:number, textureData:TextureData):boolean{
        const channel = this.getChannelAt(pos);
        if( channel === null )
            return false;

        try{    
            channel.data = textureData;
            channel.data.texturePos = pos;
            this._context.activeTexture(channel.id);
            this._context.bindTexture(this._context.TEXTURE_2D, textureData.getGlTexture(this._context));
        }
        catch(error){
            console.log(error);
            return false;
        }

        return true;
    }    
}

export type WebGLTextureChannel = {
    pos:number,
    id:number,
    data:TextureData
}