[@thetinyspark/moocaccino-barista](../README.md) / [Exports](../modules.md) / IFilter

# Interface: IFilter

An IFilter object is used to apply specific filter on a DisplayObject instance

## Table of contents

### Methods

- [apply](IFilter.md#apply)
- [rollback](IFilter.md#rollback)
- [save](IFilter.md#save)

## Methods

### apply

▸ **apply**(`child`): `void`

Applies filter to the current DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) | DisplayObject |

#### Returns

`void`

#### Defined in

[lib/core/filters/IFilter.ts:16](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/filters/IFilter.ts#L16)

___

### rollback

▸ **rollback**(`child`): `void`

Make the DisplayObject comes back to the last saved state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) | DisplayObject |

#### Returns

`void`

#### Defined in

[lib/core/filters/IFilter.ts:22](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/filters/IFilter.ts#L22)

___

### save

▸ **save**(`child`): `void`

Saves the current DisplayObject state before filtering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`IDisplayObject`](IDisplayObject.md) | DisplayObject |

#### Returns

`void`

#### Defined in

[lib/core/filters/IFilter.ts:10](https://github.com/thetinyspark/barista/blob/93f33857/lib/core/filters/IFilter.ts#L10)
