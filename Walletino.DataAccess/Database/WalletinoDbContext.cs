using Microsoft.EntityFrameworkCore;
using Walletino.Domain.Entities;

namespace Walletino.DataAccess.Database
{
    public class WalletinoDbContext : DbContext
    {
        public WalletinoDbContext(DbContextOptions<WalletinoDbContext> options) : base(options)
        {


        }

        public DbSet<Account> Accounts { get; set; }    
        public DbSet<Category>  Categories { get; set; }    
        public DbSet<Item> Items { get; set; }    
        public DbSet<Transaction> Transactions { get; set; }    
        public DbSet<User> Users { get; set; }
    }
}
