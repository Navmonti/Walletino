import addresses from "../constants/addresses"
import axios from "../constants/network"
import { IItem } from "../interfaces/item"

export default class ItemService {
    static async add(dataset: IItem) {
        const result = axios.post(`${addresses.Categories_add}`, dataset);
        return result;
    }

    static async edit(dataset: IItem) {
        const result = axios.put(`${addresses.Categories_update}`, dataset);
        return result;
    }

    static async remove(id: number) {
        var result = axios.delete(`${addresses.Categories_remove}/${id}`);
        return result;
    }

    static async getAll() {
        var result = axios.get(`${addresses.Categories_getAll}`);
        return result;
    }
    static async getById(id: number) {
        var result = axios.get(`${addresses.Categories_getById}/${id}`);
        return result;
    }
}