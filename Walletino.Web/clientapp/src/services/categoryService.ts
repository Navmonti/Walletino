import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ICategory } from "../interfaces/category"

export default class CategoryService {
    static async add(dataset: ICategory) {
        const result = axios.post(`${addresses.Items_add}`, dataset);
        return result;
    }

    static async edit(dataset: ICategory) {
        const result = axios.put(`${addresses.Items_update}`, dataset);
        return result;
    }

    static async remove(id: number) {
        var result = axios.delete(`${addresses.Items_remove}/${id}`);
        return result;
    }

    static async getAll() {
        var result = axios.get(`${addresses.Items_getAll}`);
        return result;
    }
    static async getById(id: number) {
        var result = axios.get(`${addresses.Items_getById}/${id}`);
        return result;
    }
}

