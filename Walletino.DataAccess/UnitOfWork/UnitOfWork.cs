using Walletino.Core.UnitOfWork;
using Walletino.DataAccess.Database;
using Walletino.DataAccess.Repository;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly WalletinoDbContext _context;
        public UnitOfWork(WalletinoDbContext context)
        {
            _context = context;
        }

        public void SaveChange()
        {
            _context.SaveChanges();
        }
        public void Dispose(bool disposing)
        {
            if (disposing) _context.Dispose();
        }

        #region Repositories Defination
        public GenericRepository<Account> AccountRepo { get; set; }
        public GenericRepository<Category> CategoryRepo { get; set; }
        public GenericRepository<Item> ItemRepo { get; set; }
        public GenericRepository<Transaction> TransactionRepo { get; set; }
        public GenericRepository<User> UserRepo { get; set; }

        #endregion

    }
}
