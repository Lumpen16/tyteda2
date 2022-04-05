import { AUTHORIZE, UNAUTHORIZE } from '../actions/authorizedActions'

const authorizedReducer = (state={isAuth: false}, action) => {
    switch( action.type ){
        case AUTHORIZE:
            return {...state, value: true};
        case UNAUTHORIZE:
            return {...state, value: false};
        default:
            return {...state};
    }
}

export default authorizedReducer