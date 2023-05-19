import { ORDERS_PROFILE_CONNECT_START, ORDERS_PROFILE_WS_CLOSE, ORDERS_PROFILE_WS_CONNECTING, ORDERS_PROFILE_WS_ERROR, ORDERS_PROFILE_WS_GET_MESSAGE, ORDERS_PROFILE_WS_STOP } from "../services/actions/orders-profile";
import { IOrderMessageResponse } from "./types";


export interface IOrdersProfileConnectStart {
    type: typeof ORDERS_PROFILE_CONNECT_START;
    payload: string;
}

export interface IOrdersProfileWSConnecting {
    type: typeof ORDERS_PROFILE_WS_CONNECTING;
    payload: Event;
}

export interface IOrdersProfileWSError{
    type: typeof ORDERS_PROFILE_WS_ERROR;
    payload: Event;
}

export interface IOrdersProfileWSStop{
    type: typeof ORDERS_PROFILE_WS_STOP;
}

export interface IOrdersProfileWSClose{
    type: typeof ORDERS_PROFILE_WS_CLOSE;
}

export interface IOrdersProfileWSGetMessage{
    type: typeof ORDERS_PROFILE_WS_GET_MESSAGE;
    payload: IOrderMessageResponse;
}

export type TOrdersProfileActions = 
    | IOrdersProfileConnectStart | IOrdersProfileWSClose 
    | IOrdersProfileWSConnecting | IOrdersProfileWSError 
    | IOrdersProfileWSGetMessage | IOrdersProfileWSStop;