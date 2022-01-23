[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / GamePadTouch

# Class: GamePadTouch

## Table of contents

### Constructors

- [constructor](GamePadTouch.md#constructor)

### Properties

- [\_pressing](GamePadTouch.md#_pressing)
- [\_timestamp](GamePadTouch.md#_timestamp)
- [key](GamePadTouch.md#key)
- [value](GamePadTouch.md#value)

### Accessors

- [pressing](GamePadTouch.md#pressing)

### Methods

- [getElapsedTime](GamePadTouch.md#getelapsedtime)
- [press](GamePadTouch.md#press)
- [release](GamePadTouch.md#release)

## Constructors

### constructor

• **new GamePadTouch**(`key?`, `value?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `''` |
| `value` | `string` | `''` |

#### Defined in

[lib/core/controls/GamePadTouch.ts:8](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L8)

## Properties

### \_pressing

• `Private` **\_pressing**: `boolean` = `false`

#### Defined in

[lib/core/controls/GamePadTouch.ts:2](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L2)

___

### \_timestamp

• `Private` **\_timestamp**: `number` = `0`

#### Defined in

[lib/core/controls/GamePadTouch.ts:3](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L3)

___

### key

• **key**: `string`

#### Defined in

[lib/core/controls/GamePadTouch.ts:6](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L6)

___

### value

• **value**: `string`

#### Defined in

[lib/core/controls/GamePadTouch.ts:5](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L5)

## Accessors

### pressing

• `get` **pressing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/core/controls/GamePadTouch.ts:13](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L13)

## Methods

### getElapsedTime

▸ **getElapsedTime**(`timestamp?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timestamp` | `number` | `0` |

#### Returns

`number`

#### Defined in

[lib/core/controls/GamePadTouch.ts:17](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L17)

___

### press

▸ **press**(`timestamp?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timestamp` | `number` | `0` |

#### Returns

`void`

#### Defined in

[lib/core/controls/GamePadTouch.ts:27](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L27)

___

### release

▸ **release**(`timestamp?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `timestamp` | `number` | `0` |

#### Returns

`number`

#### Defined in

[lib/core/controls/GamePadTouch.ts:21](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/controls/GamePadTouch.ts#L21)
