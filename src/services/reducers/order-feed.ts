import { TOrderFeedActions } from "../../types/orderFeedActions";
import { TOrderFeed } from "../../types/types";
import { ORDER_FEED_CONNECT, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING,
     ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_OPEN } from "../actions/order-feed";

type TOrderFeedState = {
    orders: TOrderFeed[];
    total: number | null;
    totalToday: number | null;

    isConnecting: boolean;
    isOnline: boolean;
    isOffline: boolean;
    connectingError: string;
}

const initalState: TOrderFeedState = {
    orders: [],
    total: null,
    totalToday: null,

    isConnecting: false,
    isOnline: false,
    isOffline: true,

    connectingError: ''
}

export const orderFeedReducer = (state = initalState, action: TOrderFeedActions): TOrderFeedState => {
    switch(action.type) {
        case ORDER_FEED_WS_CONNECTING: 
            return {
                ...state,
                isConnecting: true
            }
        case ORDER_FEED_CONNECT: 
            return {
                ...state
              
            }
        case ORDER_FEED_WS_OPEN: 
            return {
                ...state,
                isConnecting: false,
                isOnline: true,
                isOffline: false
            }  
        case ORDER_FEED_WS_GET_MESSAGE: 
            return {
                ...state,
                orders: action.orders,
                total: action.total,
                totalToday: action.totalToday,
            }
        case ORDER_FEED_WS_ERROR:
            return {
                ...state,
                connectingError: action.err
            }
        case ORDER_FEED_WS_CLOSE:
            return {
                ...state,
                isOnline: false,
                isOffline: true
            }  
        default: 
            return state
    }
}