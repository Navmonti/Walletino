
type Transactiontype = "Deposit" | "Withdraw"

interface ITransaction {
    transactionId: number,
    itemId: number,
    Type: Transactiontype,
    value: string
}

export default ITransaction;