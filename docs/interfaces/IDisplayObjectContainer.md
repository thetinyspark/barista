[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / IDisplayObjectContainer

# Interface: IDisplayObjectContainer

## Hierarchy

- [`IDisplayObject`](IDisplayObject.md)

  ↳ **`IDisplayObjectContainer`**

## Implemented by

- [`DisplayObjectContainer`](../classes/DisplayObjectContainer.md)

## Table of contents

### Properties

- [filters](IDisplayObjectContainer.md#filters)
- [height](IDisplayObjectContainer.md#height)
- [matrix](IDisplayObjectContainer.md#matrix)
- [opacity](IDisplayObjectContainer.md#opacity)
- [parent](IDisplayObjectContainer.md#parent)
- [rotation](IDisplayObjectContainer.md#rotation)
- [scaleX](IDisplayObjectContainer.md#scalex)
- [scaleY](IDisplayObjectContainer.md#scaley)
- [texture](IDisplayObjectContainer.md#texture)
- [transformOrigin](IDisplayObjectContainer.md#transformorigin)
- [visible](IDisplayObjectContainer.md#visible)
- [width](IDisplayObjectContainer.md#width)
- [worldMatrix](IDisplayObjectContainer.md#worldmatrix)
- [worldOpacity](IDisplayObjectContainer.md#worldopacity)
- [x](IDisplayObjectContainer.md#x)
- [y](IDisplayObjectContainer.md#y)

### Methods

- [addChild](IDisplayObjectContainer.md#addchild)
- [addChildAt](IDisplayObjectContainer.md#addchildat)
- [contains](IDisplayObjectContainer.md#contains)
- [emit](IDisplayObjectContainer.md#emit)
- [getChildIndex](IDisplayObjectContainer.md#getchildindex)
- [getChildren](IDisplayObjectContainer.md#getchildren)
- [hasObservers](IDisplayObjectContainer.md#hasobservers)
- [isObserver](IDisplayObjectContainer.md#isobserver)
- [removeChild](IDisplayObjectContainer.md#removechild)
- [removeChildAt](IDisplayObjectContainer.md#removechildat)
- [removeChildren](IDisplayObjectContainer.md#removechildren)
- [render](IDisplayObjectContainer.md#render)
- [snapshot](IDisplayObjectContainer.md#snapshot)
- [subscribe](IDisplayObjectContainer.md#subscribe)
- [unsubscribe](IDisplayObjectContainer.md#unsubscribe)
- [unsubscribeAll](IDisplayObjectContainer.md#unsubscribeall)
- [update](IDisplayObjectContainer.md#update)

## Properties

### filters

• **filters**: [`IFilter`](IFilter.md)[]

An indexed array that contains each filter associated to the object

#### Inherited from

[IDisplayObject](IDisplayObject.md).[filters](IDisplayObject.md#filters)

#### Defined in

[lib/core/display/IDisplayObject.ts:25](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L25)

___

### height

• **height**: `number`

Indicates the height of the display object, in pixels.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[height](IDisplayObject.md#height)

#### Defined in

[lib/core/display/IDisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L69)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Inherited from

[IDisplayObject](IDisplayObject.md).[matrix](IDisplayObject.md#matrix)

#### Defined in

[lib/core/display/IDisplayObject.ts:37](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L37)

___

### opacity

• **opacity**: `number`

Indicates the transparency value of the object.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[opacity](IDisplayObject.md#opacity)

#### Defined in

[lib/core/display/IDisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L73)

___

### parent

• **parent**: [`IDisplayObjectContainer`](IDisplayObjectContainer.md)

Indicates the IDisplayObjectContainer object that contains this object.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[parent](IDisplayObject.md#parent)

#### Defined in

[lib/core/display/IDisplayObject.ts:33](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L33)

___

### rotation

• **rotation**: `number`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[rotation](IDisplayObject.md#rotation)

#### Defined in

[lib/core/display/IDisplayObject.ts:53](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L53)

___

### scaleX

• **scaleX**: `number`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[scaleX](IDisplayObject.md#scalex)

#### Defined in

[lib/core/display/IDisplayObject.ts:45](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L45)

___

### scaleY

• **scaleY**: `number`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[scaleY](IDisplayObject.md#scaley)

#### Defined in

[lib/core/display/IDisplayObject.ts:49](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L49)

___

### texture

• **texture**: [`Texture`](../classes/Texture.md)

The current texture object associated to this object.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[texture](IDisplayObject.md#texture)

#### Defined in

[lib/core/display/IDisplayObject.ts:29](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L29)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Inherited from

[IDisplayObject](IDisplayObject.md).[transformOrigin](IDisplayObject.md#transformorigin)

#### Defined in

[lib/core/display/IDisplayObject.ts:81](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L81)

___

### visible

• **visible**: `Boolean`

Says wether or not the object is visible

#### Inherited from

[IDisplayObject](IDisplayObject.md).[visible](IDisplayObject.md#visible)

#### Defined in

[lib/core/display/IDisplayObject.ts:85](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L85)

___

### width

• **width**: `number`

Indicates the width of the object, in pixels.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[width](IDisplayObject.md#width)

#### Defined in

[lib/core/display/IDisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L65)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Inherited from

[IDisplayObject](IDisplayObject.md).[worldMatrix](IDisplayObject.md#worldmatrix)

#### Defined in

[lib/core/display/IDisplayObject.ts:41](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L41)

___

### worldOpacity

• **worldOpacity**: `number`

Indicates the result of object's opacity by world's opacity.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[worldOpacity](IDisplayObject.md#worldopacity)

#### Defined in

[lib/core/display/IDisplayObject.ts:77](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L77)

___

### x

• **x**: `number`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[x](IDisplayObject.md#x)

#### Defined in

[lib/core/display/IDisplayObject.ts:57](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L57)

___

### y

• **y**: `number`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[IDisplayObject](IDisplayObject.md).[y](IDisplayObject.md#y)

#### Defined in

[lib/core/display/IDisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L61)

## Methods

### addChild

▸ **addChild**(`child`): `any`

Adds a child IDisplayObject instance to this IDisplayObjectContainer instance.
The child is added to the front (top) of all other children in this IDisplayObjectContainer instance.
To add a child to a specific index position, use the addChildAt() method.
If you add a child object that already has a different IDisplayObjectContainer as a parent,
the object is removed from the children list of the other IDisplayObjectContainer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) |

#### Returns

`any`

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:11](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L11)

___

### addChildAt

▸ **addChildAt**(`child`, `index`): `any`

Adds an IDisplayObject instance to this IDisplayObjectContainer instance.
The child is added at the specified index position.
An index of 0 represents the back (bottom) of the IDisplayObjectContainer's display list for.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) |
| `index` | `number` |

#### Returns

`any`

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:17](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L17)

___

### contains

▸ **contains**(`child`): `boolean`

Tells whether or not the specified IDisplayObject is a child of the IDisplayObjectContainer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) |

#### Returns

`boolean`

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:37](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L37)

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

[IDisplayObject](IDisplayObject.md).[emit](IDisplayObject.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:6

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns specified IDisplayObject's position inside the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) |

#### Returns

`number`

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:33](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L33)

___

### getChildren

▸ **getChildren**(): [`IDisplayObject`](IDisplayObject.md)[]

Returns IDisplayObjectContainer's children list

#### Returns

[`IDisplayObject`](IDisplayObject.md)[]

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:29](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L29)

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

[IDisplayObject](IDisplayObject.md).[hasObservers](IDisplayObject.md#hasobservers)

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

[IDisplayObject](IDisplayObject.md).[isObserver](IDisplayObject.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:3

___

### removeChild

▸ **removeChild**(`child`): [`IDisplayObject`](IDisplayObject.md)

Removes the specified IDisplayObject child from the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) |

#### Returns

[`IDisplayObject`](IDisplayObject.md)

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:21](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L21)

___

### removeChildAt

▸ **removeChildAt**(`index`): [`IDisplayObject`](IDisplayObject.md)

Removes an IDisplayObject child at the specified index position from the IDisplayObjectContainer's children list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`IDisplayObject`](IDisplayObject.md)

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:25](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L25)

___

### removeChildren

▸ **removeChildren**(): `any`

Removes all IDisplayObject children of the IDisplayObjectContainer children list.

#### Returns

`any`

#### Defined in

[lib/core/display/IDisplayObjectContainer.ts:41](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObjectContainer.ts#L41)

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

#### Inherited from

[IDisplayObject](IDisplayObject.md).[render](IDisplayObject.md#render)

#### Defined in

[lib/core/display/IDisplayObject.ts:13](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L13)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Inherited from

[IDisplayObject](IDisplayObject.md).[snapshot](IDisplayObject.md#snapshot)

#### Defined in

[lib/core/display/IDisplayObject.ts:21](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L21)

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

[IDisplayObject](IDisplayObject.md).[subscribe](IDisplayObject.md#subscribe)

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

[IDisplayObject](IDisplayObject.md).[unsubscribe](IDisplayObject.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:4

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IDisplayObject](IDisplayObject.md).[unsubscribeAll](IDisplayObject.md#unsubscribeall)

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

#### Inherited from

[IDisplayObject](IDisplayObject.md).[update](IDisplayObject.md#update)

#### Defined in

[lib/core/display/IDisplayObject.ts:17](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/display/IDisplayObject.ts#L17)
