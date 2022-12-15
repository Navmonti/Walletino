import { configureStore } from '@reduxjs/toolkit';
import {
    accountReducer,
    authReducer,
    categoryReducer,
    itemReducer,
    transactionReducer,
    userReducer
} from '../reducer'; 

export const store = configureStore({
    reducer: {
        signup: authReducer,
        account: accountReducer,
        category: categoryReducer,
        Item: itemReducer,
        transaction: transactionReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch