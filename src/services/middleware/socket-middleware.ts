import { Middleware } from "redux";
import { IWebSocket } from "../../types/types";
import { RootState } from "../reducers";

export const socketMiddleware = (wsActions: IWebSocket): Middleware<{}, RootState> => {
    return store  => {
        let socket: WebSocket | null = null;
        let url = '';

        return next => (action) => {
            const { dispatch } = store;
            const { type, payload } = action;
            const {wsStart, onOpen, onClose, onError, onMessage, wsSend} = wsActions;

            if (type === wsStart) {
                url = payload;
                socket = new WebSocket(`${url}`);   
            } else if (type === onClose) {
                socket && socket.close(1000, 'CLOSE_NORMAL');
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({type: onOpen, payload: event});
                };
                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                };
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: onMessage, payload: parsedData });
                };
                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });
                };

                if (type === wsSend) {
                    const message = payload;
                    socket.send(JSON.stringify(message));
                  }
            }
            next(action);
        }
    }
}
  