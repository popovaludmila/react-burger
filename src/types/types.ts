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
}
export interface ITokenResponse extends IBaseResponse {
        accessToken: string;
        refreshToken: string;
} 
export interface IUser {
        email: string | null;
        name: string | null;
}
export interface IAuthResponse extends ITokenResponse {
        user: IUser;
}
interface IErrorMessage {
        message: string;
}
export interface IErrorMessageResponse {
        err: IErrorMessage;
}
export interface IUserRegisterRequest {
        email: string;
        name: string;
        password: string;
}