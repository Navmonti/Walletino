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

        private AccountRepository _accountRepo { get; set; }
        private CategoryRepository _categoryRepo { get; set; }
        private ItemRepository _itemRepo { get; set; }
        private TransactionRepository _transactionRepo { get; set; }
        private UserRepository _userRepo { get; set; }


        public AccountRepository AccountRepo
        {
            get
            {
                if (_accountRepo == null)
                {
                    _accountRepo = new AccountRepository(_context);
                }
                return _accountRepo;
            }
        }
        public CategoryRepository CategoryRepo
        {
            get
            {
                if (_categoryRepo == null)
                {
                    _categoryRepo = new CategoryRepository(_context);
                }
                return _categoryRepo;
            }
        }
        public ItemRepository ItemRepo
        {
            get
            {
                if (_itemRepo == null)
                {
                    _itemRepo = new ItemRepository(_context);
                }
                return _itemRepo;
            }
        }
        public TransactionRepository TransactionRepo
        {
            get
            {
                if (_transactionRepo == null)
                {
                    _transactionRepo = new TransactionRepository(_context);
                }
                return _transactionRepo;
            }
        }
        public UserRepository UserRepo
        {
            get
            {
                if (_userRepo == null)
                {
                    _userRepo = new UserRepository(_context);
                }
                return _userRepo;
            }
        }

        public void SaveChange()
        {
            _context.SaveChanges();
        }
        public void Dispose(bool disposing)
        {
            if (disposing) _context.Dispose();
        }
        public void Dispose()
        {
            _context.Dispose();
        }



    }
}
