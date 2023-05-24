import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_CONNECT_START, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_STOP } from "./actions/order-feed";
import { USER_ORDERS_CONNECT_START, USER_ORDERS_WS_CLOSE, USER_ORDERS_WS_CONNECTING, USER_ORDERS_WS_ERROR, USER_ORDERS_WS_GET_MESSAGE, USER_ORDERS_WS_STOP } from "./actions/user-orders";
import { socketMiddleware } from "./middleware/socket-middleware";
import { rootReducer } from "./reducers";

const wsOrderFeedActions = {
    wsStart: ORDER_FEED_WS_CONNECT_START,
    onOpen: ORDER_FEED_WS_CONNECTING,
    onError: ORDER_FEED_WS_ERROR,
    onClose: ORDER_FEED_WS_CLOSE,
    onMessage: ORDER_FEED_WS_GET_MESSAGE,
    wsStop: ORDER_FEED_WS_STOP
}

const wsUserOrdersActions = {
  wsStart: USER_ORDERS_CONNECT_START,
  onOpen: USER_ORDERS_WS_CONNECTING,
  onError: USER_ORDERS_WS_ERROR,
  onClose: USER_ORDERS_WS_CLOSE,
  onMessage: USER_ORDERS_WS_GET_MESSAGE,
  wsStop: USER_ORDERS_WS_STOP
}

export const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk, 
        socketMiddleware(wsOrderFeedActions), 
       socketMiddleware(wsUserOrdersActions)
      )
    )
  );