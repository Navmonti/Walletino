import addresses from "../constants/addresses"
import axios from "../constants/network"
import { IAccount } from "../interfaces/account"

const AccountService = () => {
    const add = async (dataset: IAccount) => {
        var result = axios.post(`${addresses.Accounts_add}`, dataset);
        return result;
    }

    const edit = async (dataset: IAccount) => {
        var result = axios.put(`${addresses.Accounts_update}`, dataset);
        return result;
    }

    const remove = async (id:number) => {
        var result = axios.delete(`${addresses.Accounts_remove}/${id}`);
        return result;
    }

    const getAll = async () => {
        var result = axios.get(`${addresses.Accounts_add}`);
        return result;
    }
     
    const getById = async (id: number) => {
        var result = axios.get(`${addresses.Accounts_add}/${id}`);
        return result;
    }
}

export default AccountService;