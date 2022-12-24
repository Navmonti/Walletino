import { createSlice} from '@reduxjs/toolkit'
import { sliceNames } from '../../constants/file'
import { ILogin} from '../../interfaces/user'
import { loginAsync } from '../action/authAction'

const initialState: ILogin = { 
    username: '',
    password: '',
    token : ''
}

export const loginSlice = createSlice({
    name: sliceNames.signup,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state: ILogin, { payload }) => {

        });
        builder.addCase(loginAsync.fulfilled, (state: ILogin, { payload }) => {
            debugger;
            //window.localStorage.setItem('token', JSON.stringify(payload.token));
        });
        builder.addCase(loginAsync.rejected, (state: any, { payload }) => {

        });
    }
})

export default loginSlice.reducer;