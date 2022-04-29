using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    internal class AuthRepository : GenericRepository<User>
    {
        public AuthRepository(WalletinoDbContext context) : base(context)
        {
        }
    }
}
