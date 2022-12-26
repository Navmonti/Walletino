import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin, ISignup } from '../../interfaces/user';
import { authService } from '../../services';

export const loginAsync = createAsyncThunk('auth/login', async (data: ILogin, { rejectWithValue }) => {
    try {
        return await authService.login(data);
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})


export const signupAsync = createAsyncThunk('auth/signup', async (data: ISignup, { rejectWithValue }) => {
    try {
        return  await authService.signup(data);
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})