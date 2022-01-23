[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / CanvasUtils

# Class: CanvasUtils

The CanvasUtils class is a set of utilitaries for canvas elements.

## Table of contents

### Constructors

- [constructor](CanvasUtils.md#constructor)

### Methods

- [canvasPixelToRGBA](CanvasUtils.md#canvaspixeltorgba)
- [create](CanvasUtils.md#create)
- [fillRect](CanvasUtils.md#fillrect)
- [getCanvasPixel](CanvasUtils.md#getcanvaspixel)
- [getCanvasPixels](CanvasUtils.md#getcanvaspixels)
- [pixelsAreTheSame](CanvasUtils.md#pixelsarethesame)

## Constructors

### constructor

• **new CanvasUtils**()

## Methods

### canvasPixelToRGBA

▸ `Static` **canvasPixelToRGBA**(`pixelData`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelData` | `number`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[lib/core/utils/CanvasUtils.ts:40](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/CanvasUtils.ts#L40)

___

### create

▸ `Static` **create**(`width?`, `height?`): `HTMLCanvasElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `1` |
| `height` | `number` | `1` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[lib/core/utils/CanvasUtils.ts:5](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/CanvasUtils.ts#L5)

___

### fillRect

▸ `Static` **fillRect**(`canvas`, `color`, `x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `color` | `string` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[lib/core/utils/CanvasUtils.ts:12](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/CanvasUtils.ts#L12)

___

### getCanvasPixel

▸ `Static` **getCanvasPixel**(`canvas`, `x`, `y`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`number`[]

#### Defined in

[lib/core/utils/CanvasUtils.ts:29](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/CanvasUtils.ts#L29)

___

### getCanvasPixels

▸ `Static` **getCanvasPixels**(`canvas`): `Uint8ClampedArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`Uint8ClampedArray`

#### Defined in

[lib/core/utils/CanvasUtils.ts:23](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/CanvasUtils.ts#L23)

___

### pixelsAreTheSame

▸ `Static` **pixelsAreTheSame**(`pixelsA`, `pixelsB`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pixelsA` | `number`[] |
| `pixelsB` | `number`[] |

#### Returns

`boolean`

#### Defined in

[lib/core/utils/CanvasUtils.ts:49](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/utils/CanvasUtils.ts#L49)
