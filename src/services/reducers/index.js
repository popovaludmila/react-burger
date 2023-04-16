import { combineReducers } from "redux";
import { BUN, MAIN, SAUCE } from "../../utils/data";
import { GET_INGREDIENTS_DATA_SUCCESS,  
    SHOW_DETAIL_INGREDIENT, 
    CLOSE_MODAL, 
    ADD_INGREDIENT_TO_CART,
    GET_ORDER_DATA_SUCCESS,
    DELETE_INGREDIENT,
    REPLACE_INGREDIENTS,
    SWITCH_TAB,
    CLEAN_CART,
    GET_INGREDIENTS_DATA_FAILED,
    GET_INGREDIENTS_DATA_REQUEST,
    GET_ORDER_DATA_REQUEST,
    GET_ORDER_DATA_FAILED} from "../actions";

import { userReducer } from "./user";

const initialState = {
    ingredients: [],
    cart: {
        top: null,
        fillings: [],
        bottom: null,
    },
    detailIngredient: null,
    order: null,
    tabs: [
        {tab: BUN, isActive: true},
        {tab: SAUCE, isActive: false},
        {tab: MAIN, isActive: false},
    ],

    getIngredientsRequest: false,
    getIngredientsFailed: false,

    getOrderDataRequest: false,
    getOrderDataFailed: false,

    errorMessage: null
}

const constructorReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_DATA_REQUEST:
            return {
                ...state,
                getIngredientsRequest: true
            }
        case GET_INGREDIENTS_DATA_SUCCESS:
            return {
                ...state,
                getIngredientsRequest: false,
                ingredients: action.ingredients
            }
        case GET_INGREDIENTS_DATA_FAILED:
            return {
                ...state,
                getIngredientsFailed: true,
            } 
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
                        fillings: [...state.cart.fillings, {...action.ingredient, key: action.key}]
                    }
                }
            }

        case GET_ORDER_DATA_REQUEST: 
            return {
                ...state, 
                getOrderDataRequest: true
            }    
        case GET_ORDER_DATA_SUCCESS:
            return {
                ...state,
                getOrderDataRequest: false,
                order: {
                    id: action.order.number,
                }
            }
        case GET_ORDER_DATA_FAILED: 
            return {
                ...state, 
                getOrderDataFailed: true
        } 
        case DELETE_INGREDIENT:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    fillings: state.cart.fillings.filter((filling) => filling.key !== action.key)
                }
            }
        case REPLACE_INGREDIENTS:
            let fillings = [...state.cart.fillings]

            const hoverIndex = fillings.findIndex((filling) => filling.key === action.hoverKey);
            const draggingIndex = fillings.findIndex((filling) => filling.key === action.draggingKey);

            fillings.splice(draggingIndex, 1)
            fillings.splice(hoverIndex, 0, state.cart.fillings[draggingIndex])

            return {
                ...state,
                cart: {
                    ...state.cart,
                    fillings: fillings
                }
            }
        case SWITCH_TAB:
            return {
                ...state,
                tabs: state.tabs.map((tab) => {
                    if (tab.tab !== action.tab) {
                        return tab
                    }

                    return {tab: action.tab, isActive: action.isActive};
                })
            }
        case CLEAN_CART: 
            return {
                ...state,
                cart: {
                    top: null,
                    fillings: [],
                    bottom: null,
                }
            }
        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    constructorBurger: constructorReducer,
    user: userReducer
});
