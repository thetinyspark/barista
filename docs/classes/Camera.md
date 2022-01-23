[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Camera

# Class: Camera

The Camera class is the base class for every Camera.
A camera is used to look at the scene from a specific point of view.
It inherits from DisplayObject so you can transform it, BUT
it will result on a visual "opposite" transformation in the final scene.

## Hierarchy

- [`DisplayObject`](DisplayObject.md)

  ↳ **`Camera`**

## Table of contents

### Constructors

- [constructor](Camera.md#constructor)

### Properties

- [filters](Camera.md#filters)
- [height](Camera.md#height)
- [matrix](Camera.md#matrix)
- [opacity](Camera.md#opacity)
- [parent](Camera.md#parent)
- [rotation](Camera.md#rotation)
- [scaleX](Camera.md#scalex)
- [scaleY](Camera.md#scaley)
- [texture](Camera.md#texture)
- [transformOrigin](Camera.md#transformorigin)
- [visible](Camera.md#visible)
- [width](Camera.md#width)
- [worldMatrix](Camera.md#worldmatrix)
- [worldOpacity](Camera.md#worldopacity)
- [x](Camera.md#x)
- [y](Camera.md#y)

### Methods

- [emit](Camera.md#emit)
- [getBounds](Camera.md#getbounds)
- [getRevertWorldMatrix](Camera.md#getrevertworldmatrix)
- [hasObservers](Camera.md#hasobservers)
- [isObserver](Camera.md#isobserver)
- [render](Camera.md#render)
- [snapshot](Camera.md#snapshot)
- [subscribe](Camera.md#subscribe)
- [unsubscribe](Camera.md#unsubscribe)
- [unsubscribeAll](Camera.md#unsubscribeall)
- [update](Camera.md#update)
- [createFromTexture](Camera.md#createfromtexture)

## Constructors

### constructor

• **new Camera**()

#### Overrides

[DisplayObject](DisplayObject.md).[constructor](DisplayObject.md#constructor)

#### Defined in

[lib/core/display/Camera.ts:11](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/Camera.ts#L11)

## Properties

### filters

• **filters**: [`IFilter`](../interfaces/IFilter.md)[] = `[]`

An indexed array that contains each filter associated to the object

#### Inherited from

[DisplayObject](DisplayObject.md).[filters](DisplayObject.md#filters)

#### Defined in

[lib/core/display/DisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L61)

___

### height

• **height**: `number` = `0`

Indicates the height of the display object, in pixels.

#### Inherited from

[DisplayObject](DisplayObject.md).[height](DisplayObject.md#height)

#### Defined in

[lib/core/display/DisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L73)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Inherited from

[DisplayObject](DisplayObject.md).[matrix](DisplayObject.md#matrix)

#### Defined in

[lib/core/display/DisplayObject.ts:64](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L64)

___

### opacity

• **opacity**: `number` = `1`

Indicates the transparency value of the object.

#### Inherited from

[DisplayObject](DisplayObject.md).[opacity](DisplayObject.md#opacity)

#### Defined in

[lib/core/display/DisplayObject.ts:67](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L67)

___

### parent

• **parent**: [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) = `null`

Indicates the IDisplayObjectContainer object that contains this object.

#### Inherited from

[DisplayObject](DisplayObject.md).[parent](DisplayObject.md#parent)

#### Defined in

[lib/core/display/DisplayObject.ts:75](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L75)

___

### rotation

• **rotation**: `number` = `0`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Inherited from

[DisplayObject](DisplayObject.md).[rotation](DisplayObject.md#rotation)

#### Defined in

[lib/core/display/DisplayObject.ts:71](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L71)

___

### scaleX

• **scaleX**: `number` = `1`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObject](DisplayObject.md).[scaleX](DisplayObject.md#scalex)

#### Defined in

[lib/core/display/DisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L69)

___

### scaleY

• **scaleY**: `number` = `1`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObject](DisplayObject.md).[scaleY](DisplayObject.md#scaley)

#### Defined in

[lib/core/display/DisplayObject.ts:70](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L70)

___

### texture

• **texture**: [`Texture`](Texture.md) = `null`

The current texture object associated to this object.

#### Inherited from

[DisplayObject](DisplayObject.md).[texture](DisplayObject.md#texture)

#### Defined in

[lib/core/display/DisplayObject.ts:62](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L62)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Inherited from

[DisplayObject](DisplayObject.md).[transformOrigin](DisplayObject.md#transformorigin)

#### Defined in

[lib/core/display/DisplayObject.ts:74](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L74)

___

### visible

• **visible**: `boolean` = `true`

Says wether or not the object is visible

#### Inherited from

[DisplayObject](DisplayObject.md).[visible](DisplayObject.md#visible)

#### Defined in

[lib/core/display/DisplayObject.ts:76](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L76)

___

### width

• **width**: `number` = `0`

Indicates the width of the object, in pixels.

#### Inherited from

[DisplayObject](DisplayObject.md).[width](DisplayObject.md#width)

#### Defined in

[lib/core/display/DisplayObject.ts:72](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L72)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Inherited from

[DisplayObject](DisplayObject.md).[worldMatrix](DisplayObject.md#worldmatrix)

#### Defined in

[lib/core/display/DisplayObject.ts:63](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L63)

___

### worldOpacity

• **worldOpacity**: `number` = `1`

Indicates the result of object's opacity by world's opacity.

#### Inherited from

[DisplayObject](DisplayObject.md).[worldOpacity](DisplayObject.md#worldopacity)

#### Defined in

[lib/core/display/DisplayObject.ts:68](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L68)

___

### x

• **x**: `number` = `0`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObject](DisplayObject.md).[x](DisplayObject.md#x)

#### Defined in

[lib/core/display/DisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L65)

___

### y

• **y**: `number` = `0`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObject](DisplayObject.md).[y](DisplayObject.md#y)

#### Defined in

[lib/core/display/DisplayObject.ts:66](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L66)

## Methods

### emit

▸ **emit**(`eventType`, `payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `payload` | `any` |

#### Returns

`void`

#### Inherited from

[DisplayObject](DisplayObject.md).[emit](DisplayObject.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### getBounds

▸ **getBounds**(): [`Rectangle`](../modules.md#rectangle)

Returns the real bounds of the camera.
You could use it on clipping strategy.

#### Returns

[`Rectangle`](../modules.md#rectangle)

#### Defined in

[lib/core/display/Camera.ts:30](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/Camera.ts#L30)

___

### getRevertWorldMatrix

▸ **getRevertWorldMatrix**(): `mat2d`

Returns the opposite of the camera's worldMatrix.
It is used by the scene (Stage) to simulate a certain
point of view.

#### Returns

`mat2d`

#### Defined in

[lib/core/display/Camera.ts:20](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/Camera.ts#L20)

___

### hasObservers

▸ **hasObservers**(`eventType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |

#### Returns

`boolean`

#### Inherited from

[DisplayObject](DisplayObject.md).[hasObservers](DisplayObject.md#hasobservers)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:5

___

### isObserver

▸ **isObserver**(`eventType`, `observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`boolean`

#### Inherited from

[DisplayObject](DisplayObject.md).[isObserver](DisplayObject.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### render

▸ **render**(`renderer`): `void`

Draws the object into using the IRenderer passed in param

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`IRenderer`](../interfaces/IRenderer.md) |

#### Returns

`void`

#### Inherited from

[DisplayObject](DisplayObject.md).[render](DisplayObject.md#render)

#### Defined in

[lib/core/display/DisplayObject.ts:117](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L117)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Inherited from

[DisplayObject](DisplayObject.md).[snapshot](DisplayObject.md#snapshot)

#### Defined in

[lib/core/display/DisplayObject.ts:78](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L78)

___

### subscribe

▸ **subscribe**(`eventType`, `observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`boolean`

#### Inherited from

[DisplayObject](DisplayObject.md).[subscribe](DisplayObject.md#subscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:8

___

### unsubscribe

▸ **unsubscribe**(`eventType`, `observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `observer` | `Function` |

#### Returns

`void`

#### Inherited from

[DisplayObject](DisplayObject.md).[unsubscribe](DisplayObject.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[DisplayObject](DisplayObject.md).[unsubscribeAll](DisplayObject.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9

___

### update

▸ **update**(`worldMatrix`, `worldOpacity?`): `void`

update object's matrix, world matrix, opacity and world opacity

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `worldMatrix` | `mat2d` | `undefined` |
| `worldOpacity` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[DisplayObject](DisplayObject.md).[update](DisplayObject.md#update)

#### Defined in

[lib/core/display/DisplayObject.ts:99](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L99)

___

### createFromTexture

▸ `Static` **createFromTexture**(`texture`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

Creates and returns a Display Object from a Texture object.
The resulting object will have the same width and height
as the "sx" and "sy" properties of the Texture object.
The "texture" property will contains the Texture object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Inherited from

[DisplayObject](DisplayObject.md).[createFromTexture](DisplayObject.md#createfromtexture)

#### Defined in

[lib/core/display/DisplayObject.ts:128](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/DisplayObject.ts#L128)
