export * from './acceptRejectOrderApi';
import { AcceptRejectOrderApi } from './acceptRejectOrderApi';
export * from './cancelOrderApi';
import { CancelOrderApi } from './cancelOrderApi';
export * from './checkOrderCancelableApi';
import { CheckOrderCancelableApi } from './checkOrderCancelableApi';
export * from './createCampaignApi';
import { CreateCampaignApi } from './createCampaignApi';
export * from './createSelfServeJourneyApi';
import { CreateSelfServeJourneyApi } from './createSelfServeJourneyApi';
export * from './deleteCampaignApi';
import { DeleteCampaignApi } from './deleteCampaignApi';
export * from './editOrderApi';
import { EditOrderApi } from './editOrderApi';
export * from './getDineinVoucherApi';
import { GetDineinVoucherApi } from './getDineinVoucherApi';
export * from './getOauthGrabApi';
import { GetOauthGrabApi } from './getOauthGrabApi';
export * from './getStoreHourApi';
import { GetStoreHourApi } from './getStoreHourApi';
export * from './getStoreStatusApi';
import { GetStoreStatusApi } from './getStoreStatusApi';
export * from './listCampaignApi';
import { ListCampaignApi } from './listCampaignApi';
export * from './listOrdersApi';
import { ListOrdersApi } from './listOrdersApi';
export * from './markOrderReadyApi';
import { MarkOrderReadyApi } from './markOrderReadyApi';
export * from './notifyMembershipWebviewApi';
import { NotifyMembershipWebviewApi } from './notifyMembershipWebviewApi';
export * from './pauseStoreApi';
import { PauseStoreApi } from './pauseStoreApi';
export * from './redeemDineinVoucherApi';
import { RedeemDineinVoucherApi } from './redeemDineinVoucherApi';
export * from './traceMenuSyncApi';
import { TraceMenuSyncApi } from './traceMenuSyncApi';
export * from './updateCampaignApi';
import { UpdateCampaignApi } from './updateCampaignApi';
export * from './updateDeliveryStateApi';
import { UpdateDeliveryStateApi } from './updateDeliveryStateApi';
export * from './updateMenuNotificationApi';
import { UpdateMenuNotificationApi } from './updateMenuNotificationApi';
export * from './updateMenuRecordApi';
import { UpdateMenuRecordApi } from './updateMenuRecordApi';
export * from './updateOrderReadyTimeApi';
import { UpdateOrderReadyTimeApi } from './updateOrderReadyTimeApi';
export * from './updateStoreDeliveryHourApi';
import { UpdateStoreDeliveryHourApi } from './updateStoreDeliveryHourApi';
export * from './updateStoreDineInHourApi';
import { UpdateStoreDineInHourApi } from './updateStoreDineInHourApi';
export * from './updateStoreSpecialHourApi';
import { UpdateStoreSpecialHourApi } from './updateStoreSpecialHourApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AcceptRejectOrderApi, CancelOrderApi, CheckOrderCancelableApi, CreateCampaignApi, CreateSelfServeJourneyApi, DeleteCampaignApi, EditOrderApi, GetDineinVoucherApi, GetOauthGrabApi, GetStoreHourApi, GetStoreStatusApi, ListCampaignApi, ListOrdersApi, MarkOrderReadyApi, NotifyMembershipWebviewApi, PauseStoreApi, RedeemDineinVoucherApi, TraceMenuSyncApi, UpdateCampaignApi, UpdateDeliveryStateApi, UpdateMenuNotificationApi, UpdateMenuRecordApi, UpdateOrderReadyTimeApi, UpdateStoreDeliveryHourApi, UpdateStoreDineInHourApi, UpdateStoreSpecialHourApi];
