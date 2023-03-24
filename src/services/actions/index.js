import { URL } from "../../utils/data";

export const GET_INGREDIENTS_DATA_SUCCESS = 'GET_INGREDIENTS_DATA_SUCCESS';
export const GET_INGREDIENTS_DATA_FAILED = 'GET_INGREDIENTS_DATA_FAILED';
export const SHOW_DETAIL_INGREDIENT = 'SHOW_DETAIL_INGREDIENT';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function showDetailIngredient(ingredient) {
    return {
        type: SHOW_DETAIL_INGREDIENT,
        ingredient: ingredient,
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
    }
}

export function getIngredients() {
    return function(dispatch) {
        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error(`${response.status} ${response.statusText}`);
            })
            .then((data) => {
                dispatch({
                    type: GET_INGREDIENTS_DATA_SUCCESS,
                    ingredients: data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_DATA_FAILED,
                    err: err
                })
            });
    }
}
  
  