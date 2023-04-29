export type TIngredientData = {
        _id: string;
        name: string;
        type: string;
        proteins: number;
        fat: number;
        carbohydrates: number;
        calories: number;
        price: number;
        image: string;
        image_mobile: string;
        image_large: string;
}

export type TIngredient = Pick<TIngredientData, '_id' | 'name' | 'price' | 'image'>;

export type TConstructorIngredient = TIngredient & {
        key: string;
}
export interface IBaseResponse  {
        success: boolean;
        message?: string;
}
export interface ITokenResponse {
        success: boolean;
        accessToken?: string;
        refreshToken?: string;
}

    