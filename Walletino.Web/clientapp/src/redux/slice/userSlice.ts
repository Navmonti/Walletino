import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../interfaces/user'
import { sliceNames } from '../../constants/file'

const initialState: IUser = {
    userId: 0,
    lastname: '',
    firstname: '',
    username: '',
    password: '',
    mobile: '',
    email: ''
}

export const userSlice = createSlice({
    name: sliceNames.user,
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<any>) => {
            state.userId = action.payload.userId,
                state.firstname = action.payload.firstname,
                state.lastname = action.payload.lastname,
                state.username = action.payload.username,
                state.password = action.payload.password,
                state.mobile = action.payload.mobile,
                state.email = action.payload.email
        },
        editUser: (state, action: PayloadAction<any>) => {
            state.userId = action.payload.userId,
                state.firstname = action.payload.firstname,
                state.lastname = action.payload.lastname,
                state.username = action.payload.username,
                state.password = action.payload.password,
                state.mobile = action.payload.mobile,
                state.email = action.payload.email

        },
        deleteUser: (state, action: PayloadAction<any>) => {
            state.firstname = action.payload.firstname,
                state.lastname = action.payload.lastname,
                state.username = action.payload.username,
                state.password = action.payload.password,
                state.mobile = action.payload.mobile,
                state.email = action.payload.email
        }
    },
    extraReducers: {

    }
}) 


export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer