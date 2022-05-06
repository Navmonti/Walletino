import addresses from "../constants/addresses"
import axios from "../constants/network"
import { IItem } from "../interfaces/item"

const ItemService = () => {
    const add = async (dataset: IItem) => {
        var result = axios.post(`${addresses.Items_add}`, dataset);
        return result;
    }

    const edit = async (dataset: IItem) => {
        var result = axios.put(`${addresses.Items_update}`, dataset);
        return result;
    }

    const remove = async (id: number) => {
        var result = axios.delete(`${addresses.Items_remove}/${id}`);
        return result;
    }

    const getAll = async () => {
        var result = axios.get(`${addresses.Items_add}`);
        return result;
    }
     
    const getById = async (id: number) => {
        var result = axios.get(`${addresses.Items_add}/${id}`);
        return result;
    }
}

export default ItemService;