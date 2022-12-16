import { Actions } from "../../constants/actionTypes";
import { IAccount } from "../../interfaces/account"; 
import { accountService }  from "../../services";

const AddAccount = (account: IAccount) => {
    var result = accountService.add(account);
    return {
        type: Actions.ADD_ACCOUNT,
        payload: result
    }
}

const EditAccount = (account: IAccount) => {
    var result = accountService.edit(account);
    return {
        type: Actions.EDIT_ACCOUNT,
        payload: result
    }
}


const RemoveAccount = (id: number) => {
    var result = accountService.remove(id);
    return {
        type: Actions.DELETE_ACCOUNT,
        payload: result
    }
}

const GetAllAccount = async () => {
    var result = await accountService.getAll();
    debugger;
    return {
        type: Actions.GETALL_ACCOUNT,
        payload: result
    }
}

const GetAccountById = (id: number) => {
    var result = accountService.getById(id);
    return {
        type: Actions.GETBYID_ACCOUNT,
        payload: result
    }
}

const GetAccountByUserId = (userId: number) => {
    var result = accountService.getByUserId(userId);
    return {
        type: Actions.GETBYUSERID_ACCOUNT,
        payload: result
    }
}

export {
    AddAccount,
    EditAccount,
    RemoveAccount,
    GetAllAccount,
    GetAccountById,
    GetAccountByUserId
}