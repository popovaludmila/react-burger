export const ORDER_FEED_CONNECT: 'ORDER_FEED_CONNECT' = 'ORDER_FEED_CONNECT';
export const ORDER_FEED_WS_CONNECTING: 'ORDER_FEED_WS_CONNECTING' = 'ORDER_FEED_WS_CONNECTING';
export const ORDER_FEED_WS_ERROR: 'ORDER_FEED_WS_ERROR' = 'ORDER_FEED_WS_ERROR'; 
export const ORDER_FEED_WS_GET_MESSAGE: 'ORDER_FEED_WS_GET_MESSAGE' = 'ORDER_FEED_WS_GET_MESSAGE'; 
export const ORDER_FEED_WS_CLOSE: 'ORDER_FEED_WS_CLOSE' = 'ORDER_FEED_WS_CLOSE'; 
export const ORDER_FEED_WS_OPEN: 'ORDER_FEED_WS_OPEN' = 'ORDER_FEED_WS_OPEN'; 


export const orderFeedConnect = (wsUrl: string) => {
    return {
        type: ORDER_FEED_CONNECT,
        url: wsUrl
    }
}

export const orderFeedWsConnecting = () => {
    return {
        type: ORDER_FEED_WS_CONNECTING
    }
}

export const orderFeedWsOpen = () => {
    return {
        type: ORDER_FEED_WS_OPEN
    }
}

export const orderFeedWsClose= () => {
    return {
        type: ORDER_FEED_WS_CLOSE
    }
}

export const orderFeedWsError = () => {
    return {
        type: ORDER_FEED_WS_ERROR
    }
}

export const orderFeedWsGetMessage = () => {
    return {
        type: ORDER_FEED_WS_GET_MESSAGE
    }
}