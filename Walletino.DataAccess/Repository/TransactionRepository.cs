using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;


namespace Walletino.DataAccess.Repository
{
    public class TransactionRepository : GenericRepository<Transaction>
    {
        private readonly WalletinoDbContext _context;
        private readonly DbSet<Transaction> _entity;
        public TransactionRepository(WalletinoDbContext context) : base(context)
        {
            _context = context;
            _entity = context.Set<Transaction>();
        }
        public async Task<Transaction> GetByAccountId(int accountId)
        {
            return await _entity.Include(x=> x.Account).FirstOrDefaultAsync(x => x.AccountId == accountId);
        }
    }
}
