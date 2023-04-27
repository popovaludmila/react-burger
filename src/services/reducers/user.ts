import { TUserAction, TUserActionTypes, TUserState } from "../../types/user"

const initialState:TUserState = {
    isAuth: false,
    user: {
        email: null, 
        name: null
   },

    errorMessage: null,

    registrationRequest: false,
    registrationFailed: false,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    updateUserRequest: false,
    updateUserFailed: false,
}

export const userReducer = (state = initialState, action:TUserAction):TUserState => {
    switch(action.type) {
        case TUserActionTypes.REGISTER_REQUEST: 
            return {
                ...state,
                registrationRequest: true
            }
        case TUserActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: {
                    ...state.user,
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                },
                registrationRequest: false
            }
        case TUserActionTypes.REGISTER_FAILED:
                return {
                    ...state,
                    registrationFailed: true,
                    errorMessage: action.payload
                } 

        case TUserActionTypes.LOGIN_REQUEST: 
            return {
                ...state,
                loginRequest: true
            }
        case TUserActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loginRequest: false,
                user: {
                    ...state.user,
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                }
            }
        case TUserActionTypes.LOGIN_FAILED:
            return {
                ...state,
                loginFailed: true,
                errorMessage: action.payload
            } 

        case TUserActionTypes.LOGOUT_REQUEST: 
            return {
                ...state,
                logoutRequest: true
        }
        case TUserActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                logoutRequest: false,
                user: {
                    email: null,
                    name: null
                }
            }
        case TUserActionTypes.LOGOUT_FAILED:
            return {
                ...state,
                logoutFailed: true
            }

        case TUserActionTypes.GET_USER_REQUEST: 
            return {
                ...state,
                getUserRequest: true
        }
        case TUserActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                getUserRequest: false,
                user: {
                    ...state.user,
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                }
            }
        case TUserActionTypes.GET_USER_FAILED:
            return {
                ...state,
                getUserFailed: true
            } 
        case TUserActionTypes.UPDATE_USER_REQUEST: 
            return {
                ...state,
                updateUserRequest: true
        }
        case TUserActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                isAuth: true,
                updateUserRequest: false,
                user: {
                    ...state.user,
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                }
            }
        case TUserActionTypes.UPDATE_USER_FAILED:
            return {
                ...state,
                updateUserFailed: true
            } 
        case TUserActionTypes.ERROR_CLEAN:
            return {
                ...state,
                errorMessage: null
            } 
        default:
            return state
    }
}