import addresses from "../constants/addresses"
import axios from "../constants/network"
import { IAccount } from "../interfaces/account"

export default class AccountService {
    static async add(dataset: IAccount) {
        const result = axios.post(`${addresses.Accounts_add}`, dataset);
        return result;
    }

    static async edit(dataset: IAccount) {
        const result = axios.put(`${addresses.Accounts_update}`, dataset);
        return result;
    }

    static async remove(id: number) {
        var result = axios.delete(`${addresses.Accounts_remove}/${id}`);
        debugger;
        return result;
    }

    static async getAll() {
        debugger
        var result = await axios.get(`${addresses.Accounts_getAll}`);
        debugger
        return result;
    }

    static async getById(id: number) {
        var result = axios.get(`${addresses.Accounts_getById}/${id}`);
        return result;
    }

    static async getByUserId(userId: number) {
        var result = axios.get(`${addresses.Transactions_getByAccountId}/${userId}`);
        return result;
    }
}

