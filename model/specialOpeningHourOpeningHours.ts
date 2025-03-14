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
import { OpenPeriod } from './openPeriod';

/**
* Store special opening hour period.
*/
export class SpecialOpeningHourOpeningHours {
    /**
    * The period type for when the outlet is open.
    */
    'openPeriodType'?: SpecialOpeningHourOpeningHours.OpenPeriodTypeEnum;
    /**
    * An array of open periods. Maximum of 3 periods.
    */
    'periods'?: Array<OpenPeriod>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "openPeriodType",
            "baseName": "openPeriodType",
            "type": "SpecialOpeningHourOpeningHours.OpenPeriodTypeEnum"
        },
        {
            "name": "periods",
            "baseName": "periods",
            "type": "Array<OpenPeriod>"
        }    ];

    static getAttributeTypeMap() {
        return SpecialOpeningHourOpeningHours.attributeTypeMap;
    }
}

export namespace SpecialOpeningHourOpeningHours {
    export enum OpenPeriodTypeEnum {
        Period = <any> 'Period',
        OpenAllDay = <any> 'OpenAllDay',
        ClosedAllDay = <any> 'ClosedAllDay',
        UnknownDefaultOpenApi = <any> '11184809'
    }
}
