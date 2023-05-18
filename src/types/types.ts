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

export type TIngredient = Pick<TIngredientData, '_id' | 'name' | 'type' | 'price' | 'image'>;

export type TDetailIngredient = Omit<TIngredientData, 'price' | 'type' | 'image_mobile' | 'image_large'>;

export type TConstructorIngredient = TIngredient & {
        key: string;
}
export interface IBaseResponse  {
        success: boolean;
        message: string | null;
}

export interface IGetIngredientsResponse extends IBaseResponse {
        data: TIngredientData[];
}
interface IOrderNumber {
        number: number;
}
export interface ICreateOrderResponse extends IBaseResponse {
        order: IOrderNumber;
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
export interface IUserUpdateResponse extends IBaseResponse {
        user: IUser;
}
export interface IUserRegisterRequest {
        email: string;
        name: string;
        password: string;
}
export interface IErrorMessage {
        message: string;
}

export type TOrderFeed = {
        ingredients: Array<string>;
        id: string;
        status: string;
        number: number;
        createdAt: string;
        updatedAt: string;
}