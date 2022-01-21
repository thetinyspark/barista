---
title: "Class: Spritesheet"
linkTitle: "Spritesheet"
slug: "Spritesheet"
---

The Spritesheet class is usefull to gather multiples CanvasImageSources together.
The sources will be transformed into a set of Texture objects.
A Spritesheet object has a width and a height, it means that it can contains
a certain amount of CanvasImageSources.

## Table of contents

### Constructors

- [constructor](Spritesheet.md#constructor)

### Properties

- [\_height](Spritesheet.md#_height)
- [\_textureData](Spritesheet.md#_texturedata)
- [\_textures](Spritesheet.md#_textures)
- [\_width](Spritesheet.md#_width)
- [\_zones](Spritesheet.md#_zones)

### Methods

- [\_addSource](Spritesheet.md#_addsource)
- [\_drawTextures](Spritesheet.md#_drawtextures)
- [\_findFreeZoneFor](Spritesheet.md#_findfreezonefor)
- [\_reset](Spritesheet.md#_reset)
- [\_sortSourcesByAreaAsc](Spritesheet.md#_sortsourcesbyareaasc)
- [\_sortZonesByAreaAsc](Spritesheet.md#_sortzonesbyareaasc)
- [getHeight](Spritesheet.md#getheight)
- [getTextureData](Spritesheet.md#gettexturedata)
- [getTextures](Spritesheet.md#gettextures)
- [getWidth](Spritesheet.md#getwidth)
- [getZones](Spritesheet.md#getzones)

## Constructors

### constructor

• **new Spritesheet**(`width`, `height`, `sources?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `sources` | { `id`: `string` ; `source`: `CanvasImageSource`  }[] | `[]` |

#### Defined in

[lib/core/texture/Spritesheet.ts:20](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L20)

## Properties

### \_height

• `Private` **\_height**: `number` = `0`

#### Defined in

[lib/core/texture/Spritesheet.ts:15](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L15)

___

### \_textureData

• `Private` **\_textureData**: [`TextureData`](TextureData.md) = `null`

#### Defined in

[lib/core/texture/Spritesheet.ts:18](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L18)

___

### \_textures

• `Private` **\_textures**: [`Texture`](Texture.md)[] = `[]`

#### Defined in

[lib/core/texture/Spritesheet.ts:17](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L17)

___

### \_width

• `Private` **\_width**: `number` = `0`

#### Defined in

[lib/core/texture/Spritesheet.ts:14](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L14)

___

### \_zones

• `Private` **\_zones**: [`Zone`](Zone.md)[] = `[]`

#### Defined in

[lib/core/texture/Spritesheet.ts:16](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L16)

## Methods

### \_addSource

▸ `Private` **_addSource**(`source`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Object` |
| `source.id` | `string` |
| `source.source` | `CanvasImageSource` |

#### Returns

`boolean`

#### Defined in

[lib/core/texture/Spritesheet.ts:69](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L69)

___

### \_drawTextures

▸ `Private` **_drawTextures**(): [`Texture`](Texture.md)[]

#### Returns

[`Texture`](Texture.md)[]

#### Defined in

[lib/core/texture/Spritesheet.ts:37](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L37)

___

### \_findFreeZoneFor

▸ `Private` **_findFreeZoneFor**(`source`): [`Zone`](Zone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `CanvasImageSource` |

#### Returns

[`Zone`](Zone.md)

#### Defined in

[lib/core/texture/Spritesheet.ts:99](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L99)

___

### \_reset

▸ `Private` **_reset**(`width`, `height`, `sources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `sources` | { `id`: `string` ; `source`: `CanvasImageSource`  }[] |

#### Returns

`void`

#### Defined in

[lib/core/texture/Spritesheet.ts:111](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L111)

___

### \_sortSourcesByAreaAsc

▸ `Private` **_sortSourcesByAreaAsc**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Object` |
| `a.id` | `string` |
| `a.source` | `CanvasImageSource` |
| `b` | `Object` |
| `b.id` | `string` |
| `b.source` | `CanvasImageSource` |

#### Returns

`number`

#### Defined in

[lib/core/texture/Spritesheet.ts:28](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L28)

___

### \_sortZonesByAreaAsc

▸ `Private` **_sortZonesByAreaAsc**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Zone`](Zone.md) |
| `b` | [`Zone`](Zone.md) |

#### Returns

`number`

#### Defined in

[lib/core/texture/Spritesheet.ts:24](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L24)

___

### getHeight

▸ **getHeight**(): `number`

Returns the Spritesheet width

#### Returns

`number`

number

#### Defined in

[lib/core/texture/Spritesheet.ts:170](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L170)

___

### getTextureData

▸ **getTextureData**(): [`TextureData`](TextureData.md)

Returns a the new TextureData.

#### Returns

[`TextureData`](TextureData.md)

TextureData

#### Defined in

[lib/core/texture/Spritesheet.ts:138](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L138)

___

### getTextures

▸ **getTextures**(): [`Texture`](Texture.md)[]

Returns a set of Texture objects which could be put onto this Spritesheet.

#### Returns

[`Texture`](Texture.md)[]

Texture[]

#### Defined in

[lib/core/texture/Spritesheet.ts:146](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L146)

___

### getWidth

▸ **getWidth**(): `number`

Returns the Spritesheet width

#### Returns

`number`

number

#### Defined in

[lib/core/texture/Spritesheet.ts:162](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L162)

___

### getZones

▸ **getZones**(): [`Zone`](Zone.md)[]

Returns a set of Zone objects which associated to their source and ids.

#### Returns

[`Zone`](Zone.md)[]

Zone[]

#### Defined in

[lib/core/texture/Spritesheet.ts:154](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/texture/Spritesheet.ts#L154)
