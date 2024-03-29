﻿interface IAccount { 
    accountId: number;
    accountNumber: string;
    accountTitle: string;
    
    isLoading: false,
    isDisable: false,

    isSuccessful: false,
    succeessfulMessage: '',

    isError: false,
    errorMessage: '',

    accounts : []
}

export default IAccount;