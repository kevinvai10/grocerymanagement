import { combineReducers } from 'redux'
import signinReducer from './signin/signin.reducer'


export default combineReducers({ signin: signinReducer });