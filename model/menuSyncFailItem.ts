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
import { MenuSyncFailModifierGroup } from './menuSyncFailModifierGroup';

export class MenuSyncFailItem {
    /**
    * The item\'s ID in the partner system. 
    */
    'id'?: string;
    /**
    * An array of strings of error message.
    */
    'errors'?: Array<string>;
    'modifierGroups'?: Array<MenuSyncFailModifierGroup>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>"
        },
        {
            "name": "modifierGroups",
            "baseName": "modifierGroups",
            "type": "Array<MenuSyncFailModifierGroup>"
        }    ];

    static getAttributeTypeMap() {
        return MenuSyncFailItem.attributeTypeMap;
    }
}

