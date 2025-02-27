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
import { Address } from './address';

/**
* A JSON object containing the receiver information. Only applicable for orders that are delivered by the restaurant. `null` if not applicable.
*/
export class Receiver {
    /**
    * The name of the receiver.
    */
    'name'?: string;
    /**
    * The receiver\'s phone number.
    */
    'phones'?: string;
    'address'?: Address;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phones",
            "baseName": "phones",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        }    ];

    static getAttributeTypeMap() {
        return Receiver.attributeTypeMap;
    }
}

