using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;

namespace Walletino.Services.Interface
{
    public interface IAccountService
    {
        Task<IResponse<Account>> Add(Account model);
        Task<IResponse<Account>> Update(Account model);
        Task<IResponse<Account>> Delete(int accountId);
        Task<IResponse<IEnumerable<Account>>> GetAll();
        Task<IResponse<Account>> GetById(int accountId);
        Task<IResponse<Account>> GetByUserId(int userId);
    }
}
