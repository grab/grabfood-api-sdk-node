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
* Information about the GrabFood client getting an OAuth 2.0 access token from partners. 
*/
export class GrabOauthRequest {
    /**
    * The client identifier issued to the client to obtain the OAuth 2.0 access_token.
    */
    'client_id': string;
    /**
    * The client secret issued to the client to obtain the OAuth 2.0 access_token.
    */
    'client_secret': string;
    /**
    * The grant type for the client to obtain the OAuth 2.0 access_token.
    */
    'grant_type': string;
    /**
    * The scope for the client to obtain the OAuth 2.0 access_token.
    */
    'scope': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "client_id",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "client_secret",
            "baseName": "client_secret",
            "type": "string"
        },
        {
            "name": "grant_type",
            "baseName": "grant_type",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GrabOauthRequest.attributeTypeMap;
    }
}

