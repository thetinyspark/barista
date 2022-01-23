[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / TextureDataManager

# Class: TextureDataManager

The TextureDataManager class is the base class used for
uploading textures on the current webglprogram.
Each TextureData is contained within a WebGLTextureChannel type object.

## Table of contents

### Constructors

- [constructor](TextureDataManager.md#constructor)

### Properties

- [\_context](TextureDataManager.md#_context)
- [\_textureChannel](TextureDataManager.md#_texturechannel)

### Methods

- [fillChannelAt](TextureDataManager.md#fillchannelat)
- [getChannelAt](TextureDataManager.md#getchannelat)
- [getChannelByUid](TextureDataManager.md#getchannelbyuid)
- [getChannels](TextureDataManager.md#getchannels)
- [getEmptyChannels](TextureDataManager.md#getemptychannels)
- [getNonEmptyChannels](TextureDataManager.md#getnonemptychannels)
- [getNonEmptyChannelsMappedByUid](TextureDataManager.md#getnonemptychannelsmappedbyuid)
- [hasEmptyChannels](TextureDataManager.md#hasemptychannels)
- [isChannelEmptyAt](TextureDataManager.md#ischannelemptyat)
- [reset](TextureDataManager.md#reset)

## Constructors

### constructor

• **new TextureDataManager**()

## Properties

### \_context

• `Private` **\_context**: `WebGLRenderingContext` = `null`

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:10](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L10)

___

### \_textureChannel

• `Private` **\_textureChannel**: `WebGLTextureChannel`[] = `[]`

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:9](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L9)

## Methods

### fillChannelAt

▸ **fillChannelAt**(`pos`, `textureData`): `boolean`

Fill the channel with a TextureData object
at a specific position and upload it to
the current running webgl program.
Returns true if the operation succeed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | number |
| `textureData` | [`TextureData`](TextureData.md) | TextureData |

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:125](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L125)

___

### getChannelAt

▸ **getChannelAt**(`pos`): `WebGLTextureChannel`

Get channel at a specific position

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `number` |

#### Returns

`WebGLTextureChannel`

WebGLTextureChannel

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:105](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L105)

___

### getChannelByUid

▸ **getChannelByUid**(`uid`): `WebGLTextureChannel`

Gets a channel by its TextureData's uid

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uid` | `string` | string |

#### Returns

`WebGLTextureChannel`

WebGLTextureChannel || null

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:72](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L72)

___

### getChannels

▸ **getChannels**(): `WebGLTextureChannel`[]

Get all channels

#### Returns

`WebGLTextureChannel`[]

WebGLTextureChannel[]

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:85](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L85)

___

### getEmptyChannels

▸ **getEmptyChannels**(): `WebGLTextureChannel`[]

Returns all empty channels.
A channel is considered empty if it is not
associated to a TextureData object

#### Returns

`WebGLTextureChannel`[]

WebGLTextureChannel[]

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:47](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L47)

___

### getNonEmptyChannels

▸ **getNonEmptyChannels**(): `WebGLTextureChannel`[]

Returns all non empty channels.
A channel is considered non empty if it is
associated to a TextureData object

#### Returns

`WebGLTextureChannel`[]

WebGLTextureChannel[]

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:60](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L60)

___

### getNonEmptyChannelsMappedByUid

▸ **getNonEmptyChannelsMappedByUid**(): `Map`<`string`, `WebGLTextureChannel`\>

Returns a Map which associates uids(string) with a each channel

#### Returns

`Map`<`string`, `WebGLTextureChannel`\>

Map<string,WebGLTextureChannel>

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:92](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L92)

___

### hasEmptyChannels

▸ **hasEmptyChannels**(): `boolean`

Says wether or not the manager had empty channels or not

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:37](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L37)

___

### isChannelEmptyAt

▸ **isChannelEmptyAt**(`pos`): `boolean`

Says wether or not the channel is empty at a specific position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | number |

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:113](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L113)

___

### reset

▸ **reset**(`context`, `numChannels`): `void`

Reset channels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `WebGLRenderingContext` | WebGLRenderingContext |
| `numChannels` | `number` | number the number of channels you want to create |

#### Returns

`void`

#### Defined in

[lib/core/rendering/webgl/TextureDataManager.ts:17](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/rendering/webgl/TextureDataManager.ts#L17)
