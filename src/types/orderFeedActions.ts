import { ORDER_FEED_CONNECT, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_OPEN } from "../services/actions/order-feed";
import { TOrderFeed } from "./types";

export interface IOrderFeedConnect {
    type: typeof ORDER_FEED_CONNECT;
    url: string;
}

export interface IOrderFeedWSConnecting {
    type: typeof ORDER_FEED_WS_CONNECTING;
}

export interface IOrderFeedWSError{
    type: typeof ORDER_FEED_WS_ERROR;
    err: string;
}

export interface IOrderFeedWSOpen{
    type: typeof ORDER_FEED_WS_OPEN;
}

export interface IOrderFeedWSClose{
    type: typeof ORDER_FEED_WS_CLOSE;
}

export interface IOrderFeedWSGetMessage{
    type: typeof ORDER_FEED_WS_GET_MESSAGE;
    orders: TOrderFeed[];
    total: number;
    totalToday: number;
}

export type TOrderFeedActions = 
    | IOrderFeedConnect | IOrderFeedWSClose 
    | IOrderFeedWSConnecting | IOrderFeedWSError 
    | IOrderFeedWSGetMessage | IOrderFeedWSOpen;