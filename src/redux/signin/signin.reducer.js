import {
    CHANGE_LOGIN_FIELD
} from './singin.types'

const INITIAL_STATE = {
    loginStatus: false
}

const signinReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case CHANGE_LOGIN_FIELD:
            return {
                ...state, loginStatus: action.payload
            }
            default:
                return state;
    }
}

export default signinReducer;