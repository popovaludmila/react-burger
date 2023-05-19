import { IOrdersProfileConnectStart, IOrdersProfileWSClose, IOrdersProfileWSConnecting, IOrdersProfileWSError, IOrdersProfileWSGetMessage, IOrdersProfileWSStop } from "../../types/ordersProfileActions";
import { IOrderMessageResponse } from "../../types/types";

export const ORDERS_PROFILE_CONNECT_START: 'ORDERS_PROFILE_CONNECT_START' = 'ORDERS_PROFILE_CONNECT_START';
export const ORDERS_PROFILE_WS_CONNECTING: 'ORDERS_PROFILE_WS_CONNECTING' = 'ORDERS_PROFILE_WS_CONNECTING';
export const ORDERS_PROFILE_WS_ERROR: 'ORDERS_PROFILE_WS_ERROR' = 'ORDERS_PROFILE_WS_ERROR'; 
export const ORDERS_PROFILE_WS_GET_MESSAGE: 'ORDERS_PROFILE_WS_GET_MESSAGE' = 'ORDERS_PROFILE_WS_GET_MESSAGE'; 
export const ORDERS_PROFILE_WS_CLOSE: 'ORDERS_PROFILE_WS_CLOSE' = 'ORDERS_PROFILE_WS_CLOSE'; 
export const ORDERS_PROFILE_WS_STOP: 'ORDERS_PROFILE_WS_STOP' = 'ORDERS_PROFILE_WS_STOP'; 


export const orderProfilesConnectStart = (url: string): IOrdersProfileConnectStart => {
    return {
        type: ORDERS_PROFILE_CONNECT_START,
        payload: url
    }
}

export const ordersProfileWsConnecting = (event: Event): IOrdersProfileWSConnecting => {
    return {
        type: ORDERS_PROFILE_WS_CONNECTING,
        payload: event
    }
}

export const ordersProfileWsClose = (): IOrdersProfileWSClose => {
    return {
        type: ORDERS_PROFILE_WS_CLOSE
    }
}

export const ordersProfileWsError = ( event: Event ): IOrdersProfileWSError => {
    return {
        type: ORDERS_PROFILE_WS_ERROR,
        payload: event
    }
}

export const ordersProfileWsGetMessage = (message: IOrderMessageResponse): IOrdersProfileWSGetMessage => {
    return {
        type: ORDERS_PROFILE_WS_GET_MESSAGE,
        payload: message
    }
}

export const ordersProfileWsStop = (): IOrdersProfileWSStop=> {
    return {
        type: ORDERS_PROFILE_WS_STOP
    }
}