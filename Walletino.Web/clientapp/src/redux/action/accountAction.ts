import { createAsyncThunk} from '@reduxjs/toolkit'
import { IAccount } from '../../interfaces/account';
import { accountService } from '../../services';

export const addAccountAsync = createAsyncThunk('account/add', async (data: IAccount, { rejectWithValue }) => {
    try {
        var response = await accountService.add(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }

})

export const editAccountAsync = createAsyncThunk('account/edit', async (data: IAccount, { rejectWithValue }) => {
    try {
        var response = await accountService.edit(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const deleteAccountAsync = createAsyncThunk('account/remove', async (accountId: number, { rejectWithValue }) => {
    try {
        var response = await accountService.remove(accountId);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const getallAccountAsync = createAsyncThunk('account/getall', async (accountId: number, { rejectWithValue }) => {
    try {
        var response = await accountService.getAll();
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})

export const getAccountByUserIdAsync = createAsyncThunk('account/getAccountByUserId', async (userId: number, { rejectWithValue }) => {
    try {
        var response = await accountService.getByUserId(userId);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})