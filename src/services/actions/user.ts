import { TUserActionTypes, TUserRegister } from "../../types/user";
import { BASE_URL } from "../../utils/data";
import { fetchWithRefresh, request } from "../../utils/data-api";

export const errorClean = () => {
    return {
        type: TUserActionTypes.ERROR_CLEAN,
    }
}

export const register = (user:TUserRegister, onSuccess, onError) => {
    return (dispatch) => {
        dispatch({
            type: TUserActionTypes.REGISTER_REQUEST
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
                    type: TUserActionTypes.REGISTER_SUCCESS,
                    payload: data
                })
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                onSuccess();
            }
        }).catch((err) => {
            dispatch({
                type: TUserActionTypes.REGISTER_FAILED,
                payload: err.message
            })
        })
    }
}


export const login = (email:string, password:string, onSuccess, onError) => {
    return (dispatch) => {
        dispatch({
            type: TUserActionTypes.LOGIN_REQUEST
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
                    type: TUserActionTypes.LOGIN_SUCCESS,
                    payload: data
                })
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                onSuccess();
            }
        }).catch((err) => {
            dispatch({
                type: TUserActionTypes.LOGIN_FAILED,
                payload: err.message
            })
        })
    }
}

export const logout = (token:string) => {
    return (dispatch) => {
        dispatch({
            type: TUserActionTypes.LOGOUT_REQUEST
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
                    type: TUserActionTypes.LOGOUT_SUCCESS
                })
                localStorage.clear();
            }
        }).catch((err) => 
            dispatch({
                type: TUserActionTypes.LOGOUT_FAILED,
                payload: err
            })
        )
    }
}

export const getUser = (token:string) => {
    return (dispatch) => {
        dispatch({
            type: TUserActionTypes.GET_USER_REQUEST
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
                    type: TUserActionTypes.GET_USER_SUCCESS,
                    payload: data
                })
            }         
        }).catch((err) => {
            dispatch({
                type: TUserActionTypes.GET_USER_FAILED,
                payload: err
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

export const updateUserProfile = (name:string, email:string, password:string, token:string) => {
    return (dispatch) => {
        dispatch({
            type: TUserActionTypes.UPDATE_USER_REQUEST
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
                    type: TUserActionTypes.UPDATE_USER_SUCCESS,
                    payload: data
                })
            }         
        }).catch((err) => {
            dispatch({
                type: TUserActionTypes.UPDATE_USER_FAILED,
                payload: err
            })
        })
    }
}