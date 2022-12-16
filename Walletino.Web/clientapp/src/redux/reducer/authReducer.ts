import { Actions } from "../../constants/actionTypes";
import { ILogin, ISignup } from "../../interfaces/user";

const initialStateSignUp: ISignup = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
}

const initialStateLogin: ILogin = {
    username: "",
    password: ""
}

const authReducer = (state: any, action: any) => { 
    switch (action.type) {
        case Actions.AUTH_LOGIN:
            return null;

        case Actions.AUTH_SIGNUP:
            return null;

        case Actions.AUTH_LOGOUT:
            return null;

        default:
            return null;
    }
};

export default authReducer;