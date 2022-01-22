[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / MouseControl

# Class: MouseControl

A MouseControl object is used to monitor mouse events which happened on the scene's canvas.
It will map native events to custom events.
It will also remap the original events coordinates into the scene's coordinate system.
And finally, it can detect which DisplayObject is targeted by the event.

## Table of contents

### Constructors

- [constructor](MouseControl.md#constructor)

### Properties

- [\_stage](MouseControl.md#_stage)

### Methods

- [\_getObjectUnderPointRecursive](MouseControl.md#_getobjectunderpointrecursive)
- [\_handler](MouseControl.md#_handler)
- [activate](MouseControl.md#activate)
- [deactivate](MouseControl.md#deactivate)
- [dispatchAt](MouseControl.md#dispatchat)

## Constructors

### constructor

• **new MouseControl**(`stage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`Stage`](Stage.md) |

#### Defined in

[lib/core/controls/MouseControl.ts:15](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L15)

## Properties

### \_stage

• `Private` **\_stage**: [`Stage`](Stage.md)

#### Defined in

[lib/core/controls/MouseControl.ts:13](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L13)

## Methods

### \_getObjectUnderPointRecursive

▸ `Private` **_getObjectUnderPointRecursive**(`x`, `y`, `container`): [`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `container` | [`IDisplayObjectContainer`](../interfaces/IDisplayObjectContainer.md) |

#### Returns

[`IDisplayObject`](../interfaces/IDisplayObject.md)

#### Defined in

[lib/core/controls/MouseControl.ts:57](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L57)

___

### \_handler

▸ `Private` **_handler**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

[lib/core/controls/MouseControl.ts:40](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L40)

___

### activate

▸ **activate**(): `void`

Starts stage monitoring

#### Returns

`void`

#### Defined in

[lib/core/controls/MouseControl.ts:22](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L22)

___

### deactivate

▸ **deactivate**(): `void`

Stops stage monitoring

#### Returns

`void`

#### Defined in

[lib/core/controls/MouseControl.ts:33](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L33)

___

### dispatchAt

▸ **dispatchAt**(`x`, `y`, `type`): `void`

Generates a, event at a specific position on the Stage.
It acts like a virtual mouse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | number The x position of the virtual mouse |
| `y` | `number` | number The y position of the virtual mouse |
| `type` | [`MouseControlEvent`](../enums/MouseControlEvent.md) | The virtual mouse event type |

#### Returns

`void`

#### Defined in

[lib/core/controls/MouseControl.ts:83](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/controls/MouseControl.ts#L83)
