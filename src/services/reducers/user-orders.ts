import { IOrderType } from "../../types/types";
import { TUserOrdersActions } from "../../types/userOrdersActions";

import { USER_ORDERS_WS_CLOSE, USER_ORDERS_WS_CONNECTING,
        USER_ORDERS_WS_ERROR, USER_ORDERS_WS_GET_MESSAGE} from "../actions/user-orders";

type TUserOrdersState = {
    orders: Array<IOrderType>;
    total: number | null;
    totalToday: number | null;
    wsConnected: boolean;
}

const initalState: TUserOrdersState = {
    orders: [],
    total: null,
    totalToday: null,

    wsConnected: false
}

export const userOrdersReducer = (state = initalState, action: TUserOrdersActions): TUserOrdersState => {
    switch(action.type) {
        case USER_ORDERS_WS_CONNECTING: 
            return {
                ...state,
                wsConnected: true
            } 
        case USER_ORDERS_WS_GET_MESSAGE: 
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            }
        case USER_ORDERS_WS_ERROR:
            return {
                ...state,
                wsConnected: false
            }
        case USER_ORDERS_WS_CLOSE:
            return {
                ...state,
                wsConnected: false
            }  
        default: 
            return state
    }
}