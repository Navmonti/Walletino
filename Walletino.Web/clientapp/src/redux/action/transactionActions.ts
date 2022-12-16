import { Actions } from "../../constants/actionTypes";
import { ITransaction } from "../../interfaces/transaction";
import { transactionService } from "../../services";

const AddTransaction = (transaction: ITransaction) => {
    var result = transactionService.add(transaction);
    return {
        type: Actions.ADD_TRANSACTION,
        payload: result
    }
}

const EditTransaction = (transaction: ITransaction) => {
    var result = transactionService.edit(transaction);
    return {
        type: Actions.EDIT_TRANSACTION,
        payload: result
    }
}


const RemoveTransaction = (id: number) => {
    var result = transactionService.remove(id);
    return {
        type: Actions.DELETE_TRANSACTION,
        payload: result
    }
}

const GetAllTransaction = (transaction: ITransaction) => {
    var result = transactionService.getAll();
    return {
        type: Actions.GETALL_TRANSACTION,
        payload: result
    }
}

const GetTransactionById = (id: number) => {
    var result = transactionService.getById(id);
    return {
        type: Actions.GETBYID_TRANSACTION,
        payload: result
    }
}

const GetTransactionByAccountId = (accountId: number) => {
    var result = transactionService.getByAccountId(accountId);
    return {
        type: Actions.GETBYACCOUNTID_TRANSACTION,
        payload: result
    }
}

export {
    AddTransaction,
    EditTransaction,
    RemoveTransaction,
    GetAllTransaction,
    GetTransactionById,
    GetTransactionByAccountId
}