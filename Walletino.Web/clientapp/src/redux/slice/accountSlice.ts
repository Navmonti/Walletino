import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
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
    reducers: {
        addAccount: (state, action: PayloadAction<any>) => {
            state.accountId = action.payload.accountId,
            state.accountNumber = action.payload.accountNumber,
            state.accountTitle = action.payload.accountTitle

        },
        editAccount: (state, action: PayloadAction<any>) => {
            state.accountId = action.payload.accountId,
            state.accountNumber = action.payload.accountNumber,
            state.accountTitle = action.payload.accountTitle

        },
        deleteAccount: (state, action: PayloadAction<any>) => {
            state.accountId = action.payload.accountId,
            state.accountNumber = action.payload.accountNumber,
            state.accountTitle = action.payload.accountTitle

        }
    },
    extraReducers: {

    }

}) 

export const { addAccount, editAccount, deleteAccount } = accountSlice.actions;
export default accountSlice.reducer