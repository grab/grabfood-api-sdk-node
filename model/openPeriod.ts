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

export class OpenPeriod {
    /**
    * The open start time in 24h format. Local time format is expected.
    */
    'startTime': string;
    /**
    * The open end time in 24h format. Local time format is expected.
    */
    'endTime': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OpenPeriod.attributeTypeMap;
    }
}

