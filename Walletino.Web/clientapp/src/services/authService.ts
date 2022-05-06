import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ILogin, ISignup } from '../interfaces/user'


const AuthService = () => {
    const login = async (dataset: ILogin) => {
        var result = axios.get(`${addresses.Auth_login}/${dataset.username}/${dataset.password}`);
        return result;
    }

    const signup = async (dataset: ISignup) => {
        var result = axios.get(`${addresses.Auth_login}/${dataset.username}/${dataset.password}`);
        return result;
    }

    const logout = async () => {
        var result = axios.get(`${addresses.Auth_signup}`);
        return result;
    }

    const refereshToken = async () => {
        var result = axios.get(`${addresses.Auth_refreshToken}`);
        return result;
    }
}

export default AuthService;