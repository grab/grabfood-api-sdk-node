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
import { CancelOrderLimitType } from './cancelOrderLimitType';

/**
* 
*/
export class CancelOrderResponse {
    'limitType'?: CancelOrderLimitType;
    /**
    * The remaining cancellation quota for the merchant. A value is only returned when the nearest remaining cancellation limit is approaching, else it returns 0.
    */
    'limitTimes'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limitType",
            "baseName": "limitType",
            "type": "CancelOrderLimitType"
        },
        {
            "name": "limitTimes",
            "baseName": "limitTimes",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CancelOrderResponse.attributeTypeMap;
    }
}

export namespace CancelOrderResponse {
}
