import { ORDER_FEED_CONNECT, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_SEND_MESSAGE } from "../services/actions/order-feed";
import { IOrderFeedMessageResponse} from "./types";

export interface IOrderFeedConnect {
    type: typeof ORDER_FEED_CONNECT;
    payload: string;
}

export interface IOrderFeedWSConnecting {
    type: typeof ORDER_FEED_WS_CONNECTING;
}

export interface IOrderFeedWSError{
    type: typeof ORDER_FEED_WS_ERROR;
    payload: string;
}

export interface IOrderFeedWSClose{
    type: typeof ORDER_FEED_WS_CLOSE;
}

export interface IOrderFeedWSSendMessage {
    type: typeof ORDER_FEED_WS_SEND_MESSAGE;
}
export interface IOrderFeedWSGetMessage{
    type: typeof ORDER_FEED_WS_GET_MESSAGE;
    payload: IOrderFeedMessageResponse;
}

export type TOrderFeedActions = 
    | IOrderFeedConnect | IOrderFeedWSClose 
    | IOrderFeedWSConnecting | IOrderFeedWSError 
    | IOrderFeedWSGetMessage | IOrderFeedWSSendMessage;