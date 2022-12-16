import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit' 
import { IAccount } from '../../interfaces/account'
import { sliceNames } from '../../constants/file'

const initialState: IAccount = {
    accountId: 0,
    accountNumber: 'dasdadasdas',
    accountTitle: 'asdadadasd'
}

export const accountSlice = createSlice({
    name: sliceNames.account,
    initialState,
    reducers: {}
})

console.log(accountSlice);

export default accountSlice.reducer
//export const { addAccount, editAccount, deleteAccount } = accountSlice.actions;


















//addAccount: (state, action: PayloadAction<any>) => {
//    state.accountId = action.payload.accountId,
//        state.accountNumber = action.payload.accountNumber,
//        state.accountTitle = action.payload.accountTitle

//},
//    editAccount: (state, action: PayloadAction<any>) => {
//        state.accountId = action.payload.accountId,
//            state.accountNumber = action.payload.accountNumber,
//            state.accountTitle = action.payload.accountTitle

//    },
//        deleteAccount: (state, action: PayloadAction<any>) => {
//            state.accountId = action.payload.accountId,
//                state.accountNumber = action.payload.accountNumber,
//                state.accountTitle = action.payload.accountTitle

//        }