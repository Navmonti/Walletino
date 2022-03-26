using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class UserRepository : GenericRepository<User>
    {
        public UserRepository(WalletinoDbContext context) : base(context)
        {
        }
    }
}
