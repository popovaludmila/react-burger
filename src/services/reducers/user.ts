import { IUser } from "../../types/types";
import { TUserActions } from "../../types/userActions";
import { GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, 
    LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILED, 
    LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILED, 
    REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_FAILED, 
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, ERROR_CLEAN, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED } from "../actions/user"

export type TUserState = {
    isAuth: boolean;
    user: IUser;
    errorMessage: string| null;

    registrationRequest: boolean;
    registrationFailed: boolean;

    forgotPasswordRequest: boolean;
    forgotPasswordFailed: boolean;

    resetPasswordRequest: boolean;
    resetPasswordFailed: boolean;

    loginRequest: boolean;
    loginFailed: boolean;

    logoutRequest: boolean;
    logoutFailed: boolean;

    getUserRequest: boolean;
    getUserFailed: boolean;

    updateUserRequest: boolean;
    updateUserFailed: boolean;
}

export const initialState: TUserState = {
    isAuth: false,
    user: {
        email: null, 
        name: null
   },

    errorMessage: null,

    registrationRequest: false,
    registrationFailed: false,

    forgotPasswordRequest: false,
    forgotPasswordFailed: false,

    resetPasswordRequest: false,
    resetPasswordFailed: false,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    updateUserRequest: false,
    updateUserFailed: false,
}

export const userReducer = (state = initialState, action: TUserActions): TUserState => {
    switch(action.type) {
        case REGISTER_REQUEST: 
            return {
                ...state,
                registrationRequest: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                },
                registrationRequest: false
            }
        case REGISTER_FAILED:
                return {
                    ...state,
                    isAuth: false,
                    registrationFailed: true,
                    errorMessage: action.err
                } 
        case FORGOT_PASSWORD_REQUEST: 
            return {
                ...state,
                forgotPasswordRequest: true
            }
        case FORGOT_PASSWORD_SUCCESS: 
            return {
                ...state,
                forgotPasswordRequest: false
            }
        case FORGOT_PASSWORD_FAILED:
            return {
                    ...state,
                    forgotPasswordFailed: true,
                    errorMessage: action.err
            }
        case RESET_PASSWORD_REQUEST: 
            return {
                    ...state,
                    resetPasswordRequest: true
                }
            case RESET_PASSWORD_SUCCESS: 
                return {
                    ...state,
                    resetPasswordRequest: false
                }
            case RESET_PASSWORD_FAILED:
                    return {
                        ...state,
                        resetPasswordFailed: true,
                        errorMessage: action.err
                    } 
        case LOGIN_REQUEST: 
            return {
                ...state,
                loginRequest: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loginRequest: false,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                }
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loginFailed: true,
                errorMessage: action.err
            } 

        case LOGOUT_REQUEST: 
            return {
                ...state,
                logoutRequest: true
        }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                logoutRequest: false,
                user: {
                    email: null,
                    name: null
                }
            }
        case LOGOUT_FAILED:
            return {
                ...state,
                logoutFailed: true
            }

        case GET_USER_REQUEST: 
            return {
                ...state,
                getUserRequest: true
        }
        case GET_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                getUserRequest: false,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                }
            }
        case GET_USER_FAILED:
            return {
                ...state,
                getUserFailed: true
            } 
        case UPDATE_USER_REQUEST: 
            return {
                ...state,
                updateUserRequest: true
        }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                updateUserRequest: false,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                }
            }
        case UPDATE_USER_FAILED:
            return {
                ...state,
                updateUserFailed: true
            } 
        case ERROR_CLEAN:
            return {
                ...state,
                errorMessage: null
            } 
        default:
            return state
    }
}