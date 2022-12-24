import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITransaction } from '../../interfaces/transaction'
import { sliceNames } from '../../constants/file'

const initialState: ITransaction = {
    transactionId: 0,
    itemId: 0,
    Type: 'Deposit',
    value: '',
    isLoading: false,
    isDisable: false,
    isSuccessful: false,
    succeessfulMessage: '',
    isError: false,
    errorMessage: ''
}

export const transactionSlice = createSlice({
    name: sliceNames.transaction,
    initialState,
    reducers: {
        
    },
    extraReducers: {

    }
}) 

export default transactionSlice.reducer