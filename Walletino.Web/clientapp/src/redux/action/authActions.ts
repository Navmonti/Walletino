import { Actions } from "../../constants/actionTypes";
import { ILogin, ISignup } from "../../interfaces/user";
import { authService } from "../../services";

const Login = (login: ILogin) => {
    var result = authService.login(login);
    return {
        type: Actions.AUTH_LOGIN,
        payload: result
    }
}

const Signup = (signup: ISignup) => {
    var result = authService.signup(signup);
    return {
        type: Actions.AUTH_SIGNUP,
        payload: result
    }
}


const Logout = () => {
    var result = authService.logout();
    return {
        type: Actions.AUTH_LOGOUT,
        payload: result
    }
} 

export {
    Login,
    Signup,
    Logout 
}