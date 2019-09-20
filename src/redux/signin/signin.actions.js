import {CHANGE_LOGIN_FIELD} from './singin.types'

export const setLogin = (status) => ({
    type: CHANGE_LOGIN_FIELD,
    payload: status
})