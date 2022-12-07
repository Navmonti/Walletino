using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class ItemRepository : GenericRepository<Item>
    {
        private readonly WalletinoDbContext _context;
        private readonly DbSet<Item> _entity;
        public ItemRepository(WalletinoDbContext context) : base(context)
        {
            _context = context;
            _entity = context.Set<Item>();
        }
        public async Task<IEnumerable<Item>> GetAllItemsByUser()
        {
            var x = await _entity.Include(x => x.User).ToListAsync();
            return x;
        }
         
    }
}
