import { combineReducers } from "redux";
import { TIngredient, TIngredientData } from "../../types/types";
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

type TCartState = {
    top: TIngredient | null;
    fillings: Array<TIngredient> |  any[]
    bottom: TIngredient | null;
}

type TOrderState = {
    id: number;
}

type TTabState = {
    tab: string;
    isActive: boolean;
}

type TBurgerConstructorState = {
    ingredients: Array<TIngredientData> | any[];
    cart: TCartState;
    detailIngredient: TIngredientData | null;
    order: TOrderState | null;
    tabs: Array<TTabState>;

    getIngredientsRequest: boolean;
    getIngredientsFailed: boolean;

    getOrderDataRequest: boolean;
    getOrderDataFailed: boolean,

}

const initialState:TBurgerConstructorState = {
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
}
export type TBurgerConstructorAction = {
    type: string;
    payload?: any;
}

const constructorReducer = (state = initialState, action:TBurgerConstructorAction):TBurgerConstructorState => {
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
                ingredients: action.payload
            }
        case GET_INGREDIENTS_DATA_FAILED:
            return {
                ...state,
                getIngredientsFailed: true,
            } 
        case SHOW_DETAIL_INGREDIENT:
            return {
                ...state,
                detailIngredient: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                detailIngredient: null,
                order: null
            }
        case ADD_INGREDIENT_TO_CART:
            if (action.payload.type  === BUN) {
                return{
                    ...state,
                
                    cart: {
                        ...state.cart,
                        top: action.payload,
                        bottom: action.payload
                    }
                }
            } else {
                return{
                    ...state,
                    cart: {
                        ...state.cart,
                        fillings: [...state.cart.fillings, {...action.payload, key: action.payload}]
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
                    id: action.payload.number,
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
                    fillings: state.cart.fillings.filter((filling) => filling.key !== action.payload)
                }
            }
        case REPLACE_INGREDIENTS:
            let fillings = [...state.cart.fillings]

            const hoverIndex = fillings.findIndex((filling) => filling.key === action.payload);
            const draggingIndex = fillings.findIndex((filling) => filling.key === action.payload);

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
                    if (tab.tab !== action.payload) {
                        return tab
                    }

                    return {tab: action.payload, isActive: action.payload};
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
