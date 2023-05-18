export const ORDERS_PROFILE_CONNECT: 'ORDERS_PROFILE_CONNECT' = 'ORDERS_PROFILE_CONNECT';
export const ORDERS_PROFILE_WS_CONNECTING: 'ORDERS_PROFILE_WS_CONNECTING' = 'ORDERS_PROFILE_WS_CONNECTING';
export const ORDERS_PROFILE_WS_ERROR: 'ORDERS_PROFILE_WS_ERROR' = 'ORDERS_PROFILE_WS_ERROR'; 
export const ORDERS_PROFILE_WS_GET_MESSAGE: 'ORDERS_PROFILE_WS_GET_MESSAGE' = 'ORDERS_PROFILE_WS_GET_MESSAGE'; 
export const ORDERS_PROFILE_WS_CLOSE: 'ORDERS_PROFILE_WS_CLOSE' = 'ORDERS_PROFILE_WS_CLOSE'; 
export const ORDERS_PROFILE_WS_OPEN: 'ORDERS_PROFILE_WS_OPEN' = 'ORDERS_PROFILE_WS_OPEN'; 


export const feedConnect = (wsUrl: string) => {
    return {
        type: ORDERS_PROFILE_CONNECT,
        url: wsUrl
    }
}

export const feedWsConnecting = () => {
    return {
        type: ORDERS_PROFILE_WS_CONNECTING
    }
}

export const feedWsOpen = () => {
    return {
        type: ORDERS_PROFILE_WS_OPEN
    }
}

export const feedWsClose= () => {
    return {
        type: ORDERS_PROFILE_WS_CLOSE
    }
}

export const feedWsError = () => {
    return {
        type: ORDERS_PROFILE_WS_ERROR
    }
}

export const feedWsGetMessage = () => {
    return {
        type: ORDERS_PROFILE_WS_GET_MESSAGE
    }
}