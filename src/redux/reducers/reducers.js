import {CHANGE_LOGIN_FIELD} from '../constants'

const initialState = {
    loginStatus: false
}

export const setLoginStatus = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_LOGIN_FIELD:
            return Object.assign({}, state , {loginStatus: action.payload})
        default:
            return state;    
    }
}