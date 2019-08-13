//here we create actions
import {CHANGE_LOGIN_FIELD} from './constants'

export const setLogin = (status) => ({
    type: CHANGE_LOGIN_FIELD,
    payload: status
})