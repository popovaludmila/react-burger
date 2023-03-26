import { BUN } from "../../utils/data";
import { GET_INGREDIENTS_DATA_SUCCESS, 
    GET_INGREDIENTS_DATA_FAILED, 
    SHOW_DETAIL_INGREDIENT, 
    CLOSE_MODAL, 
    ADD_INGREDIENT_TO_CART,
    GET_ORDER_DATA_SUCCESS} from "../actions";

const initialState = {
    ingredients: [],
    cart: {
        top: null,
        fillings: [],
        bottom: null,
    },
    detailIngredient: null,
    order: null,
    count: 0
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
        case ADD_INGREDIENT_TO_CART:
            if (action.ingredient.type  === BUN) {
                return{
                    ...state,
                
                    cart: {
                        ...state.cart,
                        top: action.ingredient,
                        bottom: action.ingredient
                    }
                }
            } else {
                return{
                    ...state,
                    cart: {
                        ...state.cart,
                        fillings: [...state.cart.fillings, action.ingredient]
                    }
                }
            }

        case GET_ORDER_DATA_SUCCESS:
            return {
                ...state,
                order: {
                    id: action.order.number,
                }
            }
        default:
            return state;
    }
}
