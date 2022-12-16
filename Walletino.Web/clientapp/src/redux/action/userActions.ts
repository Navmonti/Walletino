import { Actions } from "../../constants/actionTypes";
import { IUser } from "../../interfaces/user";
import { userService } from "../../services";

const AddUser = (user: IUser) => {
    var result = userService.add(user);
    return {
        type: Actions.ADD_USER,
        payload: result
    }
}

const EditUser = (user: IUser) => {
    var result = userService.edit(user);
    return {
        type: Actions.EDIT_USER,
        payload: result
    }
}


const RemoveUser = (id: number) => {
    var result = userService.remove(id);
    return {
        type: Actions.DELETE_USER,
        payload: result
    }
}

const GetAllUser = (user: IUser) => {
    var result = userService.getAll();
    return {
        type: Actions.GETALL_USER,
        payload: result
    }
}

const GetUserById = (id: number) => {
    var result = userService.getById(id);
    return {
        type: Actions.GETBYID_USER,
        payload: result
    }
}

export {
    AddUser,
    EditUser,
    RemoveUser,
    GetAllUser,
    GetUserById 
}