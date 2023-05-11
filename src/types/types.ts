export interface IIngredientData {
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

export type TIngredient = Pick<IIngredientData, '_id' | 'name' | 'type' | 'price' | 'image'>;

export type TDetailIngredient = Omit<IIngredientData, 'price' | 'type' | 'image_mobile' | 'image_large'>;

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