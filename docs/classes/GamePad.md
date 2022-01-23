[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / GamePad

# Class: GamePad

## Hierarchy

- [`Emitter`](Emitter.md)

  ↳ **`GamePad`**

## Table of contents

### Constructors

- [constructor](GamePad.md#constructor)

### Properties

- [\_pressed](GamePad.md#_pressed)
- [\_touches](GamePad.md#_touches)

### Methods

- [emit](GamePad.md#emit)
- [getPressedTouches](GamePad.md#getpressedtouches)
- [getTouchByKey](GamePad.md#gettouchbykey)
- [getTouchByValue](GamePad.md#gettouchbyvalue)
- [getTouches](GamePad.md#gettouches)
- [hasObservers](GamePad.md#hasobservers)
- [isObserver](GamePad.md#isobserver)
- [press](GamePad.md#press)
- [release](GamePad.md#release)
- [setTouches](GamePad.md#settouches)
- [subscribe](GamePad.md#subscribe)
- [unsubscribe](GamePad.md#unsubscribe)
- [unsubscribeAll](GamePad.md#unsubscribeall)

## Constructors

### constructor

• **new GamePad**()

#### Inherited from

[Emitter](Emitter.md).[constructor](Emitter.md#constructor)

## Properties

### \_pressed

• `Private` **\_pressed**: [`GamePadTouch`](GamePadTouch.md)[] = `[]`

#### Defined in

[lib/core/controls/GamePad.ts:7](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L7)

___

### \_touches

• `Private` **\_touches**: [`GamePadTouch`](GamePadTouch.md)[] = `[]`

#### Defined in

[lib/core/controls/GamePad.ts:6](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L6)

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

[Emitter](Emitter.md).[emit](Emitter.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### getPressedTouches

▸ **getPressedTouches**(): [`GamePadTouch`](GamePadTouch.md)[]

#### Returns

[`GamePadTouch`](GamePadTouch.md)[]

#### Defined in

[lib/core/controls/GamePad.ts:25](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L25)

___

### getTouchByKey

▸ **getTouchByKey**(`key`): [`GamePadTouch`](GamePadTouch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`GamePadTouch`](GamePadTouch.md)

#### Defined in

[lib/core/controls/GamePad.ts:17](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L17)

___

### getTouchByValue

▸ **getTouchByValue**(`value`): [`GamePadTouch`](GamePadTouch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`GamePadTouch`](GamePadTouch.md)

#### Defined in

[lib/core/controls/GamePad.ts:21](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L21)

___

### getTouches

▸ **getTouches**(): [`GamePadTouch`](GamePadTouch.md)[]

#### Returns

[`GamePadTouch`](GamePadTouch.md)[]

#### Defined in

[lib/core/controls/GamePad.ts:13](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L13)

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

[Emitter](Emitter.md).[hasObservers](Emitter.md#hasobservers)

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

[Emitter](Emitter.md).[isObserver](Emitter.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

___

### press

▸ **press**(`touch`, `timestamp?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `touch` | [`GamePadTouch`](GamePadTouch.md) | `undefined` |
| `timestamp` | `number` | `0` |

#### Returns

`void`

#### Defined in

[lib/core/controls/GamePad.ts:29](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L29)

___

### release

▸ **release**(`touch`, `timestamp?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `touch` | [`GamePadTouch`](GamePadTouch.md) | `undefined` |
| `timestamp` | `number` | `0` |

#### Returns

`number`

#### Defined in

[lib/core/controls/GamePad.ts:37](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L37)

___

### setTouches

▸ **setTouches**(`touches`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `touches` | [`GamePadTouch`](GamePadTouch.md)[] |

#### Returns

`void`

#### Defined in

[lib/core/controls/GamePad.ts:9](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePad.ts#L9)

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

[Emitter](Emitter.md).[subscribe](Emitter.md#subscribe)

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

[Emitter](Emitter.md).[unsubscribe](Emitter.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Inherited from

[Emitter](Emitter.md).[unsubscribeAll](Emitter.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9
