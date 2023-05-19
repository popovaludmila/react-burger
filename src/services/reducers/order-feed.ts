import { TOrderFeedActions } from "../../types/orderFeedActions";
import { IOrderFeed } from "../../types/types";
import { ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING,
     ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE } from "../actions/order-feed";

type TOrderFeedState = {
    orders: IOrderFeed[];
    total: number | null;
    totalToday: number | null;
    wsConnected: boolean;
    error: boolean;
    connectingError: string | null;
}

const initalState: TOrderFeedState = {
    orders: [],
    total: null,
    totalToday: null,

    wsConnected: false,
    error: false,
    connectingError: null
}

export const orderFeedReducer = (state = initalState, action: TOrderFeedActions): TOrderFeedState => {
    switch(action.type) {
        case ORDER_FEED_WS_CONNECTING: 
            return {
                ...state,
                wsConnected: true,
                error: false
            } 
        case ORDER_FEED_WS_GET_MESSAGE: 
            return {
                ...state,
                error: false,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            }
        case ORDER_FEED_WS_ERROR:
            return {
                ...state,
                wsConnected: false,
                error: true,
                connectingError: action.payload
            }
        case ORDER_FEED_WS_CLOSE:
            return {
                ...state,
                error: false,
                wsConnected: false
            }  
        default: 
            return state
    }
}