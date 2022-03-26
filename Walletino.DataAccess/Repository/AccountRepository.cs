using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class AccountRepository : GenericRepository<Account>
    {
        public AccountRepository(WalletinoDbContext context) : base(context)
        {
        }
    }
}
