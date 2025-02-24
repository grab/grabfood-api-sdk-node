import localVarRequest from 'request';

export * from './acceptOrderRequest';
export * from './address';
export * from './advancedPricing';
export * from './batchUpdateMenuItem';
export * from './batchUpdateMenuResponse';
export * from './bindMembershipNativeRequest';
export * from './bindMembershipNativeResponse';
export * from './campaign';
export * from './campaignConditions';
export * from './campaignDiscount';
export * from './campaignQuotas';
export * from './campaignScope';
export * from './cancelCode';
export * from './cancelOrderLimitType';
export * from './cancelOrderRequest';
export * from './cancelOrderResponse';
export * from './cancelReason';
export * from './checkOrderCancelableResponse';
export * from './coordinates';
export * from './createCampaignRequest';
export * from './createCampaignResponse';
export * from './createSelfServeJourneyRequest';
export * from './createSelfServeJourneyRequestPartner';
export * from './createSelfServeJourneyResponse';
export * from './currency';
export * from './dineIn';
export * from './editOrderItem';
export * from './editOrderRequest';
export * from './getDineInVoucherResponse';
export * from './getMembershipNativeResponse';
export * from './getMembershipNativeResponsePointInfo';
export * from './getMembershipRequest';
export * from './getMembershipWebviewResponse';
export * from './getMenuNewResponse';
export * from './getMenuOldResponse';
export * from './getRewardNativeRequest';
export * from './getRewardNativeResponse';
export * from './grabOauthRequest';
export * from './grabOauthResponse';
export * from './listCampaignResponse';
export * from './listOrdersResponse';
export * from './markOrderRequest';
export * from './menuCategory';
export * from './menuEntity';
export * from './menuEntityError';
export * from './menuItem';
export * from './menuModifier';
export * from './menuSection';
export * from './menuSectionCategory';
export * from './menuSectionCategoryItem';
export * from './menuSyncFail';
export * from './menuSyncFailCategory';
export * from './menuSyncFailItem';
export * from './menuSyncFailModifier';
export * from './menuSyncFailModifierGroup';
export * from './menuSyncFailServiceHours';
export * from './menuSyncResponse';
export * from './menuSyncWebhookRequest';
export * from './modelError';
export * from './modifierGroup';
export * from './newOrderTimeRequest';
export * from './notifyMembershipWebviewRequest';
export * from './openPeriod';
export * from './order';
export * from './orderCampaign';
export * from './orderDeliveryRequest';
export * from './orderFeatureFlags';
export * from './orderFreeItem';
export * from './orderItem';
export * from './orderItemModifier';
export * from './orderPrice';
export * from './orderPromo';
export * from './orderReadyEstimation';
export * from './orderStateRequest';
export * from './outOfStockInstruction';
export * from './partnerOauthRequest';
export * from './partnerOauthResponse';
export * from './pauseStoreRequest';
export * from './purchasability';
export * from './pushIntegrationStatusWebhookRequest';
export * from './receiver';
export * from './redeemDineInVoucherRequest';
export * from './redeemDineInVoucherResponse';
export * from './redeemResult';
export * from './registerMembershipNativeRequest';
export * from './registerMembershipNativeResponse';
export * from './rewardItem';
export * from './sellingTime';
export * from './serviceHour';
export * from './serviceHours';
export * from './specialOpeningHour';
export * from './specialOpeningHourMetadata';
export * from './specialOpeningHourOpeningHours';
export * from './storeHour';
export * from './storeHourResponse';
export * from './storeStatusResponse';
export * from './submitOrderRequest';
export * from './unbindMembershipNativeRequest';
export * from './unlinkMembershipWebviewRequest';
export * from './updateAdvancedPricing';
export * from './updateCampaignRequest';
export * from './updateDeliveryHourRequest';
export * from './updateDeliveryHourResponse';
export * from './updateDineInHourRequest';
export * from './updateDineInHourResponse';
export * from './updateMenuItem';
export * from './updateMenuModifier';
export * from './updateMenuNotifRequest';
export * from './updateMenuRequest';
export * from './updatePurchasability';
export * from './updateSpecialHourRequest';
export * from './updateSpecialHourResponse';
export * from './voucher';
export * from './voucherDescriptionInfo';
export * from './workingHour';
export * from './workingHourDay';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AcceptOrderRequest } from './acceptOrderRequest';
import { Address } from './address';
import { AdvancedPricing } from './advancedPricing';
import { BatchUpdateMenuItem } from './batchUpdateMenuItem';
import { BatchUpdateMenuResponse } from './batchUpdateMenuResponse';
import { BindMembershipNativeRequest } from './bindMembershipNativeRequest';
import { BindMembershipNativeResponse } from './bindMembershipNativeResponse';
import { Campaign } from './campaign';
import { CampaignConditions } from './campaignConditions';
import { CampaignDiscount } from './campaignDiscount';
import { CampaignQuotas } from './campaignQuotas';
import { CampaignScope } from './campaignScope';
import { CancelCode } from './cancelCode';
import { CancelOrderLimitType } from './cancelOrderLimitType';
import { CancelOrderRequest } from './cancelOrderRequest';
import { CancelOrderResponse } from './cancelOrderResponse';
import { CancelReason } from './cancelReason';
import { CheckOrderCancelableResponse } from './checkOrderCancelableResponse';
import { Coordinates } from './coordinates';
import { CreateCampaignRequest } from './createCampaignRequest';
import { CreateCampaignResponse } from './createCampaignResponse';
import { CreateSelfServeJourneyRequest } from './createSelfServeJourneyRequest';
import { CreateSelfServeJourneyRequestPartner } from './createSelfServeJourneyRequestPartner';
import { CreateSelfServeJourneyResponse } from './createSelfServeJourneyResponse';
import { Currency } from './currency';
import { DineIn } from './dineIn';
import { EditOrderItem } from './editOrderItem';
import { EditOrderRequest } from './editOrderRequest';
import { GetDineInVoucherResponse } from './getDineInVoucherResponse';
import { GetMembershipNativeResponse } from './getMembershipNativeResponse';
import { GetMembershipNativeResponsePointInfo } from './getMembershipNativeResponsePointInfo';
import { GetMembershipRequest } from './getMembershipRequest';
import { GetMembershipWebviewResponse } from './getMembershipWebviewResponse';
import { GetMenuNewResponse } from './getMenuNewResponse';
import { GetMenuOldResponse } from './getMenuOldResponse';
import { GetRewardNativeRequest } from './getRewardNativeRequest';
import { GetRewardNativeResponse } from './getRewardNativeResponse';
import { GrabOauthRequest } from './grabOauthRequest';
import { GrabOauthResponse } from './grabOauthResponse';
import { ListCampaignResponse } from './listCampaignResponse';
import { ListOrdersResponse } from './listOrdersResponse';
import { MarkOrderRequest } from './markOrderRequest';
import { MenuCategory } from './menuCategory';
import { MenuEntity } from './menuEntity';
import { MenuEntityError } from './menuEntityError';
import { MenuItem } from './menuItem';
import { MenuModifier } from './menuModifier';
import { MenuSection } from './menuSection';
import { MenuSectionCategory } from './menuSectionCategory';
import { MenuSectionCategoryItem } from './menuSectionCategoryItem';
import { MenuSyncFail } from './menuSyncFail';
import { MenuSyncFailCategory } from './menuSyncFailCategory';
import { MenuSyncFailItem } from './menuSyncFailItem';
import { MenuSyncFailModifier } from './menuSyncFailModifier';
import { MenuSyncFailModifierGroup } from './menuSyncFailModifierGroup';
import { MenuSyncFailServiceHours } from './menuSyncFailServiceHours';
import { MenuSyncResponse } from './menuSyncResponse';
import { MenuSyncWebhookRequest } from './menuSyncWebhookRequest';
import { ModelError } from './modelError';
import { ModifierGroup } from './modifierGroup';
import { NewOrderTimeRequest } from './newOrderTimeRequest';
import { NotifyMembershipWebviewRequest } from './notifyMembershipWebviewRequest';
import { OpenPeriod } from './openPeriod';
import { Order } from './order';
import { OrderCampaign } from './orderCampaign';
import { OrderDeliveryRequest } from './orderDeliveryRequest';
import { OrderFeatureFlags } from './orderFeatureFlags';
import { OrderFreeItem } from './orderFreeItem';
import { OrderItem } from './orderItem';
import { OrderItemModifier } from './orderItemModifier';
import { OrderPrice } from './orderPrice';
import { OrderPromo } from './orderPromo';
import { OrderReadyEstimation } from './orderReadyEstimation';
import { OrderStateRequest } from './orderStateRequest';
import { OutOfStockInstruction } from './outOfStockInstruction';
import { PartnerOauthRequest } from './partnerOauthRequest';
import { PartnerOauthResponse } from './partnerOauthResponse';
import { PauseStoreRequest } from './pauseStoreRequest';
import { Purchasability } from './purchasability';
import { PushIntegrationStatusWebhookRequest } from './pushIntegrationStatusWebhookRequest';
import { Receiver } from './receiver';
import { RedeemDineInVoucherRequest } from './redeemDineInVoucherRequest';
import { RedeemDineInVoucherResponse } from './redeemDineInVoucherResponse';
import { RedeemResult } from './redeemResult';
import { RegisterMembershipNativeRequest } from './registerMembershipNativeRequest';
import { RegisterMembershipNativeResponse } from './registerMembershipNativeResponse';
import { RewardItem } from './rewardItem';
import { SellingTime } from './sellingTime';
import { ServiceHour } from './serviceHour';
import { ServiceHours } from './serviceHours';
import { SpecialOpeningHour } from './specialOpeningHour';
import { SpecialOpeningHourMetadata } from './specialOpeningHourMetadata';
import { SpecialOpeningHourOpeningHours } from './specialOpeningHourOpeningHours';
import { StoreHour } from './storeHour';
import { StoreHourResponse } from './storeHourResponse';
import { StoreStatusResponse } from './storeStatusResponse';
import { SubmitOrderRequest } from './submitOrderRequest';
import { UnbindMembershipNativeRequest } from './unbindMembershipNativeRequest';
import { UnlinkMembershipWebviewRequest } from './unlinkMembershipWebviewRequest';
import { UpdateAdvancedPricing } from './updateAdvancedPricing';
import { UpdateCampaignRequest } from './updateCampaignRequest';
import { UpdateDeliveryHourRequest } from './updateDeliveryHourRequest';
import { UpdateDeliveryHourResponse } from './updateDeliveryHourResponse';
import { UpdateDineInHourRequest } from './updateDineInHourRequest';
import { UpdateDineInHourResponse } from './updateDineInHourResponse';
import { UpdateMenuItem } from './updateMenuItem';
import { UpdateMenuModifier } from './updateMenuModifier';
import { UpdateMenuNotifRequest } from './updateMenuNotifRequest';
import { UpdateMenuRequest } from './updateMenuRequest';
import { UpdatePurchasability } from './updatePurchasability';
import { UpdateSpecialHourRequest } from './updateSpecialHourRequest';
import { UpdateSpecialHourResponse } from './updateSpecialHourResponse';
import { Voucher } from './voucher';
import { VoucherDescriptionInfo } from './voucherDescriptionInfo';
import { WorkingHour } from './workingHour';
import { WorkingHourDay } from './workingHourDay';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AcceptOrderRequest.ToStateEnum": AcceptOrderRequest.ToStateEnum,
        "Address.PoiSourceEnum": Address.PoiSourceEnum,
        "BatchUpdateMenuItem.FieldEnum": BatchUpdateMenuItem.FieldEnum,
        "BatchUpdateMenuResponse.StatusEnum": BatchUpdateMenuResponse.StatusEnum,
        "Campaign.CreatedByEnum": Campaign.CreatedByEnum,
        "CampaignConditions.EaterTypeEnum": CampaignConditions.EaterTypeEnum,
        "CampaignDiscount.TypeEnum": CampaignDiscount.TypeEnum,
        "CampaignScope.TypeEnum": CampaignScope.TypeEnum,
        "CancelCode": CancelCode,
        "CancelOrderLimitType": CancelOrderLimitType,
        "CheckOrderCancelableResponse.NonCancellationReasonEnum": CheckOrderCancelableResponse.NonCancellationReasonEnum,
        "Currency.CodeEnum": Currency.CodeEnum,
        "Currency.SymbolEnum": Currency.SymbolEnum,
        "EditOrderItem.StatusEnum": EditOrderItem.StatusEnum,
        "GetDineInVoucherResponse.VoucherStatusEnum": GetDineInVoucherResponse.VoucherStatusEnum,
        "GetMembershipNativeResponse.MembershipStatusEnum": GetMembershipNativeResponse.MembershipStatusEnum,
        "GetMembershipWebviewResponse.MembershipStatusEnum": GetMembershipWebviewResponse.MembershipStatusEnum,
        "MarkOrderRequest.MarkStatusEnum": MarkOrderRequest.MarkStatusEnum,
        "MenuCategory.AvailableStatusEnum": MenuCategory.AvailableStatusEnum,
        "MenuEntity.AvailableStatusEnum": MenuEntity.AvailableStatusEnum,
        "MenuItem.AvailableStatusEnum": MenuItem.AvailableStatusEnum,
        "MenuItem.SpecialTypeEnum": MenuItem.SpecialTypeEnum,
        "MenuModifier.AvailableStatusEnum": MenuModifier.AvailableStatusEnum,
        "MenuSectionCategory.AvailableStatusEnum": MenuSectionCategory.AvailableStatusEnum,
        "MenuSectionCategoryItem.AvailableStatusEnum": MenuSectionCategoryItem.AvailableStatusEnum,
        "MenuSectionCategoryItem.SpecialTypeEnum": MenuSectionCategoryItem.SpecialTypeEnum,
        "MenuSyncResponse.CodeEnum": MenuSyncResponse.CodeEnum,
        "MenuSyncWebhookRequest.StatusEnum": MenuSyncWebhookRequest.StatusEnum,
        "ModifierGroup.AvailableStatusEnum": ModifierGroup.AvailableStatusEnum,
        "NotifyMembershipWebviewRequest.ActionEnum": NotifyMembershipWebviewRequest.ActionEnum,
        "Order.PaymentTypeEnum": Order.PaymentTypeEnum,
        "OrderCampaign.LevelEnum": OrderCampaign.LevelEnum,
        "OrderCampaign.TypeEnum": OrderCampaign.TypeEnum,
        "OrderCampaign.DeductedPartEnum": OrderCampaign.DeductedPartEnum,
        "OrderDeliveryRequest.FromStateEnum": OrderDeliveryRequest.FromStateEnum,
        "OrderDeliveryRequest.ToStateEnum": OrderDeliveryRequest.ToStateEnum,
        "OrderFeatureFlags.OrderAcceptedTypeEnum": OrderFeatureFlags.OrderAcceptedTypeEnum,
        "OrderFeatureFlags.OrderTypeEnum": OrderFeatureFlags.OrderTypeEnum,
        "OrderItemModifier.QuantityEnum": OrderItemModifier.QuantityEnum,
        "OrderStateRequest.StateEnum": OrderStateRequest.StateEnum,
        "OutOfStockInstruction.InstructionTypeEnum": OutOfStockInstruction.InstructionTypeEnum,
        "PartnerOauthResponse.TokenTypeEnum": PartnerOauthResponse.TokenTypeEnum,
        "PauseStoreRequest.DurationEnum": PauseStoreRequest.DurationEnum,
        "PushIntegrationStatusWebhookRequest.IntegrationStatusEnum": PushIntegrationStatusWebhookRequest.IntegrationStatusEnum,
        "RedeemResult.CodeEnum": RedeemResult.CodeEnum,
        "ServiceHour.OpenPeriodTypeEnum": ServiceHour.OpenPeriodTypeEnum,
        "SpecialOpeningHourOpeningHours.OpenPeriodTypeEnum": SpecialOpeningHourOpeningHours.OpenPeriodTypeEnum,
        "StoreStatusResponse.CloseReasonEnum": StoreStatusResponse.CloseReasonEnum,
        "SubmitOrderRequest.PaymentTypeEnum": SubmitOrderRequest.PaymentTypeEnum,
        "UpdateAdvancedPricing.KeyEnum": UpdateAdvancedPricing.KeyEnum,
        "UpdateDeliveryHourResponse.ErrorReasonsEnum": UpdateDeliveryHourResponse.ErrorReasonsEnum,
        "UpdateMenuItem.FieldEnum": UpdateMenuItem.FieldEnum,
        "UpdateMenuItem.AvailableStatusEnum": UpdateMenuItem.AvailableStatusEnum,
        "UpdateMenuModifier.FieldEnum": UpdateMenuModifier.FieldEnum,
        "UpdateMenuModifier.AvailableStatusEnum": UpdateMenuModifier.AvailableStatusEnum,
        "UpdateMenuRequest.FieldEnum": UpdateMenuRequest.FieldEnum,
        "UpdateMenuRequest.AvailableStatusEnum": UpdateMenuRequest.AvailableStatusEnum,
        "UpdatePurchasability.KeyEnum": UpdatePurchasability.KeyEnum,
        "UpdateSpecialHourResponse.ErrorReasonsEnum": UpdateSpecialHourResponse.ErrorReasonsEnum,
        "Voucher.VoucherTypeEnum": Voucher.VoucherTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AcceptOrderRequest": AcceptOrderRequest,
    "Address": Address,
    "AdvancedPricing": AdvancedPricing,
    "BatchUpdateMenuItem": BatchUpdateMenuItem,
    "BatchUpdateMenuResponse": BatchUpdateMenuResponse,
    "BindMembershipNativeRequest": BindMembershipNativeRequest,
    "BindMembershipNativeResponse": BindMembershipNativeResponse,
    "Campaign": Campaign,
    "CampaignConditions": CampaignConditions,
    "CampaignDiscount": CampaignDiscount,
    "CampaignQuotas": CampaignQuotas,
    "CampaignScope": CampaignScope,
    "CancelOrderRequest": CancelOrderRequest,
    "CancelOrderResponse": CancelOrderResponse,
    "CancelReason": CancelReason,
    "CheckOrderCancelableResponse": CheckOrderCancelableResponse,
    "Coordinates": Coordinates,
    "CreateCampaignRequest": CreateCampaignRequest,
    "CreateCampaignResponse": CreateCampaignResponse,
    "CreateSelfServeJourneyRequest": CreateSelfServeJourneyRequest,
    "CreateSelfServeJourneyRequestPartner": CreateSelfServeJourneyRequestPartner,
    "CreateSelfServeJourneyResponse": CreateSelfServeJourneyResponse,
    "Currency": Currency,
    "DineIn": DineIn,
    "EditOrderItem": EditOrderItem,
    "EditOrderRequest": EditOrderRequest,
    "GetDineInVoucherResponse": GetDineInVoucherResponse,
    "GetMembershipNativeResponse": GetMembershipNativeResponse,
    "GetMembershipNativeResponsePointInfo": GetMembershipNativeResponsePointInfo,
    "GetMembershipRequest": GetMembershipRequest,
    "GetMembershipWebviewResponse": GetMembershipWebviewResponse,
    "GetMenuNewResponse": GetMenuNewResponse,
    "GetMenuOldResponse": GetMenuOldResponse,
    "GetRewardNativeRequest": GetRewardNativeRequest,
    "GetRewardNativeResponse": GetRewardNativeResponse,
    "GrabOauthRequest": GrabOauthRequest,
    "GrabOauthResponse": GrabOauthResponse,
    "ListCampaignResponse": ListCampaignResponse,
    "ListOrdersResponse": ListOrdersResponse,
    "MarkOrderRequest": MarkOrderRequest,
    "MenuCategory": MenuCategory,
    "MenuEntity": MenuEntity,
    "MenuEntityError": MenuEntityError,
    "MenuItem": MenuItem,
    "MenuModifier": MenuModifier,
    "MenuSection": MenuSection,
    "MenuSectionCategory": MenuSectionCategory,
    "MenuSectionCategoryItem": MenuSectionCategoryItem,
    "MenuSyncFail": MenuSyncFail,
    "MenuSyncFailCategory": MenuSyncFailCategory,
    "MenuSyncFailItem": MenuSyncFailItem,
    "MenuSyncFailModifier": MenuSyncFailModifier,
    "MenuSyncFailModifierGroup": MenuSyncFailModifierGroup,
    "MenuSyncFailServiceHours": MenuSyncFailServiceHours,
    "MenuSyncResponse": MenuSyncResponse,
    "MenuSyncWebhookRequest": MenuSyncWebhookRequest,
    "ModelError": ModelError,
    "ModifierGroup": ModifierGroup,
    "NewOrderTimeRequest": NewOrderTimeRequest,
    "NotifyMembershipWebviewRequest": NotifyMembershipWebviewRequest,
    "OpenPeriod": OpenPeriod,
    "Order": Order,
    "OrderCampaign": OrderCampaign,
    "OrderDeliveryRequest": OrderDeliveryRequest,
    "OrderFeatureFlags": OrderFeatureFlags,
    "OrderFreeItem": OrderFreeItem,
    "OrderItem": OrderItem,
    "OrderItemModifier": OrderItemModifier,
    "OrderPrice": OrderPrice,
    "OrderPromo": OrderPromo,
    "OrderReadyEstimation": OrderReadyEstimation,
    "OrderStateRequest": OrderStateRequest,
    "OutOfStockInstruction": OutOfStockInstruction,
    "PartnerOauthRequest": PartnerOauthRequest,
    "PartnerOauthResponse": PartnerOauthResponse,
    "PauseStoreRequest": PauseStoreRequest,
    "Purchasability": Purchasability,
    "PushIntegrationStatusWebhookRequest": PushIntegrationStatusWebhookRequest,
    "Receiver": Receiver,
    "RedeemDineInVoucherRequest": RedeemDineInVoucherRequest,
    "RedeemDineInVoucherResponse": RedeemDineInVoucherResponse,
    "RedeemResult": RedeemResult,
    "RegisterMembershipNativeRequest": RegisterMembershipNativeRequest,
    "RegisterMembershipNativeResponse": RegisterMembershipNativeResponse,
    "RewardItem": RewardItem,
    "SellingTime": SellingTime,
    "ServiceHour": ServiceHour,
    "ServiceHours": ServiceHours,
    "SpecialOpeningHour": SpecialOpeningHour,
    "SpecialOpeningHourMetadata": SpecialOpeningHourMetadata,
    "SpecialOpeningHourOpeningHours": SpecialOpeningHourOpeningHours,
    "StoreHour": StoreHour,
    "StoreHourResponse": StoreHourResponse,
    "StoreStatusResponse": StoreStatusResponse,
    "SubmitOrderRequest": SubmitOrderRequest,
    "UnbindMembershipNativeRequest": UnbindMembershipNativeRequest,
    "UnlinkMembershipWebviewRequest": UnlinkMembershipWebviewRequest,
    "UpdateAdvancedPricing": UpdateAdvancedPricing,
    "UpdateCampaignRequest": UpdateCampaignRequest,
    "UpdateDeliveryHourRequest": UpdateDeliveryHourRequest,
    "UpdateDeliveryHourResponse": UpdateDeliveryHourResponse,
    "UpdateDineInHourRequest": UpdateDineInHourRequest,
    "UpdateDineInHourResponse": UpdateDineInHourResponse,
    "UpdateMenuItem": UpdateMenuItem,
    "UpdateMenuModifier": UpdateMenuModifier,
    "UpdateMenuNotifRequest": UpdateMenuNotifRequest,
    "UpdateMenuRequest": UpdateMenuRequest,
    "UpdatePurchasability": UpdatePurchasability,
    "UpdateSpecialHourRequest": UpdateSpecialHourRequest,
    "UpdateSpecialHourResponse": UpdateSpecialHourResponse,
    "Voucher": Voucher,
    "VoucherDescriptionInfo": VoucherDescriptionInfo,
    "WorkingHour": WorkingHour,
    "WorkingHourDay": WorkingHourDay,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
