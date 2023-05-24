import { USER_ORDERS_CONNECT_START, USER_ORDERS_WS_CLOSE, USER_ORDERS_WS_CONNECTING, USER_ORDERS_WS_ERROR, USER_ORDERS_WS_GET_MESSAGE, USER_ORDERS_WS_STOP } from "../services/actions/user-orders";
import { IOrderMessageResponse } from "./types";


export interface IUserOrdersConnectStart {
    type: typeof USER_ORDERS_CONNECT_START;
    payload: string;
}

export interface IUserOrdersWSConnecting {
    type: typeof USER_ORDERS_WS_CONNECTING;
    payload: Event;
}

export interface IUserOrdersWSError{
    type: typeof USER_ORDERS_WS_ERROR;
    payload: Event;
}

export interface IUserOrdersWSStop{
    type: typeof USER_ORDERS_WS_STOP;
}

export interface IUserOrdersWSClose{
    type: typeof USER_ORDERS_WS_CLOSE;
}

export interface IUserOrdersWSGetMessage{
    type: typeof USER_ORDERS_WS_GET_MESSAGE;
    payload: IOrderMessageResponse;
}

export type TUserOrdersActions = 
    | IUserOrdersConnectStart | IUserOrdersWSClose 
    | IUserOrdersWSConnecting | IUserOrdersWSError 
    | IUserOrdersWSGetMessage | IUserOrdersWSStop;