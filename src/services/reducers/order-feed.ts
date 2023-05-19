import { TOrderFeedActions } from "../../types/orderFeedActions";
import { IOrderType } from "../../types/types";
import { ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING,
     ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE } from "../actions/order-feed";

type TOrderFeedState = {
    orders: IOrderType[];
    total: number | null;
    totalToday: number | null;
    wsConnected: boolean;
}

const initalState: TOrderFeedState = {
    orders: [],
    total: null,
    totalToday: null,

    wsConnected: false
}

export const orderFeedReducer = (state = initalState, action: TOrderFeedActions): TOrderFeedState => {
    switch(action.type) {
        case ORDER_FEED_WS_CONNECTING: 
            return {
                ...state,
                wsConnected: true
            } 
        case ORDER_FEED_WS_GET_MESSAGE: 
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            }
        case ORDER_FEED_WS_ERROR:
            return {
                ...state,
                wsConnected: false
            }
        case ORDER_FEED_WS_CLOSE:
            return {
                ...state,
                wsConnected: false
            }  
        default: 
            return state
    }
}