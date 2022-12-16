import { Actions } from "../../constants/actionTypes";
import { IAccount } from "../../interfaces/account";

 
const initialState: IAccount = {
    accountId: 0,
    accountNumber:'0',
    accountTitle: ''
}

const accountReducer = (state: any, action: any) => {
    debugger;
    switch (action.type) {
        case Actions.ADD_ACCOUNT:
            return null;

        case Actions.EDIT_ACCOUNT:
            return null;

        case Actions.DELETE_ACCOUNT:
            return null;

        case Actions.GETALL_ACCOUNT:
            debugger;
            return {...state};

        case Actions.GETBYID_ACCOUNT:
            return null;
        default:
            return null;
    }
};


export default accountReducer;