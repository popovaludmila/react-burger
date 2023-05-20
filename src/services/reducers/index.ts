import { combineReducers } from "redux";
import { constructorReducer } from "./burder-constructor";
import { orderFeedReducer } from "./order-feed";
import { userReducer } from "./user";
import { userOrdersReducer } from "./user-orders";

export const rootReducer = combineReducers({
    constructorBurger: constructorReducer,
    user: userReducer,
    orderFeed: orderFeedReducer,
    userOrders: userOrdersReducer
});

export type RootState = ReturnType<typeof rootReducer>;