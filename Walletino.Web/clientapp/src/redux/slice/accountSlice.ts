import { createSlice } from '@reduxjs/toolkit'
import { IAccount } from '../../interfaces/account'
import { sliceNames } from '../../constants/file'
import { addAccountAsync, deleteAccountAsync, editAccountAsync, getAccountByUserIdAsync } from '../action/accountAction'

const initialState: IAccount = {
    accountId: 0,
    accountTitle: 'accountTitle',
    accountNumber: 'accountNumber',
    isLoading: false,
    isDisable: false,
    isSuccessful: false,
    succeessfulMessage: '',
    isError: false,
    errorMessage: ''
}

export const accountSlice = createSlice({
    name: sliceNames.account,
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(addAccountAsync.pending, (state: IAccount, { payload }) => {

        });
        builder.addCase(addAccountAsync.fulfilled, (state: IAccount, { payload }) => {

        });
        builder.addCase(addAccountAsync.rejected, (state: any, { payload }) => {

        });

        builder.addCase(editAccountAsync.pending, (state: IAccount, { payload }) => {

        });
        builder.addCase(editAccountAsync.fulfilled, (state: IAccount, { payload }) => {

        });
        builder.addCase(editAccountAsync.rejected, (state: any, { payload }) => {

        });

        builder.addCase(deleteAccountAsync.pending, (state: IAccount, { payload }) => {

        });
        builder.addCase(deleteAccountAsync.fulfilled, (state: IAccount, { payload }) => {

        });
        builder.addCase(deleteAccountAsync.rejected, (state: any, { payload }) => {

        });

        builder.addCase(getAccountByUserIdAsync.pending, (state: any, { payload }) => {
            debugger;
        });
        builder.addCase(getAccountByUserIdAsync.fulfilled, (state: any, { payload }) => {
            debugger;
        });
        builder.addCase(getAccountByUserIdAsync.rejected, (state: any, { payload }) => {
            debugger;
        });
    }
}) 

export default accountSlice.reducer;