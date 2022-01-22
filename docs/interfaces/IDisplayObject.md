[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / IDisplayObject

# Interface: IDisplayObject

## Hierarchy

- [`IEmitter`](IEmitter.md)

  ↳ **`IDisplayObject`**

  ↳↳ [`IDisplayObjectContainer`](IDisplayObjectContainer.md)

## Implemented by

- [`DisplayObject`](../classes/DisplayObject.md)

## Table of contents

### Properties

- [filters](IDisplayObject.md#filters)
- [height](IDisplayObject.md#height)
- [matrix](IDisplayObject.md#matrix)
- [opacity](IDisplayObject.md#opacity)
- [parent](IDisplayObject.md#parent)
- [rotation](IDisplayObject.md#rotation)
- [scaleX](IDisplayObject.md#scalex)
- [scaleY](IDisplayObject.md#scaley)
- [texture](IDisplayObject.md#texture)
- [transformOrigin](IDisplayObject.md#transformorigin)
- [visible](IDisplayObject.md#visible)
- [width](IDisplayObject.md#width)
- [worldMatrix](IDisplayObject.md#worldmatrix)
- [worldOpacity](IDisplayObject.md#worldopacity)
- [x](IDisplayObject.md#x)
- [y](IDisplayObject.md#y)

### Methods

- [emit](IDisplayObject.md#emit)
- [hasObservers](IDisplayObject.md#hasobservers)
- [isObserver](IDisplayObject.md#isobserver)
- [render](IDisplayObject.md#render)
- [snapshot](IDisplayObject.md#snapshot)
- [subscribe](IDisplayObject.md#subscribe)
- [unsubscribe](IDisplayObject.md#unsubscribe)
- [unsubscribeAll](IDisplayObject.md#unsubscribeall)
- [update](IDisplayObject.md#update)

## Properties

### filters

• **filters**: [`IFilter`](IFilter.md)[]

An indexed array that contains each filter associated to the object

#### Defined in

[lib/core/display/IDisplayObject.ts:25](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L25)

___

### height

• **height**: `number`

Indicates the height of the display object, in pixels.

#### Defined in

[lib/core/display/IDisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L69)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Defined in

[lib/core/display/IDisplayObject.ts:37](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L37)

___

### opacity

• **opacity**: `number`

Indicates the transparency value of the object.

#### Defined in

[lib/core/display/IDisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L73)

___

### parent

• **parent**: [`IDisplayObjectContainer`](IDisplayObjectContainer.md)

Indicates the IDisplayObjectContainer object that contains this object.

#### Defined in

[lib/core/display/IDisplayObject.ts:33](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L33)

___

### rotation

• **rotation**: `number`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Defined in

[lib/core/display/IDisplayObject.ts:53](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L53)

___

### scaleX

• **scaleX**: `number`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Defined in

[lib/core/display/IDisplayObject.ts:45](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L45)

___

### scaleY

• **scaleY**: `number`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Defined in

[lib/core/display/IDisplayObject.ts:49](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L49)

___

### texture

• **texture**: [`Texture`](../classes/Texture.md)

The current texture object associated to this object.

#### Defined in

[lib/core/display/IDisplayObject.ts:29](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L29)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Defined in

[lib/core/display/IDisplayObject.ts:81](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L81)

___

### visible

• **visible**: `Boolean`

Says wether or not the object is visible

#### Defined in

[lib/core/display/IDisplayObject.ts:85](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L85)

___

### width

• **width**: `number`

Indicates the width of the object, in pixels.

#### Defined in

[lib/core/display/IDisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L65)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Defined in

[lib/core/display/IDisplayObject.ts:41](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L41)

___

### worldOpacity

• **worldOpacity**: `number`

Indicates the result of object's opacity by world's opacity.

#### Defined in

[lib/core/display/IDisplayObject.ts:77](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L77)

___

### x

• **x**: `number`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Defined in

[lib/core/display/IDisplayObject.ts:57](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L57)

___

### y

• **y**: `number`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Defined in

[lib/core/display/IDisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L61)

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

[IEmitter](IEmitter.md).[emit](IEmitter.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:6

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

[IEmitter](IEmitter.md).[hasObservers](IEmitter.md#hasobservers)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:7

___

### isObserver

▸ **isObserver**(`eventType`, `subscriber`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `subscriber` | `Function` |

#### Returns

`boolean`

#### Inherited from

[IEmitter](IEmitter.md).[isObserver](IEmitter.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:3

___

### render

▸ **render**(`renderer`): `void`

Draws the object into using the IRenderer passed in param

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`IRenderer`](IRenderer.md) |

#### Returns

`void`

#### Defined in

[lib/core/display/IDisplayObject.ts:13](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L13)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Defined in

[lib/core/display/IDisplayObject.ts:21](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L21)

___

### subscribe

▸ **subscribe**(`eventType`, `subscriber`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `subscriber` | `Function` |

#### Returns

`boolean`

#### Inherited from

[IEmitter](IEmitter.md).[subscribe](IEmitter.md#subscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:2

___

### unsubscribe

▸ **unsubscribe**(`eventType`, `subscriber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |
| `subscriber` | `Function` |

#### Returns

`void`

#### Inherited from

[IEmitter](IEmitter.md).[unsubscribe](IEmitter.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:4

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IEmitter](IEmitter.md).[unsubscribeAll](IEmitter.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:5

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

#### Defined in

[lib/core/display/IDisplayObject.ts:17](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/IDisplayObject.ts#L17)
