using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class TransactionRepository : GenericRepository<Transaction>
    {
        public TransactionRepository(WalletinoDbContext context) : base(context)
        {
        }
    }
}
