import axios from "axios";
import addresses from "../../constants/addresses";
import { ILogin } from "../../interfaces/user";

const userActionTypes = {
    Add: 'user_add',
    Update: 'user_update',
    Delete : 'user_delte',
    GetAll : 'user_getall',
    Login: 'user_login',
    SignUp: 'user_signup',
}

export { userActionTypes }


const Login = async (dataset: ILogin) => {
    var result = await axios.get(`${addresses.Auth_login}/${dataset.username}/${dataset.password}`);
    return result;
}



