---
title: "Class: TextureData"
linkTitle: "TextureData"
slug: "TextureData"
---

The TextureData class is the base class for containing graphic source.
It defines a width, a height and a dynamic property
It can create,hold and return a WebGLTexture from the graphic source.

## Table of contents

### Constructors

- [constructor](TextureData.md#constructor)

### Properties

- [\_glTexture](TextureData.md#_gltexture)
- [\_isDynamic](TextureData.md#_isdynamic)
- [\_source](TextureData.md#_source)
- [\_uid](TextureData.md#_uid)
- [\_updateNextFrame](TextureData.md#_updatenextframe)
- [height](TextureData.md#height)
- [texturePos](TextureData.md#texturepos)
- [width](TextureData.md#width)
- [\_counter](TextureData.md#_counter)

### Accessors

- [isDynamic](TextureData.md#isdynamic)
- [uid](TextureData.md#uid)

### Methods

- [getGlTexture](TextureData.md#getgltexture)
- [getSource](TextureData.md#getsource)
- [setSource](TextureData.md#setsource)

## Constructors

### constructor

• **new TextureData**(`source`)

Creates a new TextureData object which hold the graphic source passed in param.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `CanvasImageSource` | CanvasImageSource the graphic source |

#### Defined in

[lib/core/texture/TextureData.ts:35](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L35)

## Properties

### \_glTexture

• `Private` **\_glTexture**: `WebGLTexture` = `null`

#### Defined in

[lib/core/texture/TextureData.ts:25](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L25)

___

### \_isDynamic

• `Private` **\_isDynamic**: `boolean` = `false`

#### Defined in

[lib/core/texture/TextureData.ts:26](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L26)

___

### \_source

• `Private` **\_source**: `CanvasImageSource`

#### Defined in

[lib/core/texture/TextureData.ts:23](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L23)

___

### \_uid

• `Private` **\_uid**: `string`

#### Defined in

[lib/core/texture/TextureData.ts:24](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L24)

___

### \_updateNextFrame

• `Private` **\_updateNextFrame**: `boolean` = `false`

#### Defined in

[lib/core/texture/TextureData.ts:27](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L27)

___

### height

• **height**: `number` = `0`

The height of the texture data

#### Defined in

[lib/core/texture/TextureData.ts:17](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L17)

___

### texturePos

• **texturePos**: `number` = `0`

The position of the texture data inside webgl program
(used by TextureDataManager at every frame do NOT touch it unless you know what you're doing)

#### Defined in

[lib/core/texture/TextureData.ts:22](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L22)

___

### width

• **width**: `number` = `0`

The width of the texture data

#### Defined in

[lib/core/texture/TextureData.ts:13](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L13)

___

### \_counter

▪ `Static` `Private` **\_counter**: `number` = `0`

#### Defined in

[lib/core/texture/TextureData.ts:29](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L29)

## Accessors

### isDynamic

• `get` **isDynamic**(): `boolean`

Says if current TextureData is dynamic or not

#### Returns

`boolean`

boolean

#### Defined in

[lib/core/texture/TextureData.ts:109](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L109)

• `set` **isDynamic**(`value`): `void`

Sets the dynamic property of the current TextureData

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

boolean

#### Defined in

[lib/core/texture/TextureData.ts:116](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L116)

___

### uid

• `get` **uid**(): `string`

The TextureData unique id

#### Returns

`string`

#### Defined in

[lib/core/texture/TextureData.ts:101](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L101)

## Methods

### getGlTexture

▸ **getGlTexture**(`context`): `WebGLTexture`

Returns a WebGLTexture object created from the source.
If the TextureData is dynamic, the WebGLTexture will
be refreshed and sent to the rendering context passed in param.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `WebGLRenderingContext` | WebGLRenderingContext |

#### Returns

`WebGLTexture`

WebGLTexture object

#### Defined in

[lib/core/texture/TextureData.ts:75](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L75)

___

### getSource

▸ **getSource**(): `CanvasImageSource`

Returns the current TextureData source

#### Returns

`CanvasImageSource`

CanvasImageSource

#### Defined in

[lib/core/texture/TextureData.ts:64](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L64)

___

### setSource

▸ **setSource**(`source`): `void`

Sets the current TextureData source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `CanvasImageSource` | CanvasImageSource |

#### Returns

`void`

#### Defined in

[lib/core/texture/TextureData.ts:44](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/TextureData.ts#L44)
