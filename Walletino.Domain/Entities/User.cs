using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Walletino.Domain.Enums;

namespace Walletino.Domain.Entities
{
    [Table("Users")]
    public class User : Entity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }

        [Required]
        public string Firstname { get; set; }

        public string Lastname { get; set; }
        
        public GenderType Gender { get; set; }

        public string Email { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string SaltPassword { get; set; }

        public string RefreshedToken { get; set; }

        public string RefreshedTokenDate { get; set; }

        public ICollection<Account> Accounts { get; set; }
        public ICollection<Item> Items { get; set; }
    }
}
