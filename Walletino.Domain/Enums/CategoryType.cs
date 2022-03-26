using System.ComponentModel;

namespace Walletino.Domain.Enums
{ 
    public enum CategoryType : byte
    {
        [Description("Deposit")] //واریز
        Deposit = 0,

        [Description("Withdraw")] //برداشت
        Withdraw = 1
    }
}
