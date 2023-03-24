import { GET_INGREDIENTS_DATA_SUCCESS, GET_INGREDIENTS_DATA_FAILED, SHOW_DETAIL_INGREDIENT, CLOSE_MODAL } from "../actions";

const initialState = {
    ingredients: [],
    cart: [],
    detailIngredient: null,
    order: null
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_DATA_SUCCESS:
            return {
                ...state,
                ingredients: action.ingredients
            }
        case GET_INGREDIENTS_DATA_FAILED:
            return state;
        case SHOW_DETAIL_INGREDIENT:
            return {
                ...state,
                detailIngredient: action.ingredient
            }
        case CLOSE_MODAL:
            return {
                ...state,
                detailIngredient: null,
                order: null
            }
        default:
            return state;
    }
}
