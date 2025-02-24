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

/**
* A JSON object containing dine-in voucher details.
*/
export class RedeemResult {
    /**
    * To indicate whether the dine-in voucher redemption succeeded.
    */
    'success'?: boolean;
    /**
    * The code for the reason of failed redemption. Empty if the `success` is true.  * `VOUCHER_REDEEMED` - The voucher has already been redeemed. * `INVALID_STATE` - The current status of voucher is EXPIRED or REFUNDED. * `REDEEM_FAILED` - Internal service error. * `INVALID_MERCHANT` - Voucher not applicable for this merchant. * `INVALID_ID` - Invalid certificateID. 
    */
    'code'?: RedeemResult.CodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "RedeemResult.CodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return RedeemResult.attributeTypeMap;
    }
}

export namespace RedeemResult {
    export enum CodeEnum {
        VoucherRedeemed = <any> 'VOUCHER_REDEEMED',
        InvalidState = <any> 'INVALID_STATE',
        RedeemFailed = <any> 'REDEEM_FAILED',
        InvalidMerchant = <any> 'INVALID_MERCHANT',
        InvalidId = <any> 'INVALID_ID',
        Empty = <any> '',
        UnknownDefaultOpenApi = <any> '11184809'
    }
}
