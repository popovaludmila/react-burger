import { IOrderFeedConnectStart, IOrderFeedWSClose, IOrderFeedWSConnecting, IOrderFeedWSError, IOrderFeedWSGetMessage, IOrderFeedWSStop } from "../../types/orderFeedActions";
import { IOrderMessageResponse } from "../../types/types";

export const ORDER_FEED_WS_CONNECT_START: 'ORDER_FEED_WS_CONNECT_START' = 'ORDER_FEED_WS_CONNECT_START';
export const ORDER_FEED_WS_CONNECTING: 'ORDER_FEED_WS_CONNECTING' = 'ORDER_FEED_WS_CONNECTING';
export const ORDER_FEED_WS_ERROR: 'ORDER_FEED_WS_ERROR' = 'ORDER_FEED_WS_ERROR'; 
export const ORDER_FEED_WS_GET_MESSAGE: 'ORDER_FEED_WS_GET_MESSAGE' = 'ORDER_FEED_WS_GET_MESSAGE'; 
export const ORDER_FEED_WS_CLOSE: 'ORDER_FEED_WS_CLOSE' = 'ORDER_FEED_WS_CLOSE'; 
export const ORDER_FEED_WS_STOP: 'ORDER_FEED_WS_STOP' ='ORDER_FEED_WS_STOP'

export const orderFeedConnect = (url: string): IOrderFeedConnectStart => {
    return {
        type: ORDER_FEED_WS_CONNECT_START,
        payload: url
    }
}

export const orderFeedWsConnecting = (event: Event): IOrderFeedWSConnecting => {
    return {
        type: ORDER_FEED_WS_CONNECTING,
        payload: event
    }
}

export const orderFeedWsClose = (): IOrderFeedWSClose => {
    return {
        type: ORDER_FEED_WS_CLOSE
    }
}

export const orderFeedWsError = ( event: Event ): IOrderFeedWSError => {
    return {
        type: ORDER_FEED_WS_ERROR,
        payload: event
    }
}

export const orderFeedWsGetMessage = (message: IOrderMessageResponse): IOrderFeedWSGetMessage => {
    return {
        type: ORDER_FEED_WS_GET_MESSAGE,
        payload: message
    }
}

export const orderFeedWsStop = ():IOrderFeedWSStop => {
    return {
        type: ORDER_FEED_WS_STOP
    }
}