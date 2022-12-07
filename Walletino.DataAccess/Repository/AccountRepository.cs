using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class AccountRepository : GenericRepository<Account>
    {
        private readonly WalletinoDbContext _context;
        private readonly DbSet<Account> _entity;
        public AccountRepository(WalletinoDbContext context) : base(context)
        {
            _context = context;
            _entity = context.Set<Account>();
        }
        public async Task<Account> GetByUserId(int userId)
        {
            return await _entity.FirstOrDefaultAsync(x => x.UserId == userId);
        }
    }
}
