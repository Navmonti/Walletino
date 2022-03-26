using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;

namespace Walletino.Services.Interface
{
    public interface ITransactionService
    {
        Task<IResponse<Transaction>> Add(Transaction model);
        Task<IResponse<Transaction>> Update(Transaction model);
        Task<IResponse<Transaction>> Delete(int transactionId);
        Task<IResponse<IEnumerable<Transaction>>> GetAll();
        Task<IResponse<Transaction>> GetById(int transactionId);
    }
}
