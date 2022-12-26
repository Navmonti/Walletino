import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ILogin, ISignup } from '../interfaces/user'

export default class AuthService {
    static async login(dataset: ILogin) {
        return  await axios.get(`${addresses.Auth_login}/${dataset.username}/${dataset.password}`);
    }

    static async signup(dataset: ISignup) {
        return await axios.post(`${addresses.Auth_signup}`, dataset);
    }

    static async logout() {
        return await axios.get(`${addresses.Auth_signup}`);
    } 
} 