using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class CategoryRepository : GenericRepository<Category>
    {
        public CategoryRepository(WalletinoDbContext context) : base(context)
        {
        }
    }
}
