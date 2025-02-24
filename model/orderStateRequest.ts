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
* This request pushes the state of an order on GrabFood. 
*/
export class OrderStateRequest {
    /**
    * The merchant\'s ID that is in GrabFood\'s database.
    */
    'merchantID': string;
    /**
    * The merchant\'s ID that is on the partner\'s database.
    */
    'partnerMerchantID'?: string;
    /**
    * The order\'s ID that is returned from GrabFood. Refer to FAQs for more details about [orderID and shortOrderNumber](#section/Order/What\'s-the-difference-between-orderID-and-shortOrderNumber).
    */
    'orderID': string;
    /**
    * The current order state. For takeaway orders, only `DELIVERED` and `CANCELLED` states are pushed.
    */
    'state': OrderStateRequest.StateEnum;
    /**
    * The driver\'s estimated of arrival (ETA) in seconds when the state is `DRIVER_ALLOCATED`.
    */
    'driverETA'?: number | null;
    /**
    * The current order\'s sub-state. This is in free text so you should only use for reference. Grab may use this for troubleshooting. If you want some analysis, kindly use `state` instead.
    */
    'code'?: string;
    /**
    * Additional information to explain the current order state. May be system status or human entered message.
    */
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "partnerMerchantID",
            "baseName": "partnerMerchantID",
            "type": "string"
        },
        {
            "name": "orderID",
            "baseName": "orderID",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "OrderStateRequest.StateEnum"
        },
        {
            "name": "driverETA",
            "baseName": "driverETA",
            "type": "number"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderStateRequest.attributeTypeMap;
    }
}

export namespace OrderStateRequest {
    export enum StateEnum {
        Accepted = <any> 'ACCEPTED',
        DriverAllocated = <any> 'DRIVER_ALLOCATED',
        DriverArrived = <any> 'DRIVER_ARRIVED',
        Collected = <any> 'COLLECTED',
        Delivered = <any> 'DELIVERED',
        Failed = <any> 'FAILED',
        Cancelled = <any> 'CANCELLED',
        UnknownDefaultOpenApi = <any> '11184809'
    }
}
