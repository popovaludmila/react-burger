import { BASE_URL } from "../../utils/data";
import { request } from "../../utils/data-api";

export const SET_USER = 'SET_USER';
export const CHECK_USER = 'CHECK_USER';
export const ACTION_FAILED = 'ACTION_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const register = (user, onSuccess) => {
    return (dispatch) => {
        request(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify(user)
        }).then((data) =>{
            if(data.success) {
                dispatch({
                    type: SET_USER,
                    data: data
                })
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                onSuccess();
            }
        }).catch((err) => {
            dispatch({
                type: ACTION_FAILED,
                err: err
            })
        })
    }
}


export const login = (email, password, onSuccess) => {
    return (dispatch) => {
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
                    type: SET_USER,
                    data: data
                })
                localStorage.setItem('accessToken', data.accessToken)
                localStorage.setItem('refreshToken', data.refreshToken)
                onSuccess();
            }
        }).catch((err) => {
            dispatch({
                type: ACTION_FAILED,
                err: err
            })
        })
    }
}

export const logout = (token) => {
    return (dispatch) => {
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
        }).catch(() => 
            alert('Ошибка выхода')
        )
    }
}

export const getUser = (token) => {
    return (dispatch) => {
        request(`${BASE_URL}/auth/user`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
  
        }).then((data) => {
            if (data.success) {
                dispatch ({
                    type: SET_USER,
                    data: data
                })
            }         
        }).catch((err) => {
            dispatch({
                type: ACTION_FAILED,
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
        request(`${BASE_URL}/auth/user`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify({name, email, password})
        }).then((data) => {
            if (data.success) {
                dispatch ({
                    type: SET_USER,
                    data: data
                })
            }         
        }).catch((err) => {
            dispatch({
                type: ACTION_FAILED,
                err: err
            })
        })
    }
}