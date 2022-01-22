[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Emitter

# Class: Emitter

## Hierarchy

- **`Emitter`**

  ↳ [`AssetsManager`](AssetsManager.md)

  ↳ [`GamePad`](GamePad.md)

  ↳ [`DisplayObject`](DisplayObject.md)

## Implements

- [`IEmitter`](../interfaces/IEmitter.md)

## Table of contents

### Constructors

- [constructor](Emitter.md#constructor)

### Properties

- [\_observers](Emitter.md#_observers)

### Methods

- [emit](Emitter.md#emit)
- [hasObservers](Emitter.md#hasobservers)
- [isObserver](Emitter.md#isobserver)
- [subscribe](Emitter.md#subscribe)
- [unsubscribe](Emitter.md#unsubscribe)
- [unsubscribeAll](Emitter.md#unsubscribeall)

## Constructors

### constructor

• **new Emitter**()

## Properties

### \_observers

• `Private` **\_observers**: `any`

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:3

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

#### Implementation of

[IEmitter](../interfaces/IEmitter.md).[emit](../interfaces/IEmitter.md#emit)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:4

___

### hasObservers

▸ **hasObservers**(`eventType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventType` | `string` |

#### Returns

`boolean`

#### Implementation of

[IEmitter](../interfaces/IEmitter.md).[hasObservers](../interfaces/IEmitter.md#hasobservers)

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

#### Implementation of

[IEmitter](../interfaces/IEmitter.md).[isObserver](../interfaces/IEmitter.md#isobserver)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:7

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

#### Implementation of

[IEmitter](../interfaces/IEmitter.md).[subscribe](../interfaces/IEmitter.md#subscribe)

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

#### Implementation of

[IEmitter](../interfaces/IEmitter.md).[unsubscribe](../interfaces/IEmitter.md#unsubscribe)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:6

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Implementation of

[IEmitter](../interfaces/IEmitter.md).[unsubscribeAll](../interfaces/IEmitter.md#unsubscribeall)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.d.ts:9
