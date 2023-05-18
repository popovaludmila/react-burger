import { ORDERS_PROFILE_CONNECT, ORDERS_PROFILE_WS_CLOSE, ORDERS_PROFILE_WS_CONNECTING, ORDERS_PROFILE_WS_ERROR, ORDERS_PROFILE_WS_GET_MESSAGE, ORDERS_PROFILE_WS_OPEN } from "../services/actions/orders-profile";


export interface IOrdersProfileConnect {
    type: typeof ORDERS_PROFILE_CONNECT;
    url: string;
}

export interface IOrdersProfileWSConnecting {
    type: typeof ORDERS_PROFILE_WS_CONNECTING;
}

export interface IOrdersProfileWSError{
    type: typeof ORDERS_PROFILE_WS_ERROR;
}

export interface IOrdersProfileWSOpen{
    type: typeof ORDERS_PROFILE_WS_OPEN;
}

export interface IOrdersProfileWSClose{
    type: typeof ORDERS_PROFILE_WS_CLOSE;
}

export interface IOrdersProfileWSGetMessage{
    type: typeof ORDERS_PROFILE_WS_GET_MESSAGE;
}

export type TOrdersProfileActions = 
    | IOrdersProfileConnect | IOrdersProfileWSClose 
    | IOrdersProfileWSConnecting | IOrdersProfileWSError 
    | IOrdersProfileWSGetMessage | IOrdersProfileWSOpen;