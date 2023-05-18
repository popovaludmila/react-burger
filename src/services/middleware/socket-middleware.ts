import { Middleware } from "redux";
import { useDispatch } from "../../hooks/hooks";
import { AppActions } from "../../types";
import { ALL, WS_URL } from "../../utils/data";
import { orderFeedWsConnecting, orderFeedWsOpen, ORDER_FEED_CONNECT, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_OPEN } from "../actions/order-feed";
import { RootState } from "../reducers";

export type TWsActions = {
    wsConnect: typeof ORDER_FEED_CONNECT;
    wsConnecting: typeof ORDER_FEED_WS_CONNECTING;
    onOpen: typeof ORDER_FEED_WS_OPEN;
    onClose: typeof ORDER_FEED_WS_CLOSE;
    onError: typeof ORDER_FEED_WS_ERROR;
    onMessage: typeof ORDER_FEED_WS_GET_MESSAGE;
}


export const socketMiddleware = (wsActions: TWsActions): Middleware<{}, RootState> => {
    return store  => {
        let socket: WebSocket | null = null;

        return next => (action: AppActions) => {
            const dispatch = useDispatch();
            const { type } = action;
            const {wsConnect, wsConnecting, onOpen, onClose, onError, onMessage} = wsActions;

            if (type === wsConnect) {
                socket = new WebSocket(`${WS_URL}/${ALL}`);
                dispatch(orderFeedWsConnecting())
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch(orderFeedWsOpen());
                }
            }
        }
    }
}
  