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
import { VoucherDescriptionInfo } from './voucherDescriptionInfo';

/**
* A JSON object containing dine-in voucher details.
*/
export class Voucher {
    /**
    * The title of the voucher.
    */
    'title'?: string;
    /**
    * The amount paid after discount is applied in local currency.
    */
    'discountedPrice'?: string;
    /**
    * The original amount before discount is applied in local currency.
    */
    'originalPrice'?: string;
    'descriptionInfo'?: VoucherDescriptionInfo;
    /**
    * The type of the dine-in voucher.
    */
    'voucherType'?: Voucher.VoucherTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "discountedPrice",
            "baseName": "discountedPrice",
            "type": "string"
        },
        {
            "name": "originalPrice",
            "baseName": "originalPrice",
            "type": "string"
        },
        {
            "name": "descriptionInfo",
            "baseName": "descriptionInfo",
            "type": "VoucherDescriptionInfo"
        },
        {
            "name": "voucherType",
            "baseName": "voucherType",
            "type": "Voucher.VoucherTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Voucher.attributeTypeMap;
    }
}

export namespace Voucher {
    export enum VoucherTypeEnum {
        Cash = <any> 'CASH',
        Item = <any> 'ITEM',
        UnknownDefaultOpenApi = <any> '11184809'
    }
}
