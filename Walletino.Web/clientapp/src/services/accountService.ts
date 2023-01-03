import addresses from "../constants/addresses"
import axios from "../constants/network"
import { IAccount } from "../interfaces/account"

export default class AccountService {
    static async add(dataset: IAccount) {
        const result = await axios.post(`${addresses.Accounts_add}`, dataset);
        return result;
    }

    static async edit(dataset: IAccount) {
        const result = await axios.put(`${addresses.Accounts_update}`, dataset);
        return result;
    }

    static async remove(id: number) {
        var result = await axios.delete(`${addresses.Accounts_remove}/${id}`); 
        return result;
    }

    static async getAll() {
        var result = await axios.get(`${addresses.Accounts_getAll}`);
        return result;
    }

    static async getById(id: number) {
        var result = await axios.get(`${addresses.Accounts_getById}/${id}`);
        return result;
    }

    static async getByUserId(userId: number) {
        var result = await axios.get(`${addresses.Accounts_getByUserId}/userId?userId=${userId}`);
        return result;
    }
}

