import { BASE_URL } from "../../utils/data";
import { fetchWithRefresh, request } from "../../utils/data-api";

export const REGISTER_REQUEST = 'REGISTER_REQUES';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const LOGIN_REQUEST = 'LOGIN_REQUES';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const register = (user, onSuccess) => {
    return (dispatch) => {
        dispatch({
            type: REGISTER_REQUEST
        });
        request(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify(user)
        }).then((data) =>{
            if(data.success) {
                dispatch({
                    type: REGISTER_SUCCESS,
                    data: data
                })
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                onSuccess();
            }
        }).catch((err) => {
            dispatch({
                type: REGISTER_FAILED,
                err: err
            })
        })
    }
}


export const login = (email, password, onSuccess) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        });
        request(`${BASE_URL}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({email, password})
        }).then((data) => {
            if(data.success) {
                dispatch({
                    type: LOGIN_SUCCESS,
                    data: data
                })
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                onSuccess();
            }
        }).catch((err) => {
            dispatch({
                type: LOGIN_FAILED,
                err: err
            })
        })
    }
}

export const logout = (token) => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_REQUEST
        });
        request(`${BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(token)
        }).then((data) => {
            if(data.success) {
                dispatch({
                    type: LOGOUT_SUCCESS
                })
                localStorage.clear();
            }
        }).catch((err) => 
            dispatch({
                type: LOGOUT_FAILED,
                err: err
            })
        )
    }
}

export const getUser = (token) => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_REQUEST
        });
        fetchWithRefresh(`${BASE_URL}/auth/user`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
  
        }).then((data) => {
            if (data.success) {
                dispatch ({
                    type: GET_USER_SUCCESS,
                    data: data
                })
            }         
        }).catch((err) => {
            dispatch({
                type: GET_USER_FAILED,
                err: err
            })
        })
    }
}

export const checkIsUserAuth = () => {
    return (dispatch) => {
        const authToken = localStorage.getItem('accessToken');
        if (authToken) {
            dispatch(getUser(authToken))
        }
    }
}

export const updateUserProfile = (name, email, password, token) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_USER_REQUEST
        });
        fetchWithRefresh(`${BASE_URL}/auth/user`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify({name, email, password})
        }).then((data) => {
            if (data.success) {
                dispatch ({
                    type: UPDATE_USER_SUCCESS,
                    data: data
                })
            }         
        }).catch((err) => {
            dispatch({
                type: UPDATE_USER_FAILED,
                err: err
            })
        })
    }
}