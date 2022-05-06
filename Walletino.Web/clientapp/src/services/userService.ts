import axios from "../constants/network"
import addresses from "../constants/addresses"
import { IUser } from "../interfaces/user"

const UserService = () => {
    const add = async (dataset: IUser) => {
        var result = axios.post(`${addresses.Users_add}`, dataset);
        return result;
    }

    const edit = async (dataset: IUser) => {
        var result = axios.put(`${addresses.Users_update}`, dataset);
        return result;
    }

    const remove = async (id: number) => {
        var result = axios.delete(`${addresses.Users_remove}/${id}`);
        return result;
    }

    const getAll = async () => {
        var result = axios.get(`${addresses.Users_add}`);
        return result;
    }

    const getById = async (id: number) => {
        var result = axios.get(`${addresses.Users_add}/${id}`);
        return result;
    }
}

export default UserService;
