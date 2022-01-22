[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / IBatch

# Interface: IBatch

Base interface for describing an object batch

## Implemented by

- [`BatchDrawCall`](../classes/BatchDrawCall.md)
- [`BatchTexture`](../classes/BatchTexture.md)

## Table of contents

### Properties

- [objects](IBatch.md#objects)
- [subBatches](IBatch.md#subbatches)

## Properties

### objects

• **objects**: [`IDisplayObject`](IDisplayObject.md)[]

The batch's objects

#### Defined in

[lib/core/rendering/webgl/batch/IBatch.ts:9](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/batch/IBatch.ts#L9)

___

### subBatches

• **subBatches**: [`IBatch`](IBatch.md)[]

An array of subBatches.
You can use it to develop your
own batching system

#### Defined in

[lib/core/rendering/webgl/batch/IBatch.ts:15](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/core/rendering/webgl/batch/IBatch.ts#L15)
