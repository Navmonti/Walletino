import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sliceNames } from '../../constants/file'
import { ISignup } from '../../interfaces/user'
import type { RootState } from '../../redux/store'

const initialState: ISignup = {
    firstname: 'Ali',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
}


export const signupSlice = createSlice({
    name: sliceNames.signup,
    initialState,
    reducers: {
        signupAction: (state, action: any) => {
                state.firstname = action.payload.name
        }
    },
    extraReducers: {

    }
})

export const { signupAction } = signupSlice.actions;

export default signupSlice.reducer;