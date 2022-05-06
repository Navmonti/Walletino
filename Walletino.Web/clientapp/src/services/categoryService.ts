import addresses from "../constants/addresses"
import axios from "../constants/network"
import { ICategory} from "../interfaces/category"

const CategoryService = () => {
    const add = async (dataset: ICategory) => {
        var result = axios.post(`${addresses.Categories_add}`, dataset);
        return result;
    }

    const edit = async (dataset: ICategory) => {
        var result = axios.put(`${addresses.Categories_update}`, dataset);
        return result;
    }

    const remove = async (id: number) => {
        var result = axios.delete(`${addresses.Categories_remove}/${id}`);
        return result;
    }

    const getAll = async () => {
        var result = axios.get(`${addresses.Categories_add}`);
        return result;
    }

    const getById = async (id: number) => {
        var result = axios.get(`${addresses.Categories_add}/${id}`);
        return result;
    }
}

export default CategoryService;