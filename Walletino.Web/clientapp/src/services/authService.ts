import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ILogin, ISignup } from '../interfaces/user'

export default class AuthService {
    static async login(dataset: ILogin) {
        debugger;
        const result = axios.get(`${addresses.Auth_login}/${dataset.username}/${dataset.password}`);
        return result;
    }

    static async signup(dataset: ISignup) {
        debugger;
        var result = axios.post(`${addresses.Auth_signup}`, dataset);
        return result;
    }

    static async logout() {
        var result = axios.get(`${addresses.Auth_signup}`);
        return result;
    } 
} 