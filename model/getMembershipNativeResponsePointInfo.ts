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
* Obtain contains user\'s point details.
*/
export class GetMembershipNativeResponsePointInfo {
    /**
    * Point that user currently obtained.
    */
    'currentPoints'?: number;
    /**
    * Maximum point that user can obtain.
    */
    'maxPoints'?: number;
    /**
    * Points that would get expired in future.
    */
    'expirePoints'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currentPoints",
            "baseName": "currentPoints",
            "type": "number"
        },
        {
            "name": "maxPoints",
            "baseName": "maxPoints",
            "type": "number"
        },
        {
            "name": "expirePoints",
            "baseName": "expirePoints",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetMembershipNativeResponsePointInfo.attributeTypeMap;
    }
}

