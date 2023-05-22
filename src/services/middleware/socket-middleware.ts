import { Middleware } from "redux";

import { RootState } from "../reducers";
interface IWebSocket {
    wsStart: string;
    wsStop: string;

    onOpen: string;
    onError: string;
    onClose: string;
    onMessage: string;
}

export const socketMiddleware = (wsActions: IWebSocket): Middleware<{}, RootState> => {
    return store  => {
        let socket: WebSocket | null = null;
        let wsUrl: string| null = null;

        return next => action => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { wsStart, onOpen, onError, onClose, onMessage, wsStop } = wsActions;
      
            if (type === wsStart) {
                wsUrl = payload
                socket = new WebSocket(`${wsUrl}`);
                console.log('socket start')
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({type: onOpen, payload: event});
                };
                socket.onerror = event => {
                    dispatch({ type: onError, payload: event });
                    console.log('socket error')
                };
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    
                        dispatch({ type: onMessage, payload: parsedData });
                    
                };
                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event });
                };
                if (type === wsStop) {
                    socket.close();
                    console.log('socket stop')
                }
            }
            next(action);
        }
    }
}
  