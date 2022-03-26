using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class ItemRepository : GenericRepository<Item>
    {
        public ItemRepository(WalletinoDbContext context) : base(context)
        {
        }
    }
}
