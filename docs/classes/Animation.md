[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Animation

# Class: Animation

The Animation class is the base class for all animations that can be placed on the display list.
It supports basic functionality like play, rewind, stop, loop the animations.
It is basically a DisplayObject with a an array of "frame textures".
Everytime the render method is called, the currentFrameIndex is increased or decreased
depending on animation length, animation way (backward||forward)

## Hierarchy

- [`DisplayObject`](DisplayObject.md)

  ↳ **`Animation`**

## Table of contents

### Constructors

- [constructor](Animation.md#constructor)

### Properties

- [\_currentFrameIndex](Animation.md#_currentframeindex)
- [\_forwarding](Animation.md#_forwarding)
- [\_framesTextures](Animation.md#_framestextures)
- [\_playing](Animation.md#_playing)
- [filters](Animation.md#filters)
- [height](Animation.md#height)
- [loop](Animation.md#loop)
- [matrix](Animation.md#matrix)
- [opacity](Animation.md#opacity)
- [parent](Animation.md#parent)
- [rotation](Animation.md#rotation)
- [scaleX](Animation.md#scalex)
- [scaleY](Animation.md#scaley)
- [texture](Animation.md#texture)
- [transformOrigin](Animation.md#transformorigin)
- [visible](Animation.md#visible)
- [width](Animation.md#width)
- [worldMatrix](Animation.md#worldmatrix)
- [worldOpacity](Animation.md#worldopacity)
- [x](Animation.md#x)
- [y](Animation.md#y)

### Methods

- [clearFrames](Animation.md#clearframes)
- [emit](Animation.md#emit)
- [getAnimationLength](Animation.md#getanimationlength)
- [getCurrentFrameIndex](Animation.md#getcurrentframeindex)
- [getCurrentFrameTexture](Animation.md#getcurrentframetexture)
- [getFrameTexture](Animation.md#getframetexture)
- [getLastFrameIndex](Animation.md#getlastframeindex)
- [getNextDefinedFrameTexture](Animation.md#getnextdefinedframetexture)
- [getPreviousDefinedFrameTexture](Animation.md#getpreviousdefinedframetexture)
- [goToFrame](Animation.md#gotoframe)
- [hasObservers](Animation.md#hasobservers)
- [isObserver](Animation.md#isobserver)
- [play](Animation.md#play)
- [removeFrameTexture](Animation.md#removeframetexture)
- [render](Animation.md#render)
- [rewind](Animation.md#rewind)
- [setFrameTexture](Animation.md#setframetexture)
- [snapshot](Animation.md#snapshot)
- [stop](Animation.md#stop)
- [subscribe](Animation.md#subscribe)
- [unsubscribe](Animation.md#unsubscribe)
- [unsubscribeAll](Animation.md#unsubscribeall)
- [update](Animation.md#update)
- [createFromTexture](Animation.md#createfromtexture)
- [createFromTexturesAndFrames](Animation.md#createfromtexturesandframes)

## Constructors

### constructor

• **new Animation**()

#### Inherited from

[DisplayObject](DisplayObject.md).[constructor](DisplayObject.md#constructor)

## Properties

### \_currentFrameIndex

• `Private` **\_currentFrameIndex**: `number` = `0`

#### Defined in

[lib/core/display/Animation.ts:14](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L14)

___

### \_forwarding

• `Private` **\_forwarding**: `boolean` = `true`

#### Defined in

[lib/core/display/Animation.ts:16](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L16)

___

### \_framesTextures

• `Private` **\_framesTextures**: [`Texture`](Texture.md)[] = `[]`

#### Defined in

[lib/core/display/Animation.ts:13](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L13)

___

### \_playing

• `Private` **\_playing**: `boolean` = `false`

#### Defined in

[lib/core/display/Animation.ts:15](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L15)

___

### filters

• **filters**: [`IFilter`](../interfaces/IFilter.md)[] = `[]`

An indexed array that contains each filter associated to the object

#### Inherited from

[DisplayObject](DisplayObject.md).[filters](DisplayObject.md#filters)

#### Defined in

[lib/core/display/DisplayObject.ts:61](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L61)

___

### height

• **height**: `number` = `0`

Indicates the height of the display object, in pixels.

#### Inherited from

[DisplayObject](DisplayObject.md).[height](DisplayObject.md#height)

#### Defined in

[lib/core/display/DisplayObject.ts:73](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L73)

___

### loop

• **loop**: `boolean` = `false`

#### Defined in

[lib/core/display/Animation.ts:17](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L17)

___

### matrix

• **matrix**: `mat2d`

The transformation matrix of the object

#### Inherited from

[DisplayObject](DisplayObject.md).[matrix](DisplayObject.md#matrix)

#### Defined in

[lib/core/display/DisplayObject.ts:64](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L64)

___

### opacity

• **opacity**: `number` = `1`

Indicates the transparency value of the object.

#### Inherited from

[DisplayObject](DisplayObject.md).[opacity](DisplayObject.md#opacity)

#### Defined in

[lib/core/display/DisplayObject.ts:67](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L67)

___

### parent

• **parent**: [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) = `null`

Indicates the IDisplayObjectContainer object that contains this object.

#### Inherited from

[DisplayObject](DisplayObject.md).[parent](DisplayObject.md#parent)

#### Defined in

[lib/core/display/DisplayObject.ts:75](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L75)

___

### rotation

• **rotation**: `number` = `0`

Indicates the rotation of the object, in degrees, from its original orientation.

#### Inherited from

[DisplayObject](DisplayObject.md).[rotation](DisplayObject.md#rotation)

#### Defined in

[lib/core/display/DisplayObject.ts:71](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L71)

___

### scaleX

• **scaleX**: `number` = `1`

Indicates the horizontal scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObject](DisplayObject.md).[scaleX](DisplayObject.md#scalex)

#### Defined in

[lib/core/display/DisplayObject.ts:69](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L69)

___

### scaleY

• **scaleY**: `number` = `1`

Indicates the vertical scale (percentage) of the object as applied from the registration point.

#### Inherited from

[DisplayObject](DisplayObject.md).[scaleY](DisplayObject.md#scaley)

#### Defined in

[lib/core/display/DisplayObject.ts:70](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L70)

___

### texture

• **texture**: [`Texture`](Texture.md) = `null`

The current texture object associated to this object.

#### Inherited from

[DisplayObject](DisplayObject.md).[texture](DisplayObject.md#texture)

#### Defined in

[lib/core/display/DisplayObject.ts:62](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L62)

___

### transformOrigin

• **transformOrigin**: [`Point`](../modules.md#point)

The origin point of all object's transformations

#### Inherited from

[DisplayObject](DisplayObject.md).[transformOrigin](DisplayObject.md#transformorigin)

#### Defined in

[lib/core/display/DisplayObject.ts:74](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L74)

___

### visible

• **visible**: `boolean` = `true`

Says wether or not the object is visible

#### Inherited from

[DisplayObject](DisplayObject.md).[visible](DisplayObject.md#visible)

#### Defined in

[lib/core/display/DisplayObject.ts:76](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L76)

___

### width

• **width**: `number` = `0`

Indicates the width of the object, in pixels.

#### Inherited from

[DisplayObject](DisplayObject.md).[width](DisplayObject.md#width)

#### Defined in

[lib/core/display/DisplayObject.ts:72](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L72)

___

### worldMatrix

• **worldMatrix**: `mat2d`

contains the result of object's matrix by world transformation matrix

#### Inherited from

[DisplayObject](DisplayObject.md).[worldMatrix](DisplayObject.md#worldmatrix)

#### Defined in

[lib/core/display/DisplayObject.ts:63](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L63)

___

### worldOpacity

• **worldOpacity**: `number` = `1`

Indicates the result of object's opacity by world's opacity.

#### Inherited from

[DisplayObject](DisplayObject.md).[worldOpacity](DisplayObject.md#worldopacity)

#### Defined in

[lib/core/display/DisplayObject.ts:68](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L68)

___

### x

• **x**: `number` = `0`

Indicates the x coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObject](DisplayObject.md).[x](DisplayObject.md#x)

#### Defined in

[lib/core/display/DisplayObject.ts:65](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L65)

___

### y

• **y**: `number` = `0`

Indicates the y coordinate of the object relative to the local coordinates of its parent.

#### Inherited from

[DisplayObject](DisplayObject.md).[y](DisplayObject.md#y)

#### Defined in

[lib/core/display/DisplayObject.ts:66](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L66)

## Methods

### clearFrames

▸ **clearFrames**(): `void`

Clears every frames.

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:55](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L55)

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

[DisplayObject](DisplayObject.md).[emit](DisplayObject.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### getAnimationLength

▸ **getAnimationLength**(): `number`

#### Returns

`number`

number the animation length (num frames)

#### Defined in

[lib/core/display/Animation.ts:135](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L135)

___

### getCurrentFrameIndex

▸ **getCurrentFrameIndex**(): `number`

#### Returns

`number`

number the current frame index

#### Defined in

[lib/core/display/Animation.ts:149](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L149)

___

### getCurrentFrameTexture

▸ **getCurrentFrameTexture**(): [`Texture`](Texture.md)

Returns the current frame texture if it exists

#### Returns

[`Texture`](Texture.md)

a Texture object or null

#### Defined in

[lib/core/display/Animation.ts:73](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L73)

___

### getFrameTexture

▸ **getFrameTexture**(`frameIndex`): [`Texture`](Texture.md)

Returns the frame texture at a specific index if it exists

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameIndex` | `number` | the specific frame index |

#### Returns

[`Texture`](Texture.md)

a Texture object or null

#### Defined in

[lib/core/display/Animation.ts:88](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L88)

___

### getLastFrameIndex

▸ **getLastFrameIndex**(): `number`

#### Returns

`number`

number The last valid frame index (0-based)

#### Defined in

[lib/core/display/Animation.ts:142](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L142)

___

### getNextDefinedFrameTexture

▸ **getNextDefinedFrameTexture**(`frameIndex`): [`Texture`](Texture.md)

Returns the closest defined frame texture( if it exists)
after the specific frame index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameIndex` | `number` | the specific frame index |

#### Returns

[`Texture`](Texture.md)

a Texture object or null

#### Defined in

[lib/core/display/Animation.ts:114](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L114)

___

### getPreviousDefinedFrameTexture

▸ **getPreviousDefinedFrameTexture**(`frameIndex`): [`Texture`](Texture.md)

Returns the closest defined frame texture( if it exists)
before the specific frame index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameIndex` | `number` | the specific frame index |

#### Returns

[`Texture`](Texture.md)

a Texture object or null

#### Defined in

[lib/core/display/Animation.ts:98](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L98)

___

### goToFrame

▸ **goToFrame**(`frameIndex`): `void`

Go to the specific frame index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameIndex` | `number` | the specific frame index |

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:157](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L157)

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

### play

▸ **play**(): `void`

Plays the animation forward

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:22](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L22)

___

### removeFrameTexture

▸ **removeFrameTexture**(`frameIndex`): `void`

Removes the frame texture at a specific index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameIndex` | `number` | the specific index |

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:128](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L128)

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

[DisplayObject](DisplayObject.md).[render](DisplayObject.md#render)

#### Defined in

[lib/core/display/Animation.ts:43](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L43)

___

### rewind

▸ **rewind**(): `void`

Plays the animation backward

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:30](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L30)

___

### setFrameTexture

▸ **setFrameTexture**(`frameIndex`, `texture`): `void`

Sets the texture for the frame index passed in params

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameIndex` | `number` | the frame index |
| `texture` | [`Texture`](Texture.md) | the texture associated to the frame index |

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:65](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L65)

___

### snapshot

▸ **snapshot**(): `HTMLCanvasElement`

Returns a snapshot of the object

#### Returns

`HTMLCanvasElement`

#### Inherited from

[DisplayObject](DisplayObject.md).[snapshot](DisplayObject.md#snapshot)

#### Defined in

[lib/core/display/DisplayObject.ts:78](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L78)

___

### stop

▸ **stop**(): `void`

Stop the animation

#### Returns

`void`

#### Defined in

[lib/core/display/Animation.ts:38](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L38)

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

[lib/core/display/DisplayObject.ts:99](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L99)

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

[lib/core/display/DisplayObject.ts:128](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L128)

___

### createFromTexturesAndFrames

▸ `Static` **createFromTexturesAndFrames**(`desc`): [`Animation`](Animation.md)

Creates and returns a new Animation from a set of pairs "frame/texture" objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desc` | { `frame`: `number` ; `texture`: [`Texture`](Texture.md)  }[] | an array of frames & textures |

#### Returns

[`Animation`](Animation.md)

Animation object

#### Defined in

[lib/core/display/Animation.ts:176](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Animation.ts#L176)
