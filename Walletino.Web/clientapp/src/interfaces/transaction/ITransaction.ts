
type Transactiontype = "Deposit" | "Withdraw"

interface ITransaction {
    transactionId: number,
    itemId: number,
    Type: Transactiontype,
    value: string,

    isLoading: false,
    isDisable: false,

    isSuccessful: false,
    succeessfulMessage: '',

    isError: false,
    errorMessage: '',
}

export default ITransaction;