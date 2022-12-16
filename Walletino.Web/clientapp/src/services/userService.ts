import addresses from "../constants/addresses"
import axios from "../constants/network"
import { IUser } from "../interfaces/user"

export default class UserService {
    static async add(dataset: IUser) {
        const result = axios.post(`${addresses.Users_add}`, dataset);
        return result;
    }

    static async edit(dataset: IUser) {
        const result = axios.put(`${addresses.Users_update}`, dataset);
        return result;
    }

    static async remove(id: number) {
        var result = axios.delete(`${addresses.Users_remove}/${id}`);
        return result;
    }

    static async getAll() {
        var result = axios.get(`${addresses.Users_getAll}`);
        return result;
    }

    static async getById(id: number) {
        var result = axios.get(`${addresses.Users_getById}/${id}`);
        return result;
    }

    static async getByUserId(userId: number) {
        var result = axios.get(`${addresses.Users_getById}/${userId}`);
        return result;
    }
}

