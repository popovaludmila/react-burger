import { BASE_URL} from "../../utils/data";
import { loginRequest, request, setCookie } from "../../utils/data-api";

export const GET_INGREDIENTS_DATA_SUCCESS = 'GET_INGREDIENTS_DATA_SUCCESS';
export const SHOW_DETAIL_INGREDIENT = 'SHOW_DETAIL_INGREDIENT';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_BUN_TO_CART = 'ADD_BUN_TO_CART';
export const ADD_FILLING_TO_CART = 'ADD_FILLING_TO_CART';
export const ADD_INGREDIENT_TO_CART = 'ADD_INGREDIENT_TO_CART';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const GET_ORDER_DATA_SUCCESS = 'SEND_DATA_SUCCESS';
export const REPLACE_INGREDIENTS = 'REPLACE_INGREDIENTS';
export const SWITCH_TAB = 'SWITCH_TAB';
export const CLEAN_CART = 'CLEAN_CART';

export const SET_USER = 'SET_USER';

export const ACTION_FAILED = 'ACTION_FAILED';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const switchTab = (tab, isActive) => {
    return {
        type: SWITCH_TAB,
        tab: tab,
        isActive: isActive
    }
}

export const replaceIngredient = (draggingKey, hoverKey) => {
    return {
        type: REPLACE_INGREDIENTS,
        draggingKey: draggingKey,
        hoverKey: hoverKey
    }
}

export const deleteIngredient = (key) => {
    return {
        type: DELETE_INGREDIENT,
        key: key
    }
}

export const showDetailIngredient = (ingredient) => {
    return {
        type: SHOW_DETAIL_INGREDIENT,
        ingredient: ingredient,
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const addIngredientToCart = (ingredient, key) => {
    return {
        type: ADD_INGREDIENT_TO_CART,
        ingredient: ingredient,
        key: key
    }
}

export const cleanCart = () => {
   return {
        type: CLEAN_CART
   }
}
  
export const getIngredients = () => {
    return function(dispatch) {
        request(`${BASE_URL}/ingredients`)
            .then((data) => {
                dispatch({
                    type: GET_INGREDIENTS_DATA_SUCCESS,
                    ingredients: data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: ACTION_FAILED,
                    err: err
                })
            });
    }
}



export const createOrder = (orderIngredientIds) => {
    return (dispatch) => {
        request(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({"ingredients": orderIngredientIds})
          })
        .then((data) => {
            dispatch({
                type: GET_ORDER_DATA_SUCCESS,
                order: data.order
            })
        }).catch((err) => {
            dispatch({
                type: ACTION_FAILED,
                err: err
            })
        });
    }
}

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

export const login = (body) => {

    return (dispatch) => {
        loginRequest(`${BASE_URL}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
        }).then((res) =>{
            let authToken;
            res.headers.forEach(header => {
                if (header.indexOf('Bearer') === 0) {
                    authToken = header.split('Bearer ')[1];
                }
            })
            if (authToken) {
                setCookie('token', authToken);
            }
            return res.json();
        }).then((data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                data: data
            })
        }).catch((err) => {
            dispatch({
                type: ACTION_FAILED,
                err: err
            })
        })
    }
}

