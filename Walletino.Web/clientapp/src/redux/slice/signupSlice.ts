import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sliceNames } from '../../constants/file'
import { ISignup } from '../../interfaces/user'
import { signupAsync } from '../action/authAction'

const initialState: ISignup = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''   
}

export const signupSlice = createSlice({
    name: sliceNames.signup,
    initialState,
    reducers: { },
    extraReducers: (builder)=> {
        builder.addCase(signupAsync.pending, (state: ISignup, { payload }) => {

        });
        builder.addCase(signupAsync.fulfilled, (state: ISignup, { payload }) => {

        });
        builder.addCase(signupAsync.rejected, (state: any, { payload }) => {

        });
    }
}) 

export default signupSlice.reducer;