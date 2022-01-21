---
title: "Class: IsoMap"
linkTitle: "IsoMap"
slug: "IsoMap"
---

## Hierarchy

- [`DisplayObjectContainer`](DisplayObjectContainer.md)

  ↳ **`IsoMap`**

## Table of contents

### Constructors

- [constructor](IsoMap.md#constructor)

### Properties

- [filters](IsoMap.md#filters)
- [height](IsoMap.md#height)
- [matrix](IsoMap.md#matrix)
- [opacity](IsoMap.md#opacity)
- [parent](IsoMap.md#parent)
- [rotation](IsoMap.md#rotation)
- [scaleX](IsoMap.md#scalex)
- [scaleY](IsoMap.md#scaley)
- [sortAuto](IsoMap.md#sortauto)
- [texture](IsoMap.md#texture)
- [transformOrigin](IsoMap.md#transformorigin)
- [visible](IsoMap.md#visible)
- [width](IsoMap.md#width)
- [worldMatrix](IsoMap.md#worldmatrix)
- [worldOpacity](IsoMap.md#worldopacity)
- [x](IsoMap.md#x)
- [y](IsoMap.md#y)

### Methods

- [addChild](IsoMap.md#addchild)
- [addChildAt](IsoMap.md#addchildat)
- [contains](IsoMap.md#contains)
- [emit](IsoMap.md#emit)
- [getChildIndex](IsoMap.md#getchildindex)
- [getChildren](IsoMap.md#getchildren)
- [hasObservers](IsoMap.md#hasobservers)
- [isObserver](IsoMap.md#isobserver)
- [removeChild](IsoMap.md#removechild)
- [removeChildAt](IsoMap.md#removechildat)
- [removeChildren](IsoMap.md#removechildren)
- [render](IsoMap.md#render)
- [snapshot](IsoMap.md#snapshot)
- [sort](IsoMap.md#sort)
- [subscribe](IsoMap.md#subscribe)
- [unsubscribe](IsoMap.md#unsubscribe)
- [unsubscribeAll](IsoMap.md#unsubscribeall)
- [update](IsoMap.md#update)
- [createFromTexture](IsoMap.md#createfromtexture)

## Constructors

### constructor

• **new IsoMap**()

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[constructor](DisplayObjectContainer.md#constructor)

## Properties

### filters

• **filters**: [`IFilter`](../interfaces/IFilter.md)[] = `[]`

An indexed array that contains each filter associated to the object

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[filters](DisplayObjectContainer.md#filters)

#### Defined in

[lib/core/display/DisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L61)

___

### height

• **height**: `number` = `0`

Indicates the height of the display object, in pixels.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[height](DisplayObjectContainer.md#height)

#### Defined in

[lib/core/display/DisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L73)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[matrix](DisplayObjectContainer.md#matrix)

#### Defined in

[lib/core/display/DisplayObject.ts:64](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L64)

___

### opacity

• **opacity**: `number` = `1`

Indicates the transparency value of the object.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[opacity](DisplayObjectContainer.md#opacity)

#### Defined in

[lib/core/display/DisplayObject.ts:67](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L67)

___

### parent

• **parent**: [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) = `null`

Indicates the IDisplayObjectContainer object that contains this object.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[parent](DisplayObjectContainer.md#parent)

#### Defined in

[lib/core/display/DisplayObject.ts:75](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L75)

___

### rotation

• **rotation**: `number` = `0`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[rotation](DisplayObjectContainer.md#rotation)

#### Defined in

[lib/core/display/DisplayObject.ts:71](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L71)

___

### scaleX

• **scaleX**: `number` = `1`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[scaleX](DisplayObjectContainer.md#scalex)

#### Defined in

[lib/core/display/DisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L69)

___

### scaleY

• **scaleY**: `number` = `1`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[scaleY](DisplayObjectContainer.md#scaley)

#### Defined in

[lib/core/display/DisplayObject.ts:70](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L70)

___

### sortAuto

• **sortAuto**: `boolean` = `false`

#### Defined in

[lib/sdk/isometric/view/map/IsoMap.ts:8](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/isometric/view/map/IsoMap.ts#L8)

___

### texture

• **texture**: [`Texture`](Texture.md) = `null`

The current texture object associated to this object.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[texture](DisplayObjectContainer.md#texture)

#### Defined in

[lib/core/display/DisplayObject.ts:62](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L62)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[transformOrigin](DisplayObjectContainer.md#transformorigin)

#### Defined in

[lib/core/display/DisplayObject.ts:74](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L74)

___

### visible

• **visible**: `boolean` = `true`

Says wether or not the object is visible

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[visible](DisplayObjectContainer.md#visible)

#### Defined in

[lib/core/display/DisplayObject.ts:76](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L76)

___

### width

• **width**: `number` = `0`

Indicates the width of the object, in pixels.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[width](DisplayObjectContainer.md#width)

#### Defined in

[lib/core/display/DisplayObject.ts:72](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L72)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[worldMatrix](DisplayObjectContainer.md#worldmatrix)

#### Defined in

[lib/core/display/DisplayObject.ts:63](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L63)

___

### worldOpacity

• **worldOpacity**: `number` = `1`

Indicates the result of object's opacity by world's opacity.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[worldOpacity](DisplayObjectContainer.md#worldopacity)

#### Defined in

[lib/core/display/DisplayObject.ts:68](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L68)

___

### x

• **x**: `number` = `0`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[x](DisplayObjectContainer.md#x)

#### Defined in

[lib/core/display/DisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L65)

___

### y

• **y**: `number` = `0`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[y](DisplayObjectContainer.md#y)

#### Defined in

[lib/core/display/DisplayObject.ts:66](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L66)

## Methods

### addChild

▸ **addChild**(`child`): `void`

Adds a child IDisplayObject instance to this IDisplayObjectContainer instance.
The child is added to the front (top) of all other children in this IDisplayObjectContainer instance.
To add a child to a specific index position, use the addChildAt() method.
If you add a child object that already has a different IDisplayObjectContainer as a parent,
the object is removed from the children list of the other IDisplayObjectContainer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[addChild](DisplayObjectContainer.md#addchild)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:75](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L75)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): `void`

Adds an IDisplayObject instance to this IDisplayObjectContainer instance.
The child is added at the specified index position.
An index of 0 represents the back (bottom) of the IDisplayObjectContainer's display list for.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[addChildAt](DisplayObjectContainer.md#addchildat)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:88](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L88)

___

### contains

▸ **contains**(`child`): `boolean`

Tells whether or not the specified IDisplayObject is a child of the IDisplayObjectContainer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`boolean`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[contains](DisplayObjectContainer.md#contains)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:115](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L115)

___

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

[DisplayObjectContainer](DisplayObjectContainer.md).[emit](DisplayObjectContainer.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns specified IDisplayObject's position inside the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

`number`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[getChildIndex](DisplayObjectContainer.md#getchildindex)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:111](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L111)

___

### getChildren

▸ **getChildren**(): [`IDisplayObject`](../interfaces/IDisplayObject.md)[]

Returns IDisplayObjectContainer's children list

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)[]

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[getChildren](DisplayObjectContainer.md#getchildren)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:107](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L107)

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

[DisplayObjectContainer](DisplayObjectContainer.md).[hasObservers](DisplayObjectContainer.md#hasobservers)

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

[DisplayObjectContainer](DisplayObjectContainer.md).[isObserver](DisplayObjectContainer.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### removeChild

▸ **removeChild**(`child`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

Removes the specified IDisplayObject child from the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](../interfaces/IDisplayObject.md) |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[removeChild](DisplayObjectContainer.md#removechild)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:83](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L83)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

Removes an IDisplayObject child at the specified index position from the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[removeChildAt](DisplayObjectContainer.md#removechildat)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:97](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L97)

___

### removeChildren

▸ **removeChildren**(): `void`

Removes all IDisplayObject children of the IDisplayObjectContainer children list.

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[removeChildren](DisplayObjectContainer.md#removechildren)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:119](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L119)

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

#### Overrides

[DisplayObjectContainer](DisplayObjectContainer.md).[render](DisplayObjectContainer.md#render)

#### Defined in

[lib/sdk/isometric/view/map/IsoMap.ts:15](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/isometric/view/map/IsoMap.ts#L15)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[snapshot](DisplayObjectContainer.md#snapshot)

#### Defined in

[lib/core/display/DisplayObject.ts:78](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L78)

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/isometric/view/map/IsoMap.ts:10](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/isometric/view/map/IsoMap.ts#L10)

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

[DisplayObjectContainer](DisplayObjectContainer.md).[subscribe](DisplayObjectContainer.md#subscribe)

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

[DisplayObjectContainer](DisplayObjectContainer.md).[unsubscribe](DisplayObjectContainer.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[unsubscribeAll](DisplayObjectContainer.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9

___

### update

▸ **update**(`worldMatrix`, `worldOpacity`): `void`

update object's matrix, world matrix, opacity and world opacity

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldMatrix` | `mat2d` |
| `worldOpacity` | `number` |

#### Returns

`void`

#### Inherited from

[DisplayObjectContainer](DisplayObjectContainer.md).[update](DisplayObjectContainer.md#update)

#### Defined in

[lib/core/display/DisplayObjectContainer.ts:125](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObjectContainer.ts#L125)

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

[DisplayObjectContainer](DisplayObjectContainer.md).[createFromTexture](DisplayObjectContainer.md#createfromtexture)

#### Defined in

[lib/core/display/DisplayObject.ts:128](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/display/DisplayObject.ts#L128)
