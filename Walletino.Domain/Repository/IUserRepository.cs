using Walletino.Core.Repository;
using Walletino.Domain.Entities;

namespace Walletino.Domain.Repository
{
    public interface IUserRepository : IGenericRepository<Transaction>
    {
    }
}
