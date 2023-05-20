import { IUserOrdersConnectStart, IUserOrdersWSClose, IUserOrdersWSConnecting, IUserOrdersWSError, IUserOrdersWSGetMessage, IUserOrdersWSStop } from "../../types/userOrdersActions";
import { IOrderMessageResponse } from "../../types/types";

export const USER_ORDERS_CONNECT_START: 'USER_ORDERS_CONNECT_START' = 'USER_ORDERS_CONNECT_START';
export const USER_ORDERS_WS_CONNECTING: 'USER_ORDERS_WS_CONNECTING' = 'USER_ORDERS_WS_CONNECTING';
export const USER_ORDERS_WS_ERROR: 'USER_ORDERS_WS_ERROR' = 'USER_ORDERS_WS_ERROR'; 
export const USER_ORDERS_WS_GET_MESSAGE: 'USER_ORDERS_WS_GET_MESSAGE' = 'USER_ORDERS_WS_GET_MESSAGE'; 
export const USER_ORDERS_WS_CLOSE: 'USER_ORDERS_WS_CLOSE' = 'USER_ORDERS_WS_CLOSE'; 
export const USER_ORDERS_WS_STOP: 'USER_ORDERS_WS_STOP' = 'USER_ORDERS_WS_STOP'; 


export const orderProfilesConnectStart = (url: string): IUserOrdersConnectStart => {
    return {
        type: USER_ORDERS_CONNECT_START,
        payload: url
    }
}

export const userOrdersWsConnecting = (event: Event): IUserOrdersWSConnecting => {
    return {
        type: USER_ORDERS_WS_CONNECTING,
        payload: event
    }
}

export const userOrdersWsClose = (): IUserOrdersWSClose => {
    return {
        type: USER_ORDERS_WS_CLOSE
    }
}

export const userOrdersWsError = ( event: Event ): IUserOrdersWSError => {
    return {
        type: USER_ORDERS_WS_ERROR,
        payload: event
    }
}

export const userOrdersWsGetMessage = (message: IOrderMessageResponse): IUserOrdersWSGetMessage => {
    return {
        type: USER_ORDERS_WS_GET_MESSAGE,
        payload: message
    }
}

export const userOrdersWsStop = (): IUserOrdersWSStop=> {
    return {
        type: USER_ORDERS_WS_STOP
    }
}