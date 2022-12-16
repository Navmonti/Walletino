import { Actions } from "../../constants/actionTypes";
import { ICategory } from "../../interfaces/category";
import { categoryService } from "../../services";

const AddCategory = (category: ICategory) => {
    var result = categoryService.add(category);
    return {
        type: Actions.ADD_CATEGORY,
        payload: result
    }
}

const EditCategory = (category: ICategory) => {
    var result = categoryService.edit(category);
    return {
        type: Actions.EDIT_CATEGORY,
        payload: result
    }
}


const RemoveCategory = (id: number) => {
    var result = categoryService.remove(id);
    return {
        type: Actions.DELETE_CATEGORY,
        payload: result
    }
}

const GetAllCategory = (category: ICategory) => {
    var result = categoryService.getAll();
    return {
        type: Actions.GETALL_CATEGORY,
        payload: result
    }
}

const GetCategoryById = (id: number) => {
    var result = categoryService.getById(id);
    return {
        type: Actions.GETBYID_CATEGORY,
        payload: result
    }
}

export {
    AddCategory,
    EditCategory,
    RemoveCategory,
    GetAllCategory,
    GetCategoryById 
}