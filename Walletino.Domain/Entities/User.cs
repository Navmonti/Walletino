using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Walletino.Domain.Entities
{
    [Table("Users")]
    public class User : Entity
    {
        [Key]
        public int UserId { get; set; }

        [Required]  
        public string Title { get; set; }

        public string Firstname { get; set; }

        public string lastname { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string SaltPassword { get; set; }

        public string RefreshedToken { get; set; }

        public string RefreshedTokenDate { get; set; }

        [ForeignKey("AccountId")]
        public ICollection<Account> Accounts { get; set; }
        
        [ForeignKey("ItemId")]
        public ICollection<Item> Items { get; set; }
    }
}
