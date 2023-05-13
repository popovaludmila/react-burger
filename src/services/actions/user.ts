import { IAuthResponse, IUserRegisterRequest, IUserUpdateResponse } from "../../types/types";
import { IErrorClean } from "../../types/userActions";
import { BASE_URL } from "../../utils/data";
import { fetchWithRefresh, request } from "../../utils/data-api";

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_FAILED: 'REGISTER_FAILED' = 'REGISTER_FAILED';

export const LOGIN_REQUEST: 'LOGIN_REQUES' = 'LOGIN_REQUES';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';

export const ERROR_CLEAN: 'ERROR_CLEAN' = 'ERROR_CLEAN';

export const errorClean = (): IErrorClean => {
    return {
        type: ERROR_CLEAN,
    }
}

export const register = (user: IUserRegisterRequest, onSuccess: () => void) => {
    return (dispatch) => {
        dispatch({
            type: REGISTER_REQUEST
        });
        request<IAuthResponse>(`${BASE_URL}/auth/register`, {
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
                err: err.message
            })
        })
    }
}


export const login = (email: string, password:string, onSuccess: () => void) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        });
        request<IAuthResponse>(`${BASE_URL}/auth/login`, {
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
                err: err.message
            })
        })
    }
}

export const logout = (token: string) => {
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

export const getUser = (token: string) => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_REQUEST
        });
        fetchWithRefresh<IAuthResponse>(`${BASE_URL}/auth/user`, {
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

export const updateUserProfile = (name: string, email: string, password: string, token: string) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_USER_REQUEST
        });
        fetchWithRefresh<IUserUpdateResponse>(`${BASE_URL}/auth/user`, {
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