import { IOrderFeedConnect, IOrderFeedWSClose, IOrderFeedWSConnecting, IOrderFeedWSError, IOrderFeedWSGetMessage } from "../../types/orderFeedActions";
import { IOrderFeedMessageResponse } from "../../types/types";

export const ORDER_FEED_CONNECT: 'ORDER_FEED_CONNECT' = 'ORDER_FEED_CONNECT';
export const ORDER_FEED_WS_CONNECTING: 'ORDER_FEED_WS_CONNECTING' = 'ORDER_FEED_WS_CONNECTING';
export const ORDER_FEED_WS_ERROR: 'ORDER_FEED_WS_ERROR' = 'ORDER_FEED_WS_ERROR'; 
export const ORDER_FEED_WS_GET_MESSAGE: 'ORDER_FEED_WS_GET_MESSAGE' = 'ORDER_FEED_WS_GET_MESSAGE'; 
export const ORDER_FEED_WS_CLOSE: 'ORDER_FEED_WS_CLOSE' = 'ORDER_FEED_WS_CLOSE'; 
export const ORDER_FEED_WS_SEND_MESSAGE: 'ORDER_FEED_WS_SEND_MESSAGE' ='ORDER_FEED_WS_SEND_MESSAGE'

export const orderFeedConnect = (url: string): IOrderFeedConnect => {
    return {
        type: ORDER_FEED_CONNECT,
        payload: url
    }
}

export const orderFeedWsConnecting = (): IOrderFeedWSConnecting => {
    return {
        type: ORDER_FEED_WS_CONNECTING
    }
}

export const orderFeedWsClose = (): IOrderFeedWSClose => {
    return {
        type: ORDER_FEED_WS_CLOSE
    }
}

export const orderFeedWsError = ( err: string ): IOrderFeedWSError => {
    return {
        type: ORDER_FEED_WS_ERROR,
        payload: err
    }
}

export const orderFeedWsGetMessage = (message: IOrderFeedMessageResponse): IOrderFeedWSGetMessage => {
    return {
        type: ORDER_FEED_WS_GET_MESSAGE,
        payload: message
    }
}