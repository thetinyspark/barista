[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Texture

# Class: Texture

The Texture class is the base class for defining DisplayObjects textures.
It relies on a TextureData object, which contains the graphic source.
A Texture object represents a portion of the original source.

## Table of contents

### Constructors

- [constructor](Texture.md#constructor)

### Properties

- [\_data](Texture.md#_data)
- [bottomLeftUv](Texture.md#bottomleftuv)
- [bottomRightUv](Texture.md#bottomrightuv)
- [id](Texture.md#id)
- [sh](Texture.md#sh)
- [sw](Texture.md#sw)
- [sx](Texture.md#sx)
- [sy](Texture.md#sy)
- [topLeftUv](Texture.md#topleftuv)
- [topRightUv](Texture.md#toprightuv)

### Accessors

- [data](Texture.md#data)
- [source](Texture.md#source)
- [textureUid](Texture.md#textureuid)

### Methods

- [calcUv](Texture.md#calcuv)
- [createSubTexture](Texture.md#createsubtexture)
- [createSubTextures](Texture.md#createsubtextures)
- [createFromSource](Texture.md#createfromsource)

## Constructors

### constructor

• **new Texture**(`id?`, `data`, `sx?`, `sy?`, `sw?`, `sh?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `""` |
| `data` | [`TextureData`](TextureData.md) | `undefined` |
| `sx` | `number` | `0` |
| `sy` | `number` | `0` |
| `sw` | `number` | `0` |
| `sh` | `number` | `0` |

#### Defined in

[lib/core/texture/Texture.ts:56](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L56)

## Properties

### \_data

• `Private` **\_data**: [`TextureData`](TextureData.md)

#### Defined in

[lib/core/texture/Texture.ts:15](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L15)

___

### bottomLeftUv

• **bottomLeftUv**: [`UV`](../modules.md#uv)

The bottomleft uv coordinates of source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:44](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L44)

___

### bottomRightUv

• **bottomRightUv**: [`UV`](../modules.md#uv)

The bottomright uv coordinates of source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:48](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L48)

___

### id

• **id**: `string` = `""`

The id of the Texture object

#### Defined in

[lib/core/texture/Texture.ts:53](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L53)

___

### sh

• **sh**: `number` = `0`

The height of the source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:31](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L31)

___

### sw

• **sw**: `number` = `0`

The width of the source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:27](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L27)

___

### sx

• **sx**: `number` = `0`

The x coordinates of the source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:19](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L19)

___

### sy

• **sy**: `number` = `0`

The y coordinates of the source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:23](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L23)

___

### topLeftUv

• **topLeftUv**: [`UV`](../modules.md#uv)

The topleft uv coordinates of source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:36](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L36)

___

### topRightUv

• **topRightUv**: [`UV`](../modules.md#uv)

The topright uv coordinates of source portion to be drawn

#### Defined in

[lib/core/texture/Texture.ts:40](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L40)

## Accessors

### data

• `get` **data**(): [`TextureData`](TextureData.md)

Returns the underlying TextureData

#### Returns

[`TextureData`](TextureData.md)

TextureData

#### Defined in

[lib/core/texture/Texture.ts:112](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L112)

___

### source

• `get` **source**(): `CanvasImageSource`

Returns the graphic source

#### Returns

`CanvasImageSource`

CanvasImageSource

#### Defined in

[lib/core/texture/Texture.ts:120](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L120)

___

### textureUid

• `get` **textureUid**(): `string`

Returns the TextureData unique id

#### Returns

`string`

string

#### Defined in

[lib/core/texture/Texture.ts:104](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L104)

## Methods

### calcUv

▸ **calcUv**(): `void`

Calculates uv coordinates according to the
source width and height, and the sx, sy, sw, sh
properties of the Texture object

#### Returns

`void`

#### Defined in

[lib/core/texture/Texture.ts:78](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L78)

___

### createSubTexture

▸ **createSubTexture**(`id`, `sx`, `sy`, `sw`, `sh`): [`Texture`](Texture.md)

Creates a sub texture from this Texture object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | string |
| `sx` | `number` | number |
| `sy` | `number` | number |
| `sw` | `number` | number |
| `sh` | `number` | number |

#### Returns

[`Texture`](Texture.md)

Texture object

#### Defined in

[lib/core/texture/Texture.ts:133](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L133)

___

### createSubTextures

▸ **createSubTextures**(`zones`): [`Texture`](Texture.md)[]

Creates A set of subtextures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zones` | { `id`: `string` ; `sh`: `number` ; `sw`: `number` ; `sx`: `number` ; `sy`: `number`  }[] | [] |

#### Returns

[`Texture`](Texture.md)[]

Texture[] object

#### Defined in

[lib/core/texture/Texture.ts:142](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L142)

___

### createFromSource

▸ `Static` **createFromSource**(`id`, `source`): [`Texture`](Texture.md)

Creates a new Texture Object, and its underlying
TextureData object from a graphic source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | string The new Texture id |
| `source` | `CanvasImageSource` | CanvasImageSource The graphic source |

#### Returns

[`Texture`](Texture.md)

Texture object

#### Defined in

[lib/core/texture/Texture.ts:155](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/texture/Texture.ts#L155)
