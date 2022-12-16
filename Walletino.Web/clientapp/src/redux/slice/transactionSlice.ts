import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITransaction } from '../../interfaces/transaction'
import { sliceNames } from '../../constants/file'

const initialState: ITransaction = {
    transactionId: 0,
    itemId: 0,
    Type: 'Deposit',
    value: ''
}

export const transactionSlice = createSlice({
    name: sliceNames.transaction,
    initialState,
    reducers: {
        //addTransaction: (state, action: PayloadAction<any>) => {
        //    state.transactionId = action.payload.transactionId,
        //        state.itemId = action.payload.itemId,
        //        state.Type = action.payload.type,
        //        state.value = action.payload.value

        //},
        //editTransaction: (state, action: PayloadAction<any>) => {
        //    state.transactionId = action.payload.transactionId,
        //        state.itemId = action.payload.itemId,
        //        state.Type = action.payload.type,
        //        state.value = action.payload.value

        //},
        //deleteTransaction: (state, action: PayloadAction<any>) => {
        //    state.transactionId = action.payload.transactionId,
        //        state.itemId = action.payload.itemId,
        //        state.Type = action.payload.type,
        //        state.value = action.payload.value
        //}
    },
    extraReducers: {

    }
}) 

//export const { addTransaction, editTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer