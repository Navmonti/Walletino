import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ITransaction } from "../interfaces/transaction"

export default class TransactionService {
    static async add(dataset: ITransaction) {
        const result = axios.post(`${addresses.Transactions_add}`, dataset);
        return result;
    }

    static async edit(dataset: ITransaction) {
        const result = axios.put(`${addresses.Transactions_update}`, dataset);
        return result;
    }

    static async remove(id: number) {
        var result = axios.delete(`${addresses.Transactions_remove}/${id}`);
        return result;
    }

    static async getAll() {
        var result = axios.get(`${addresses.Transactions_getAll}`);
        return result;
    }

    static async getById(id: number) {
        var result = axios.get(`${addresses.Transactions_getById}/${id}`);
        return result;
    }

    static async getByAccountId(accountId: number) {
        var result = axios.get(`${addresses.Transactions_getById}/${accountId}`);
        return result;
    }
}
