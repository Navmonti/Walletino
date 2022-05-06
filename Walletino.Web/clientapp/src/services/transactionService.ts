import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ITransaction } from "../interfaces/transaction"

const TransactionService = () => {
    const add = async (dataset: ITransaction) => {
        var result = axios.post(`${addresses.Transactions_add}`, dataset);
        return result;
    }

    const edit = async (dataset: ITransaction) => {
        var result = axios.put(`${addresses.Transactions_update}`, dataset);
        return result;
    }

    const remove = async (id: number) => {
        var result = axios.delete(`${addresses.Transactions_remove}/${id}`);
        return result;
    }

    const getAll = async () => {
        var result = axios.get(`${addresses.Transactions_add}`);
        return result;
    }

    const getById = async (id: number) => {
        var result = axios.get(`${addresses.Transactions_add}/${id}`);
        return result;
    }
}

export default TransactionService;
