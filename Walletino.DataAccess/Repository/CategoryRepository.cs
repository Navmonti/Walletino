using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class CategoryRepository : GenericRepository<Category>
    {
        private readonly WalletinoDbContext _context;
        private readonly DbSet<Category> _entity;
        public CategoryRepository(WalletinoDbContext context) : base(context)
        {
            _context = context;
            _entity = context.Set<Category>();
        }

       
    }
}
