import { ORDER_FEED_WS_CONNECT_START, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, 
    ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_STOP } from "../services/actions/order-feed";
import { IOrderMessageResponse } from "./types";

export interface IOrderFeedConnectStart {
    type: typeof ORDER_FEED_WS_CONNECT_START;
    payload: string;
}

export interface IOrderFeedWSConnecting {
    type: typeof ORDER_FEED_WS_CONNECTING;
    payload: Event;
}

export interface IOrderFeedWSError{
    type: typeof ORDER_FEED_WS_ERROR;
    payload: Event;
}
export interface IOrderFeedWSClose{
    type: typeof ORDER_FEED_WS_CLOSE;
}
export interface IOrderFeedWSStop {
    type: typeof ORDER_FEED_WS_STOP;
}
export interface IOrderFeedWSGetMessage{
    type: typeof ORDER_FEED_WS_GET_MESSAGE;
    payload: IOrderMessageResponse;
}

export type TOrderFeedActions = 
    | IOrderFeedConnectStart 
    | IOrderFeedWSClose 
    | IOrderFeedWSConnecting 
    | IOrderFeedWSError 
    | IOrderFeedWSGetMessage 
    | IOrderFeedWSStop;