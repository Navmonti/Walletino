using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Walletino.Domain.Entities
{
    [Table("Accounts")]
    public class Account : Entity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountId { get; set; }

        
        public int UserId { get; set; }
        public User User { get; set; }

        public string AccountNumber{ get; set; }
        public string AccountTitle{ get; set; }

        public ICollection<Transaction> Transactions { get; set; }
    }
}
