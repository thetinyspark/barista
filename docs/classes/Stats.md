[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Stats

# Class: Stats

The Stats class is a basic frame counter.
It supports basic functionality like start, stop, getFps
```typescript
import {Stage, Stats} from "@thetinyspark/moocaccino-barista";
// Create stage instance
const stage:Stage = new Stage();
// Defines renderer canvas width & height
stage.getRenderer().getCanvas().width = stage.width = 1024;
stage.getRenderer().getCanvas().height = stage.height = 1024;
```
```typescript
// Create and add stats object
const stats:Stats = new Stats();
stats.x = stats.y = 0;
stats.width = 100;
stats.height = 30;
stage.addChild(stats);
```
```typescript
// render loop
function render():void{
  stage.nextFrame();
  window.requestAnimation(render);
}
render();
```

## Hierarchy

- [`DisplayObject`](DisplayObject.md)

  ↳ **`Stats`**

## Table of contents

### Constructors

- [constructor](Stats.md#constructor)

### Properties

- [\_context](Stats.md#_context)
- [\_elapsedTime](Stats.md#_elapsedtime)
- [\_lastFrameTime](Stats.md#_lastframetime)
- [\_monitoring](Stats.md#_monitoring)
- [\_stage](Stats.md#_stage)
- [filters](Stats.md#filters)
- [height](Stats.md#height)
- [matrix](Stats.md#matrix)
- [opacity](Stats.md#opacity)
- [parent](Stats.md#parent)
- [rotation](Stats.md#rotation)
- [scaleX](Stats.md#scalex)
- [scaleY](Stats.md#scaley)
- [texture](Stats.md#texture)
- [transformOrigin](Stats.md#transformorigin)
- [visible](Stats.md#visible)
- [width](Stats.md#width)
- [worldMatrix](Stats.md#worldmatrix)
- [worldOpacity](Stats.md#worldopacity)
- [x](Stats.md#x)
- [y](Stats.md#y)

### Methods

- [\_enterFrame](Stats.md#_enterframe)
- [emit](Stats.md#emit)
- [getFps](Stats.md#getfps)
- [getStage](Stats.md#getstage)
- [hasObservers](Stats.md#hasobservers)
- [isObserver](Stats.md#isobserver)
- [render](Stats.md#render)
- [setStage](Stats.md#setstage)
- [snapshot](Stats.md#snapshot)
- [start](Stats.md#start)
- [stop](Stats.md#stop)
- [subscribe](Stats.md#subscribe)
- [unsubscribe](Stats.md#unsubscribe)
- [unsubscribeAll](Stats.md#unsubscribeall)
- [update](Stats.md#update)
- [createFromTexture](Stats.md#createfromtexture)

## Constructors

### constructor

• **new Stats**()

#### Overrides

[DisplayObject](DisplayObject.md).[constructor](DisplayObject.md#constructor)

#### Defined in

[lib/core/display/Stats.ts:42](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L42)

## Properties

### \_context

• `Private` **\_context**: `CanvasRenderingContext2D`

#### Defined in

[lib/core/display/Stats.ts:40](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L40)

___

### \_elapsedTime

• `Private` **\_elapsedTime**: `number` = `0`

#### Defined in

[lib/core/display/Stats.ts:39](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L39)

___

### \_lastFrameTime

• `Private` **\_lastFrameTime**: `number` = `0`

#### Defined in

[lib/core/display/Stats.ts:37](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L37)

___

### \_monitoring

• `Private` **\_monitoring**: `boolean` = `false`

#### Defined in

[lib/core/display/Stats.ts:38](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L38)

___

### \_stage

• `Private` **\_stage**: [`Stage`](Stage.md) = `null`

#### Defined in

[lib/core/display/Stats.ts:36](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L36)

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

### \_enterFrame

▸ `Private` **_enterFrame**(`notification`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `notification` | [`INotification`](../interfaces/INotification.md) |

#### Returns

`void`

#### Defined in

[lib/core/display/Stats.ts:106](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L106)

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

### getFps

▸ **getFps**(): `number`

Returns the current FPS (frame per second) of the monitored stage.

#### Returns

`number`

number

#### Defined in

[lib/core/display/Stats.ts:101](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L101)

___

### getStage

▸ **getStage**(): [`Stage`](Stage.md)

Returns the stage object which is monitored by Stats instance

#### Returns

[`Stage`](Stage.md)

Stage object

#### Defined in

[lib/core/display/Stats.ts:64](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L64)

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

[lib/core/display/DisplayObject.ts:117](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/DisplayObject.ts#L117)

___

### setStage

▸ **setStage**(`value`): `void`

Sets the stage object which will be monitored by Stats instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Stage`](Stage.md) | Stage object |

#### Returns

`void`

#### Defined in

[lib/core/display/Stats.ts:72](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L72)

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

### start

▸ **start**(): `void`

Starts monitoring the stage

#### Returns

`void`

#### Defined in

[lib/core/display/Stats.ts:80](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L80)

___

### stop

▸ **stop**(): `void`

Stops monitoring the stage

#### Returns

`void`

#### Defined in

[lib/core/display/Stats.ts:90](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/display/Stats.ts#L90)

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
