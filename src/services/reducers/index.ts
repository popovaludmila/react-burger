import { combineReducers } from "redux";
import { constructorReducer } from "./burder-constructor";
import { orderFeedReducer } from "./order-feed";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    constructorBurger: constructorReducer,
    user: userReducer,
    orderFeed: orderFeedReducer
});

export type RootState = ReturnType<typeof rootReducer>;