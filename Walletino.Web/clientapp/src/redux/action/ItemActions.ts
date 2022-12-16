import { Actions } from "../../constants/actionTypes";
import { IItem } from "../../interfaces/item";
import { itemService } from "../../services";

const AddItem = (item: IItem) => {
    var result = itemService.add(item);
    return {
        type: Actions.ADD_ITEM,
        payload: result
    }
}

const EditItem = (item: IItem) => {
    var result = itemService.edit(item);
    return {
        type: Actions.EDIT_ITEM,
        payload: result
    }
}


const RemoveItem = (id: number) => {
    var result = itemService.remove(id);
    return {
        type: Actions.DELETE_ITEM,
        payload: result
    }
}

const GetAllItem = (item: IItem) => {
    var result = itemService.getAll();
    return {
        type: Actions.GETALL_ITEM,
        payload: result
    }
}

const GetItemById = (id: number) => {
    var result = itemService.getById(id);
    return {
        type: Actions.GETBYID_ITEM,
        payload: result
    }
}

export {
    AddItem,
    EditItem,
    RemoveItem,
    GetAllItem,
    GetItemById
}