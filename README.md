# TypeScript Node API client for GrabFood

## Overview

This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project. By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- App version: 1.1.3
- Package version: 1.0.2
- Generator version: 7.8.0

For more information, please visit https://developer.grab.com

## Installation

```shell
npm install https://github.com/grab/grabfood-api-sdk-node
```

## Usage Example

In the example below, we start by acquiring an OAuth2 access token. In your applications, it's important to handle OAuth2 tokens efficiently. This means:

- Store the received access token once it's obtained.
- Use this stored access token for as long as it's valid.
- Only request a new access token when the current one has expired.

By following these practices, you minimize the number of requests to the server, making your application more efficient and responsive.

You can usually determine the validity of a token by the `expires_in` attribute in the OAuth2 token response.

Below is an example of how to obtain an access token using the `GetOauthGrabApi` class. This class is generated from the `getOauthGrab` operation in the `GetOauthGrabApiService` service. Do note that you only have to run this function once to obtain the access token. Only run it again when the token has expired.

```typescript
import { GetOauthGrabApi, GrabOauthRequest, StgAuthEnv } from "@grab/grabfood-api-sdk/api";

async function getAccessToken(): Promise<string | undefined> {
  const api = new GetOauthGrabApi(StgAuthEnv);
  const request: GrabOauthRequest = {
    client_id: "YOUR_CLIENT_ID",
    client_secret: "YOUR_CLIENT_SECRET",
    grant_type: "client_credentials",
    scope: "food.partner_api",
  };

  try {
    const response = await api.getOauthGrab("application/json", request);
    return "Bearer " + response.body.access_token;
  } catch (error) {
    console.error("Error: ", (error as any)?.body ?? error);
    throw error;
  }
}
```

After obtaining the access token, you can use it to make requests to the GrabFood API. Below is an example of how to use the `CreateCampaignApi` class to create a merchant campaign.

```typescript
import {
  StgEnv,
  CreateCampaignApi,
  CreateCampaignRequest,
  CampaignConditions,
  CampaignDiscount,
  CampaignScope,
} from "@grab/grabfood-api-sdk/api";

async function CreateCampaign(): Promise<void> {
  const api = new CreateCampaignApi(StgEnv);

  const contentType = "application/json";
  const authorization = "Your-Access-Token (Eg:Bearer <Token>)";
  const createCampaignRequest: CreateCampaignRequest = {
    merchantID: "1-CYNGRUNGSBCCC",
    name: "Diskaun 15% dengan pesanan minimum RM1.00",
    quotas: { totalCount: 999, totalCountPerUser: 1 },
    conditions: {
      startTime: new Date("2025-01-15T06:00:00.000Z"),
      endTime: new Date("2025-01-16T09:00:00.000Z"),
      eaterType: CampaignConditions.EaterTypeEnum.All,
      minBasketAmount: 1,
      bundleQuantity: 0,
      workingHour: {
        sun: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
        mon: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
        tue: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
        wed: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
        thu: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
        fri: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
        sat: { periods: [{ startTime: "00:00", endTime: "23:59" }] },
      },
    },
    discount: {
      type: CampaignDiscount.TypeEnum.Percentage,
      cap: 0,
      value: 15,
      scope: { type: CampaignScope.TypeEnum.Order, objectIDs: [] },
    },
    customTag: "",
  };

  try {
    const result = await api.createCampaign(contentType, authorization, createCampaignRequest);
    console.log("Result: ", JSON.stringify(result.body, null, 2));
  } catch (error) {
    console.error("Error: ", (error as any)?.body ?? error);
  }
}
```
