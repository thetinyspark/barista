import { TextureData } from "../../texture";
/**
 * The TextureDataManager class is the base class used for
 * uploading textures on the current webglprogram.
 * Each TextureData is contained within a WebGLTextureChannel type object.
 */
export default class TextureDataManager {
    private _textureChannel;
    private _context;
    /**
     * Reset channels
     * @param context WebGLRenderingContext
     * @param numChannels number the number of channels you want to create
     */
    reset(context: WebGLRenderingContext, numChannels: number): void;
    /**
     * Says wether or not the manager had empty channels or not
     * @returns boolean
     */
    hasEmptyChannels(): boolean;
    /**
     * Returns all empty channels.
     * A channel is considered empty if it is not
     * associated to a TextureData object
     * @returns WebGLTextureChannel[]
     */
    getEmptyChannels(): WebGLTextureChannel[];
    /**
     * Returns all non empty channels.
     * A channel is considered non empty if it is
     * associated to a TextureData object
     * @returns WebGLTextureChannel[]
     */
    getNonEmptyChannels(): WebGLTextureChannel[];
    /**
     * Gets a channel by its TextureData's uid
     * @param uid string
     * @returns WebGLTextureChannel || null
     */
    getChannelByUid(uid: string): WebGLTextureChannel;
    /**
     * Get all channels
     * @returns WebGLTextureChannel[]
     */
    getChannels(): WebGLTextureChannel[];
    /**
     * Returns a Map which associates uids(string) with a each channel
     * @returns Map<string,WebGLTextureChannel>
     */
    getNonEmptyChannelsMappedByUid(): Map<string, WebGLTextureChannel>;
    /**
     * Get channel at a specific position
     * @returns WebGLTextureChannel
     */
    getChannelAt(pos: number): WebGLTextureChannel;
    /**
     * Says wether or not the channel is empty at a specific position
     * @param pos number
     * @returns boolean
     */
    isChannelEmptyAt(pos: number): boolean;
    /**
     * Fill the channel with a TextureData object
     * at a specific position and upload it to
     * the current running webgl program.
     * Returns true if the operation succeed.
     * @param pos number
     * @param textureData TextureData
     * @returns boolean
     */
    fillChannelAt(pos: number, textureData: TextureData): boolean;
}
export declare type WebGLTextureChannel = {
    pos: number;
    id: number;
    data: TextureData;
};
