// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer'

// const store = createStore(rootReducer)

// export default store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../pages/authSlice'


// Внутри компонента нужно будет использовать dispatch, импорт диспатча:
// import { useDispatch } from 'react-redux'
// import { setAuth } from './slices/authSlice'
// onclick={ () => dispatch(setAuth())}
// const dispatch = useDispatch()

// Использование стейта:
// import { useSelector } from 'react-redux'
// const isAuth = useSelector((state) => state.auth.authorized)



export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})