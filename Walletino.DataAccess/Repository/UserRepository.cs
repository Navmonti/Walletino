using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Walletino.Core.Repository;
using Walletino.DataAccess.Database;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Repository
{
    public class UserRepository : GenericRepository<User>
    {
        private readonly WalletinoDbContext _context;
        private readonly DbSet<User> _entity;
        public UserRepository(WalletinoDbContext context) : base(context)
        {
            _context = context;
            _entity = context.Set<User>();
        }
        public async Task<User> GetUserByUsernameAndPassword(string username, string password)
        {
           var x =  await _entity.FirstOrDefaultAsync(x => x.Username == username && x.Password == password);
            return x;
        }

        public async Task<User> GetUserByUserId(int userId)
            => await _entity.FirstOrDefaultAsync(x => x.UserId == userId);
    }
}
