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
* This request pauses a store temporarily for (30 minutes/1 hour/24 hours) or unpauses a store on GrabFood. 
*/
export class PauseStoreRequest {
    /**
    * The merchant\'s ID that is in GrabFood\'s database.
    */
    'merchantID': string;
    /**
    * Boolean value to pause or unpause store.
    */
    'isPause': boolean;
    /**
    * The duration to pause the store. Only required when `isPause=true`.
    */
    'duration'?: PauseStoreRequest.DurationEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "isPause",
            "baseName": "isPause",
            "type": "boolean"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "PauseStoreRequest.DurationEnum"
        }    ];

    static getAttributeTypeMap() {
        return PauseStoreRequest.attributeTypeMap;
    }
}

export namespace PauseStoreRequest {
    export enum DurationEnum {
        _30m = <any> '30m',
        _1h = <any> '1h',
        _24h = <any> '24h',
        UnknownDefaultOpenApi = <any> '11184809'
    }
}
