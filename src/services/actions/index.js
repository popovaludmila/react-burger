import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { BASE_URL } from "../../utils/data";
import { request } from "../../utils/data-api";

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
export const ACTION_FAILED = 'ACTION_FAILED';

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
