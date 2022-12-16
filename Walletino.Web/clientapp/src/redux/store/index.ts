import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import {
    accountReducer,
    authReducer,
    categoryReducer,
    itemReducer,
    transactionReducer,
    userReducer
} from '../reducer'; 



var reducers = combineReducers({
    auth: authReducer,
    account: accountReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
;
//export const store = configureStore({
//    reducer: {
//        auth: authReducer,
//        account: categoryReducer,
//        //category: categoryReducer,
//        //Item: itemReducer,
//        //transaction: transactionReducer,
//        //user: userReducer,
//    }
//})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch