using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Walletino.Core.Entities;

namespace Walletino.Domain.Entities
{
    public class Account : Entity
    {
        [Key]
        public int AccountId { get; set; }

        
        public int UserId { get; set; }
        public User User { get; set; }

        public string AccountNumber{ get; set; }
        public string AccountTitle{ get; set; } 
}
}
