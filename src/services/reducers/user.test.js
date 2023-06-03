import { ERROR_CLEAN, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILED, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_PASSWORD_FAILED, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../actions/user"
import { initialState, userReducer } from "./user"

describe('user reducer', () => {
   
    const testUser = {
        email: 'Lili@yandex.ru',
        name: 'Lili'
    }

    it('test inital state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })
    
    it('test register user request', () => {
        expect(userReducer(initialState, {
            type: REGISTER_REQUEST
        })).toEqual({
            ...initialState,
            registrationRequest: true,
        })
    })

    it('test register user success', () => {
        expect(userReducer(initialState, {
            type: REGISTER_SUCCESS,
            data: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            registrationRequest: false,
            isAuth: true,
            user: testUser
        })
    })

    it('test register user failed', () => {
        expect(userReducer(initialState, {
            type: REGISTER_FAILED,
            err: 'Произошла ошибка при регистрации'
        })).toEqual({
            ...initialState,
            registrationFailed: true,
            errorMessage: 'Произошла ошибка при регистрации'
        })
    })

    it('test forgot password request', () => {
        expect(userReducer(initialState, {
            type: FORGOT_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            forgotPasswordRequest: true
        })
    })

    it('test forgot password success', () => {
        expect(userReducer(initialState, {
            type: FORGOT_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            forgotPasswordRequest: false  
        })
    })

    it('test forgot password failed', () => {
        expect(userReducer(initialState, {
            type: FORGOT_PASSWORD_FAILED,
            err: 'Ошибка!' 
        })).toEqual({
            ...initialState,
            forgotPasswordFailed: true,
            errorMessage: 'Ошибка!' 
        })
    })

    it('test reset password request', () => {
        expect(userReducer(initialState, {
            type: RESET_PASSWORD_REQUEST
        })).toEqual({
            ...initialState,
            resetPasswordRequest: true
        })
    })

    it('test reset password success', () => {
        expect(userReducer(initialState, {
            type: RESET_PASSWORD_SUCCESS
        })).toEqual({
            ...initialState,
            resetPasswordRequest: false  
        })
    })

    it('test reset password failed', () => {
        expect(userReducer(initialState, {
            type: RESET_PASSWORD_FAILED,
            err: 'Ошибка!' 
        })).toEqual({
            ...initialState,
            resetPasswordFailed: true,
            errorMessage: 'Ошибка!' 
        })
    })

    it('test login user request', () => {
        expect(userReducer(initialState, {
            type: LOGIN_REQUEST
        })).toEqual({
            ...initialState,
            loginRequest: true
        })
    })

    it('test login user success', () => {
        expect(userReducer(initialState, {
            type: LOGIN_SUCCESS,
            data: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuth: true,
            loginRequest: false,
            user: testUser
        })
    })

    it('test login user failed', () => {
        expect(userReducer(initialState, {
            type: LOGIN_FAILED,
            err: 'Произошла ошибка при авторизации'
        })).toEqual({
            ...initialState,
            loginFailed: true,
            errorMessage: 'Произошла ошибка при авторизации'
        })
    })


    it('test logout user request', () => {
        expect(userReducer(initialState, {
            type: LOGOUT_REQUEST
        })).toEqual({
            ...initialState,
            logoutRequest: true
        })
    })

    it('test logout user success', () => {
        expect(userReducer(initialState, {
            type: LOGOUT_SUCCESS
        })).toEqual({
            ...initialState,
            isAuth: false,
            logoutRequest: false,
            user: {
                email: null,
                name: null
            }
        })
    })

    it('test logout user failed', () => {
        expect(userReducer(initialState, {
            type: LOGOUT_FAILED
        })).toEqual({
            ...initialState,
            logoutFailed: true
        })
    })

    it('test get user request', () => {
        expect(userReducer(initialState, {
            type: GET_USER_REQUEST
        })).toEqual({
            ...initialState,
            getUserRequest: true
        })
    })

    it('test get user success', () => {
        expect(userReducer(initialState, {
            type: GET_USER_SUCCESS,
            data: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuth: true,
            getUserRequest: false,
            user: testUser
        })
    })

    it('test get user failed', () => {
        expect(userReducer(initialState, {
            type: GET_USER_FAILED
        })).toEqual({
            ...initialState,
            getUserFailed: true
        })
    })

    it('test update user request', () => {
        expect(userReducer(initialState, {
            type: UPDATE_USER_REQUEST
        })).toEqual({
            ...initialState,
            updateUserRequest: true
        })
    })

    it('test update user success', () => {
        expect(userReducer(initialState, {
            type: UPDATE_USER_SUCCESS,
            data: {
                user: testUser
            }
        })).toEqual({
            ...initialState,
            isAuth: true,
            updateUserRequest: false,
            user: testUser
        })
    })

    it('test update user failed', () => {
        expect(userReducer(initialState, {
            type: UPDATE_USER_FAILED
        })).toEqual({
            ...initialState,
            updateUserFailed: true
        })
    })

    it('test error message clean', () => {
        expect(userReducer(initialState, {
            type: ERROR_CLEAN
        })).toEqual({
            ...initialState,
            errorMessage: null
        })
    })
})