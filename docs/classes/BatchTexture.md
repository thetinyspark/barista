---
title: "Class: BatchTexture"
linkTitle: "BatchTexture"
slug: "BatchTexture"
---

The BatchTexture class is the base class to make batches of objects
according to a maximum number of TextureData (or texture units) per batch.
It is used by the WebGL2DRenderer class.

## Implements

- [`IBatch`](../interfaces/IBatch.md)

## Table of contents

### Constructors

- [constructor](BatchTexture.md#constructor)

### Properties

- [datas](BatchTexture.md#datas)
- [objects](BatchTexture.md#objects)
- [subBatches](BatchTexture.md#subbatches)
- [uids](BatchTexture.md#uids)

### Methods

- [create](BatchTexture.md#create)

## Constructors

### constructor

• **new BatchTexture**()

## Properties

### datas

• **datas**: `Set`<[`TextureData`](TextureData.md)\>

TextureData objects

#### Defined in

[lib/core/rendering/webgl/batch/BatchTexture.ts:58](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchTexture.ts#L58)

___

### objects

• **objects**: [`IDisplayObject`](../interfaces/IDisplayObject.md)[] = `[]`

The batch's objects

#### Implementation of

[IBatch](../interfaces/IBatch.md).[objects](../interfaces/IBatch.md#objects)

#### Defined in

[lib/core/rendering/webgl/batch/BatchTexture.ts:50](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchTexture.ts#L50)

___

### subBatches

• **subBatches**: [`IBatch`](../interfaces/IBatch.md)[] = `[]`

An array of subBatches.
You can use it to develop your
own batching system

#### Implementation of

[IBatch](../interfaces/IBatch.md).[subBatches](../interfaces/IBatch.md#subbatches)

#### Defined in

[lib/core/rendering/webgl/batch/BatchTexture.ts:46](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchTexture.ts#L46)

___

### uids

• **uids**: `Set`<`string`\>

TextureData objects uids

#### Defined in

[lib/core/rendering/webgl/batch/BatchTexture.ts:54](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchTexture.ts#L54)

## Methods

### create

▸ `Static` **create**(`objects`, `maxTexturesPerBatch`): [`BatchTexture`](BatchTexture.md)[]

Splits an IDisplayObject Array into batches which contains
a maximum of <maxTexturesPerBatch> per batch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects` | [`IDisplayObject`](../interfaces/IDisplayObject.md)[] | IDisplayObject[] an array of IDisplayObjects |
| `maxTexturesPerBatch` | `number` | - |

#### Returns

[`BatchTexture`](BatchTexture.md)[]

#### Defined in

[lib/core/rendering/webgl/batch/BatchTexture.ts:19](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/core/rendering/webgl/batch/BatchTexture.ts#L19)
