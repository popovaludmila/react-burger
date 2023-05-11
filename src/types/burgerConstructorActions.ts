import { ADD_INGREDIENT_TO_CART, CLEAN_CART, CLOSE_MODAL, DELETE_INGREDIENT, GET_INGREDIENTS_DATA_FAILED, GET_INGREDIENTS_DATA_REQUEST, GET_INGREDIENTS_DATA_SUCCESS, GET_ORDER_DATA_FAILED, GET_ORDER_DATA_REQUEST, GET_ORDER_DATA_SUCCESS, REPLACE_INGREDIENTS, SHOW_DETAIL_INGREDIENT, SWITCH_TAB } from "../services/actions";
import { IErrorMessageResponse, TDetailIngredient, TIngredient, IIngredientData } from "./types";

export interface IGetIngredientsRequest {
    type: typeof GET_INGREDIENTS_DATA_REQUEST;
}

export interface IGetIngredientsSuccess {
    type: typeof GET_INGREDIENTS_DATA_SUCCESS;
    ingredients: IIngredientData[];
}

export interface IGetIngredientsFailed {
    type: typeof GET_INGREDIENTS_DATA_FAILED;
    err: IErrorMessageResponse;
}

export interface IShowDetailIngredientAction {
    type: typeof SHOW_DETAIL_INGREDIENT;
    ingredient: TDetailIngredient;
}

export interface ICloseModalAction {
    type: typeof CLOSE_MODAL;
}

export interface IAddIngredientToCartAction {
    type: typeof ADD_INGREDIENT_TO_CART;
    ingredient: TIngredient;
    key: string;
}

export interface IDeleteIngredientAction {
    type: typeof DELETE_INGREDIENT;
    key: string;
}

export interface IGetOrderDataRequest {
    type: typeof GET_ORDER_DATA_REQUEST;
}

export interface IGetOrderDataSuccess {
    type: typeof GET_ORDER_DATA_SUCCESS;
    order: number;
}

export interface IGetOrderDataFailed {
    type: typeof GET_ORDER_DATA_FAILED;
    err: IErrorMessageResponse;
}

export interface IReplaceIngredientsAction {
    type: typeof REPLACE_INGREDIENTS;
    draggingKey: string;
    hoverKey: string;
}

export interface ISwitchTabAction {
    type: typeof SWITCH_TAB;
    tab: string;
    isActive: boolean;
}

export interface IClearCartAction {
    type: typeof CLEAN_CART;
}

export type TBurgerConstructorActions = | IAddIngredientToCartAction | IClearCartAction | 
    ICloseModalAction | IDeleteIngredientAction | IGetIngredientsRequest | 
    IGetIngredientsSuccess | IGetIngredientsFailed | IReplaceIngredientsAction | IGetOrderDataRequest |
    IGetOrderDataSuccess | IGetOrderDataFailed | IShowDetailIngredientAction | ISwitchTabAction;
