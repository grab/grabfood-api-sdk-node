// Copyright 2024 Grabtaxi Holdings PTE LTE (GRAB), All rights reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file

/*
 * GrabFood
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AdvancedPricing } from './advancedPricing';
import { ModifierGroup } from './modifierGroup';
import { Purchasability } from './purchasability';

export class MenuSectionCategoryItem {
    /**
    * The item\'s ID in the partner system. 
    */
    'id': string;
    /**
    * The name of the item.
    */
    'name': string;
    /**
    * Translation of the item name. Only support up to 1 translated language. Refer [Menu Translation](#section/Menu-Translation).
    */
    'nameTranslation'?: { [key: string]: string; };
    /**
    * The status for the item that is in the category. Refer to FAQs for more details about [availableStatus](#section/Menu/What-is-availableStatus).  Note: In order to set an item as \"UNAVAILABLE\", it is required to update both the `availableStatus` and `maxStock` fields, whereby the `maxStock` value should be set to 0. 
    */
    'availableStatus': MenuSectionCategoryItem.AvailableStatusEnum;
    /**
    * The description of the item. There is a custom length limit of 2000 for `VN`. 
    */
    'description'?: string;
    /**
    * Translation of the item description. Only support up to 1 translated language. Refer [Menu Translation](#section/Menu-Translation).
    */
    'descriptionTranslation'?: { [key: string]: string; };
    /**
    * The item\'s price (excluding tax) in minor format. For example: 1900 means $19 with `currency.exponent` as 2. Refer to [FAQ](#section/Menu/Is-the-item-price-with-or-without-tax) for more details. 
    */
    'price': number;
    /**
    * An array string for the item’s image URL links. Refer to FAQs for more details about [images](#section/Menu/What-are-the-recommended-formats-for-an-item-image). 
    */
    'photos'?: Array<string>;
    /**
    * The item\'s special Tag. Refer to FAQs for more details about [specialType](#section/Menu/What\'s-specialType). 
    */
    'specialType'?: MenuSectionCategoryItem.SpecialTypeEnum;
    /**
    * **For Indonesia only.** This field allows the configuration for an item to be marked as tax applicable, and marked item would then be included in a commercial invoice to consumers as per the government\'s regulations. 
    */
    'taxable'?: boolean;
    /**
    * The barcode Number (GTIN). Max 64 allowed. GTIN must be 8, 12, 13, 14 numeric digits. 
    */
    'barcode'?: string;
    /**
    * Available stocks under inventory for this item. Auto reduce when there is order placed for this item. Empty value implies no limit.  Note: It is necessary to set `maxStock` to 0 if the `availableStatus` of the item is \"UNAVAILABLE\". Item will be set to \"AVAILABLE\" if `maxStock` > 0. 
    */
    'maxStock'?: number;
    'advancedPricing'?: AdvancedPricing;
    'purchasability'?: Purchasability;
    /**
    * An array of the modifierGroup JSON objects. Max 30 allowed per item. Refer to [Modifier groups](#modifier-groups) for more information.
    */
    'modifierGroups'?: Array<ModifierGroup>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "nameTranslation",
            "baseName": "nameTranslation",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "availableStatus",
            "baseName": "availableStatus",
            "type": "MenuSectionCategoryItem.AvailableStatusEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "descriptionTranslation",
            "baseName": "descriptionTranslation",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "photos",
            "baseName": "photos",
            "type": "Array<string>"
        },
        {
            "name": "specialType",
            "baseName": "specialType",
            "type": "MenuSectionCategoryItem.SpecialTypeEnum"
        },
        {
            "name": "taxable",
            "baseName": "taxable",
            "type": "boolean"
        },
        {
            "name": "barcode",
            "baseName": "barcode",
            "type": "string"
        },
        {
            "name": "maxStock",
            "baseName": "maxStock",
            "type": "number"
        },
        {
            "name": "advancedPricing",
            "baseName": "advancedPricing",
            "type": "AdvancedPricing"
        },
        {
            "name": "purchasability",
            "baseName": "purchasability",
            "type": "Purchasability"
        },
        {
            "name": "modifierGroups",
            "baseName": "modifierGroups",
            "type": "Array<ModifierGroup>"
        }    ];

    static getAttributeTypeMap() {
        return MenuSectionCategoryItem.attributeTypeMap;
    }
}

export namespace MenuSectionCategoryItem {
    export enum AvailableStatusEnum {
        Available = <any> 'AVAILABLE',
        Unavailable = <any> 'UNAVAILABLE',
        Hide = <any> 'HIDE',
        Unavailabletoday = <any> 'UNAVAILABLETODAY',
        UnknownDefaultOpenApi = <any> '11184809'
    }
    export enum SpecialTypeEnum {
        Alcohol = <any> 'alcohol',
        Empty = <any> '',
        UnknownDefaultOpenApi = <any> '11184809'
    }
}
