[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / Grid3D

# Class: Grid3D<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Grid3D.md#constructor)

### Properties

- [\_map](Grid3D.md#_map)
- [\_numCols](Grid3D.md#_numcols)
- [\_numLayers](Grid3D.md#_numlayers)
- [\_numRows](Grid3D.md#_numrows)

### Accessors

- [data](Grid3D.md#data)
- [numCols](Grid3D.md#numcols)
- [numLayers](Grid3D.md#numlayers)
- [numRows](Grid3D.md#numrows)

### Methods

- [addAt](Grid3D.md#addat)
- [destroy](Grid3D.md#destroy)
- [extract](Grid3D.md#extract)
- [forEach](Grid3D.md#foreach)
- [getAt](Grid3D.md#getat)
- [getBack](Grid3D.md#getback)
- [getBottom](Grid3D.md#getbottom)
- [getBottomBack](Grid3D.md#getbottomback)
- [getBottomFront](Grid3D.md#getbottomfront)
- [getBottomLeft](Grid3D.md#getbottomleft)
- [getBottomLeftBack](Grid3D.md#getbottomleftback)
- [getBottomLeftFront](Grid3D.md#getbottomleftfront)
- [getBottomRight](Grid3D.md#getbottomright)
- [getBottomRightBack](Grid3D.md#getbottomrightback)
- [getBottomRightFront](Grid3D.md#getbottomrightfront)
- [getFront](Grid3D.md#getfront)
- [getLeft](Grid3D.md#getleft)
- [getLeftBack](Grid3D.md#getleftback)
- [getLeftFront](Grid3D.md#getleftfront)
- [getNeighbours](Grid3D.md#getneighbours)
- [getRight](Grid3D.md#getright)
- [getRightBack](Grid3D.md#getrightback)
- [getRightFront](Grid3D.md#getrightfront)
- [getTop](Grid3D.md#gettop)
- [getTopBack](Grid3D.md#gettopback)
- [getTopFront](Grid3D.md#gettopfront)
- [getTopLeft](Grid3D.md#gettopleft)
- [getTopLeftBack](Grid3D.md#gettopleftback)
- [getTopLeftFront](Grid3D.md#gettopleftfront)
- [getTopRight](Grid3D.md#gettopright)
- [getTopRightBack](Grid3D.md#gettoprightback)
- [getTopRightFront](Grid3D.md#gettoprightfront)
- [isOutOfBounds](Grid3D.md#isoutofbounds)
- [map](Grid3D.md#map)
- [removeAt](Grid3D.md#removeat)
- [reset](Grid3D.md#reset)
- [from](Grid3D.md#from)

## Constructors

### constructor

• **new Grid3D**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:7](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L7)

## Properties

### \_map

• `Protected` **\_map**: `T`[][][] = `[]`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:2](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L2)

___

### \_numCols

• `Private` **\_numCols**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:4](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L4)

___

### \_numLayers

• `Private` **\_numLayers**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:5](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L5)

___

### \_numRows

• `Private` **\_numRows**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:3](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L3)

## Accessors

### data

• `get` **data**(): `T`[][][]

#### Returns

`T`[][][]

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:316](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L316)

___

### numCols

• `get` **numCols**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:310](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L310)

___

### numLayers

• `get` **numLayers**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:307](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L307)

___

### numRows

• `get` **numRows**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:313](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L313)

## Methods

### addAt

▸ **addAt**(`row`, `col`, `layer`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:44](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L44)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:31](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L31)

___

### extract

▸ **extract**(`fromRow`, `toRow`, `fromCol`, `toCol`, `fromLayer`, `toLayer`): [`Grid3D`](Grid3D.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromRow` | `number` |
| `toRow` | `number` |
| `fromCol` | `number` |
| `toCol` | `number` |
| `fromLayer` | `number` |
| `toLayer` | `number` |

#### Returns

[`Grid3D`](Grid3D.md)<`T`\>

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:262](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L262)

___

### forEach

▸ **forEach**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`value`: `T`, `row`: `number`, `col`: `number`, `layer`: `number`) => `void` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:67](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L67)

___

### getAt

▸ **getAt**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:38](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L38)

___

### getBack

▸ **getBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:178](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L178)

___

### getBottom

▸ **getBottom**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:222](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L222)

___

### getBottomBack

▸ **getBottomBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:190](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L190)

___

### getBottomFront

▸ **getBottomFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:150](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L150)

___

### getBottomLeft

▸ **getBottomLeft**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:226](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L226)

___

### getBottomLeftBack

▸ **getBottomLeftBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:194](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L194)

___

### getBottomLeftFront

▸ **getBottomLeftFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:154](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L154)

___

### getBottomRight

▸ **getBottomRight**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:230](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L230)

___

### getBottomRightBack

▸ **getBottomRightBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:198](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L198)

___

### getBottomRightFront

▸ **getBottomRightFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:158](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L158)

___

### getFront

▸ **getFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:174](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L174)

___

### getLeft

▸ **getLeft**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:214](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L214)

___

### getLeftBack

▸ **getLeftBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:182](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L182)

___

### getLeftFront

▸ **getLeftFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:142](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L142)

___

### getNeighbours

▸ **getNeighbours**(`row`, `col`, `layer`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bottom` | `T` |
| `bottomBack` | `T` |
| `bottomFront` | `T` |
| `bottomLeft` | `T` |
| `bottomLeftBack` | `T` |
| `bottomLeftFront` | `T` |
| `bottomRight` | `T` |
| `bottomRightBack` | `T` |
| `bottomRightFront` | `T` |
| `center` | `T` |
| `centerBack` | `T` |
| `centerFront` | `T` |
| `left` | `T` |
| `leftBack` | `T` |
| `leftFront` | `T` |
| `right` | `T` |
| `rightBack` | `T` |
| `rightFront` | `T` |
| `top` | `T` |
| `topBack` | `T` |
| `topFront` | `T` |
| `topLeft` | `T` |
| `topLeftBack` | `T` |
| `topLeftFront` | `T` |
| `topRight` | `T` |
| `topRightBack` | `T` |
| `topRightFront` | `T` |

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:78](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L78)

___

### getRight

▸ **getRight**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:218](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L218)

___

### getRightBack

▸ **getRightBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:186](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L186)

___

### getRightFront

▸ **getRightFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:146](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L146)

___

### getTop

▸ **getTop**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:234](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L234)

___

### getTopBack

▸ **getTopBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:202](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L202)

___

### getTopFront

▸ **getTopFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:162](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L162)

___

### getTopLeft

▸ **getTopLeft**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:238](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L238)

___

### getTopLeftBack

▸ **getTopLeftBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:206](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L206)

___

### getTopLeftFront

▸ **getTopLeftFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:166](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L166)

___

### getTopRight

▸ **getTopRight**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:242](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L242)

___

### getTopRightBack

▸ **getTopRightBack**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:210](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L210)

___

### getTopRightFront

▸ **getTopRightFront**(`row`, `col`, `layer`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`T`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:170](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L170)

___

### isOutOfBounds

▸ **isOutOfBounds**(`row`, `col`, `layer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:56](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L56)

___

### map

▸ **map**<`U`\>(`func`): [`Grid3D`](Grid3D.md)<`U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`value`: `T`, `row`: `number`, `col`: `number`, `layer`: `number`) => `U` |

#### Returns

[`Grid3D`](Grid3D.md)<`U`\>

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:246](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L246)

___

### removeAt

▸ **removeAt**(`row`, `col`, `layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `number` |
| `col` | `number` |
| `layer` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:50](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L50)

___

### reset

▸ **reset**(`rows`, `cols`, `layers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `cols` | `number` |
| `layers` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:9](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L9)

___

### from

▸ `Static` **from**<`T`\>(`data`): [`Grid3D`](Grid3D.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T`[][][] |

#### Returns

[`Grid3D`](Grid3D.md)<`T`\>

#### Defined in

[lib/sdk/common/model/space/partitioning/grid/Grid3D.ts:287](https://github.com/thetinyspark/barista/blob/f0ed0f6e/lib/sdk/common/model/space/partitioning/grid/Grid3D.ts#L287)
