import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin, ISignup } from '../../interfaces/user';
import { authService } from '../../services';

export const loginAsync = createAsyncThunk('auth/login', async (data: ILogin, { rejectWithValue }) => {
    try {
        debugger;
        var response = authService.login(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})


export const signupAsync = createAsyncThunk('auth/signup', async (data: ISignup, { rejectWithValue }) => {
    try {
        debugger;
        var response = authService.signup(data);
        return response;
    } catch (err: any) {
        return rejectWithValue(err.response.data)
    }
})