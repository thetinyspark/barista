[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / IEmitter

# Interface: IEmitter

## Hierarchy

- **`IEmitter`**

  ↳ [`IDisplayObject`](IDisplayObject.md)

## Implemented by

- [`Emitter`](../classes/Emitter.md)

## Table of contents

### Methods

- [emit](IEmitter.md#emit)
- [hasObservers](IEmitter.md#hasobservers)
- [isObserver](IEmitter.md#isobserver)
- [subscribe](IEmitter.md#subscribe)
- [unsubscribe](IEmitter.md#unsubscribe)
- [unsubscribeAll](IEmitter.md#unsubscribeall)

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

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:3

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

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:4

___

### unsubscribeAll

▸ **unsubscribeAll**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/IEmitter.d.ts:5
