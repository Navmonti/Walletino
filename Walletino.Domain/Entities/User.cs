using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Walletino.Domain.Entities
{
    public class User : Entity
    {
        [Key]
        public int UserId { get; set; }

        [Required]  
        public string Title { get; set; }

        [ForeignKey("AccountId")]
        public ICollection<Account> Accounts { get; set; }
        
        [ForeignKey("ItemId")]
        public ICollection<Item> Items { get; set; }
    }
}
