export enum TUserActionTypes {
    REGISTER_REQUEST = 'REGISTER_REQUES',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAILED = 'REGISTER_FAILED',

    LOGIN_REQUEST = 'LOGIN_REQUES',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILED = 'LOGIN_FAILED',

    LOGOUT_REQUEST = 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_FAILED = 'LOGOUT_FAILED',

    GET_USER_REQUEST = 'GET_USER_REQUEST',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAILED = 'GET_USER_FAILED',


    UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILED = 'UPDATE_USER_FAILED',

    ERROR_CLEAN = 'ERROR_CLEAN'
}   

export type TUser = {
    email: string | null;
    name: string | null;
}

export type TUserRegister =  {
    email: string;
    name: string;
    password: string;
}

export type TUserState = {
    isAuth: boolean;
    user: TUser;
    errorMessage: string | null;

    registrationRequest: boolean;
    registrationFailed: boolean;

    loginRequest: boolean;
    loginFailed: boolean;

    logoutRequest: boolean;
    logoutFailed: boolean;

    getUserRequest: boolean;
    getUserFailed: boolean;

    updateUserRequest: boolean;
    updateUserFailed: boolean;
}

export type TUserAction = {
    type: string;
    payload?: any;
}