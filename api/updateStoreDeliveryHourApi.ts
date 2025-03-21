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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { UpdateDeliveryHourRequest } from '../model/updateDeliveryHourRequest';
import { UpdateDeliveryHourResponse } from '../model/updateDeliveryHourResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://partner-api.grab.com/grabfood-sandbox';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum UpdateStoreDeliveryHourApiApiKeys {
}

export class UpdateStoreDeliveryHourApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders: { 'User-Agent': 'GrabFood-API-SDK/1.0.2/typescript-node' } = { 'User-Agent': 'GrabFood-API-SDK/1.0.2/typescript-node' };
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: UpdateStoreDeliveryHourApiApiKeys, value: string) {
        (this.authentications as any)[UpdateStoreDeliveryHourApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Update Store Delivery Hours
     * @param contentType The content type of the request body. You must use &#x60;application/json&#x60; for this header as GrabFood API currently does not support other formats.
     * @param authorization Specify the generated authorization token of the bearer type.
     * @param merchantID The merchant\&#39;s ID that is in GrabFood\&#39;s database.
     * @param updateDeliveryHourRequest 
     */
    public async updateStoreDeliveryHour (contentType: string, authorization: string, merchantID: string, updateDeliveryHourRequest: UpdateDeliveryHourRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpdateDeliveryHourResponse;  }> {
        const localVarPath = this.basePath + '/partner/v1/merchants/{merchantID}/store/opening-hours'
            .replace('{' + 'merchantID' + '}', encodeURIComponent(String(merchantID)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'contentType' is not null or undefined
        if (contentType === null || contentType === undefined) {
            throw new Error('Required parameter contentType was null or undefined when calling updateStoreDeliveryHour.');
        }

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling updateStoreDeliveryHour.');
        }

        // verify required parameter 'merchantID' is not null or undefined
        if (merchantID === null || merchantID === undefined) {
            throw new Error('Required parameter merchantID was null or undefined when calling updateStoreDeliveryHour.');
        }

        // verify required parameter 'updateDeliveryHourRequest' is not null or undefined
        if (updateDeliveryHourRequest === null || updateDeliveryHourRequest === undefined) {
            throw new Error('Required parameter updateDeliveryHourRequest was null or undefined when calling updateStoreDeliveryHour.');
        }

        localVarHeaderParams['Content-Type'] = ObjectSerializer.serialize(contentType, "string");
        localVarHeaderParams['Authorization'] = ObjectSerializer.serialize(authorization, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateDeliveryHourRequest, "UpdateDeliveryHourRequest")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: UpdateDeliveryHourResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "UpdateDeliveryHourResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
