[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Notification

# Class: Notification

## Implements

- [`INotification`](../interfaces/INotification.md)

## Table of contents

### Constructors

- [constructor](Notification.md#constructor)

### Properties

- [\_emitter](Notification.md#_emitter)
- [\_payload](Notification.md#_payload)
- [\_type](Notification.md#_type)

### Methods

- [getEmitter](Notification.md#getemitter)
- [getEventType](Notification.md#geteventtype)
- [getPayload](Notification.md#getpayload)

## Constructors

### constructor

• **new Notification**(`type`, `emitter`, `payload`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `emitter` | [`IEmitter`](../interfaces/IEmitter.md) |
| `payload` | `any` |

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:7

## Properties

### \_emitter

• `Private` **\_emitter**: `any`

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:5

___

### \_payload

• `Private` **\_payload**: `any`

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:6

___

### \_type

• `Private` **\_type**: `any`

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:4

## Methods

### getEmitter

▸ **getEmitter**(): [`IEmitter`](../interfaces/IEmitter.md)

#### Returns

[`IEmitter`](../interfaces/IEmitter.md)

#### Implementation of

[INotification](../interfaces/INotification.md).[getEmitter](../interfaces/INotification.md#getemitter)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:9

___

### getEventType

▸ **getEventType**(): `string`

#### Returns

`string`

#### Implementation of

[INotification](../interfaces/INotification.md).[getEventType](../interfaces/INotification.md#geteventtype)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:8

___

### getPayload

▸ **getPayload**(): `any`

#### Returns

`any`

#### Implementation of

[INotification](../interfaces/INotification.md).[getPayload](../interfaces/INotification.md#getpayload)

#### Defined in

node_modules/@thetinyspark/tiny-observer/dist/event/Notification.d.ts:10
