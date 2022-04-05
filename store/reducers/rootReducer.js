import authorizedReducer from './authorizedReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authorized: authorizedReducer
})


export default rootReducer