---
title: "Class: Inventory"
linkTitle: "Inventory"
slug: "Inventory"
---

## Table of contents

### Constructors

- [constructor](Inventory.md#constructor)

### Properties

- [\_items](Inventory.md#_items)
- [\_maxItems](Inventory.md#_maxitems)
- [\_maxWeight](Inventory.md#_maxweight)

### Accessors

- [maxItems](Inventory.md#maxitems)
- [maxWeight](Inventory.md#maxweight)
- [numItems](Inventory.md#numitems)
- [remainingSpace](Inventory.md#remainingspace)
- [remainingWeight](Inventory.md#remainingweight)
- [totalWeight](Inventory.md#totalweight)

### Methods

- [add](Inventory.md#add)
- [contains](Inventory.md#contains)
- [getAllByCategory](Inventory.md#getallbycategory)
- [getAllCategories](Inventory.md#getallcategories)
- [getAllGroupByCategory](Inventory.md#getallgroupbycategory)
- [remove](Inventory.md#remove)
- [reset](Inventory.md#reset)

## Constructors

### constructor

• **new Inventory**()

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:9](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L9)

## Properties

### \_items

• `Private` **\_items**: [`IStorable`](../interfaces/IStorable.md)[] = `[]`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:7](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L7)

___

### \_maxItems

• `Private` **\_maxItems**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:6](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L6)

___

### \_maxWeight

• `Private` **\_maxWeight**: `number` = `0`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:5](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L5)

## Accessors

### maxItems

• `get` **maxItems**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:93](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L93)

• `set` **maxItems**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:97](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L97)

___

### maxWeight

• `get` **maxWeight**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:85](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L85)

• `set` **maxWeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:89](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L89)

___

### numItems

• `get` **numItems**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:77](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L77)

___

### remainingSpace

• `get` **remainingSpace**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:65](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L65)

___

### remainingWeight

• `get` **remainingWeight**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:81](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L81)

___

### totalWeight

• `get` **totalWeight**(): `number`

#### Returns

`number`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:69](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L69)

## Methods

### add

▸ **add**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IStorable`](../interfaces/IStorable.md) |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:19](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L19)

___

### contains

▸ **contains**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IStorable`](../interfaces/IStorable.md) |

#### Returns

`boolean`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:61](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L61)

___

### getAllByCategory

▸ **getAllByCategory**(`category`): [`IStorable`](../interfaces/IStorable.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | `string` |

#### Returns

[`IStorable`](../interfaces/IStorable.md)[]

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:28](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L28)

___

### getAllCategories

▸ **getAllCategories**(): `string`[]

#### Returns

`string`[]

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:36](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L36)

___

### getAllGroupByCategory

▸ **getAllGroupByCategory**(): { `category`: `string` ; `items`: [`IStorable`](../interfaces/IStorable.md)[]  }[]

#### Returns

{ `category`: `string` ; `items`: [`IStorable`](../interfaces/IStorable.md)[]  }[]

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:42](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L42)

___

### remove

▸ **remove**(`item`): [`IStorable`](../interfaces/IStorable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IStorable`](../interfaces/IStorable.md) |

#### Returns

[`IStorable`](../interfaces/IStorable.md)

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:51](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L51)

___

### reset

▸ **reset**(`maxItems`, `maxWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxItems` | `number` |
| `maxWeight` | `number` |

#### Returns

`void`

#### Defined in

[lib/sdk/common/model/space/storage/Inventory.ts:13](https://github.com/thetinyspark/barista/blob/e2c447e4/lib/sdk/common/model/space/storage/Inventory.ts#L13)
