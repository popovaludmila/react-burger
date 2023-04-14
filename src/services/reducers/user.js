import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SET_USER } from "../actions/user"

const initialState = {
    user: {
        email: null, 
        name: null,
   }
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                }
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                }
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {
                    email: null,
                    name: null
                }
            }
        default:
            return state
    }
}