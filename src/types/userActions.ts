import { ERROR_CLEAN, GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../services/actions/user";
import { IAuthResponse, IErrorMessageResponse, IUser } from "./types";

export interface IRegisterRequest {
    type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS;
    data: IAuthResponse;
}
export interface IErrorClean {
    type: typeof ERROR_CLEAN;
}
export interface IRegisterFailed {
    type: typeof REGISTER_FAILED;
    err: IErrorMessageResponse;
}

export interface ILoginRequest {
    type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccess {
    type: typeof LOGIN_SUCCESS;
    data: IAuthResponse;
}
export interface ILoginFailed {
    type: typeof LOGIN_FAILED;
    err: IErrorMessageResponse;
}

export interface ILogoutRequest {
    type: typeof LOGOUT_REQUEST;
}
export interface ILogoutSuccess {
    type: typeof LOGOUT_SUCCESS;
    data: IAuthResponse;
}
export interface ILogoutFailed {
    type: typeof LOGOUT_FAILED;
    err: IErrorMessageResponse;
}

export interface IGetUserRequest {
    type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccess {
    type: typeof GET_USER_SUCCESS;
    data: IUser;
}
export interface IGetUserFailed {
    type: typeof GET_USER_FAILED;
    err: IErrorMessageResponse;
}

export interface IUpdateUserRequest {
    type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccess {
    type: typeof UPDATE_USER_SUCCESS;
    data: IUser;
}
export interface IUpdateUserFailed {
    type: typeof UPDATE_USER_FAILED;
    err: IErrorMessageResponse;
}



export type TUserActions = | IRegisterRequest | IRegisterSuccess | IRegisterFailed |
    ILoginRequest | ILoginSuccess | ILoginFailed | ILogoutRequest | ILogoutSuccess | 
    ILogoutFailed | IGetUserRequest | IGetUserSuccess | IGetUserFailed | IUpdateUserRequest |
    IUpdateUserSuccess | IUpdateUserFailed | IErrorClean;