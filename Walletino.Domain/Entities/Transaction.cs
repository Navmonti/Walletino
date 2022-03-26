using System.ComponentModel.DataAnnotations;
using Walletino.Domain.Enums;

namespace Walletino.Domain.Entities
{
    public class Transaction : Entity
    {
        [Key]
        public int TransactionId { get; set; }

        public int ItemId { get; set; }

        [Required]  
        public TransactionType Type { get; set; }

        [Required]
        public decimal Value { get; set; }

    }
}
