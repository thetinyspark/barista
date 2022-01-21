---
title: "Class: BatchDrawCall"
linkTitle: "BatchDrawCall"
slug: "BatchDrawCall"
---

The BatchDrawCall class is the base class to make batches of objects
according to a maximum number of objects per batch.
It is used by the WebGL2DRenderer class.

## Implements

- [`IBatch`](../interfaces/IBatch.md)

## Table of contents

### Constructors

- [constructor](BatchDrawCall.md#constructor)

### Properties

- [full](BatchDrawCall.md#full)
- [objects](BatchDrawCall.md#objects)
- [subBatches](BatchDrawCall.md#subbatches)

### Methods

- [create](BatchDrawCall.md#create)

## Constructors

### constructor

• **new BatchDrawCall**()

## Properties

### full

• **full**: `boolean` = `false`

Tells wether or not this batch is full

#### Defined in

[lib/core/rendering/webgl/batch/BatchDrawCall.ts:41](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchDrawCall.ts#L41)

___

### objects

• **objects**: [`IDisplayObject`](../interfaces/IDisplayObject.md)[] = `[]`

The batch's objects

#### Implementation of

[IBatch](../interfaces/IBatch.md).[objects](../interfaces/IBatch.md#objects)

#### Defined in

[lib/core/rendering/webgl/batch/BatchDrawCall.ts:46](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchDrawCall.ts#L46)

___

### subBatches

• **subBatches**: [`IBatch`](../interfaces/IBatch.md)[] = `[]`

An array of subBatches.
You can use it to develop your
own batching system

#### Implementation of

[IBatch](../interfaces/IBatch.md).[subBatches](../interfaces/IBatch.md#subbatches)

#### Defined in

[lib/core/rendering/webgl/batch/BatchDrawCall.ts:36](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchDrawCall.ts#L36)

## Methods

### create

▸ `Static` **create**(`objects`, `maxObjectsPerBatch`): [`BatchDrawCall`](BatchDrawCall.md)[]

Splits an IDisplayObject Array into batches which contains
a maximum of <maxObjectsPerBatch> per batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects` | [`IDisplayObject`](../interfaces/IDisplayObject.md)[] | IDisplayObject[] an array of IDisplayObjects |
| `maxObjectsPerBatch` | `number` | number maximum objects per batch |

#### Returns

[`BatchDrawCall`](BatchDrawCall.md)[]

#### Defined in

[lib/core/rendering/webgl/batch/BatchDrawCall.ts:18](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchDrawCall.ts#L18)
