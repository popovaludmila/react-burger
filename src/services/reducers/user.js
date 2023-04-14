import { ACTION_FAILED, LOGOUT_SUCCESS, SET_USER } from "../actions/user"

const initialState = {
    isAuth: false,
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
                isAuth: true,
                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                }
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                user: {
                    email: null,
                    name: null
                }
            }
        case ACTION_FAILED:
                return state;
        default:
            return state
    }
}