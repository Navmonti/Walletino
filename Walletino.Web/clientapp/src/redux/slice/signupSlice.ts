import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sliceNames } from '../../constants/file'
import { ISignup } from '../../interfaces/user'

const initialState: ISignup = {
    firstname: 'Ali',
    lastname: 'Nategh',
    email: 'a.nategh@asax.ir',
    username: 'a.nategh',
    password: '12345aA',
    confirmPassword: '12345aA'
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