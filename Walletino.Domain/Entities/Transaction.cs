using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Walletino.Domain.Enums;

namespace Walletino.Domain.Entities
{

    [Table("Transactions")]
    public class Transaction : Entity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TransactionId { get; set; }

        public int ItemId { get; set; }

        [Required]  
        public TransactionType Type { get; set; }

        [Required]
        public decimal Value { get; set; }

        [ForeignKey("AccountId")]
        public Account Account { get; set; }
        public int AccountId { get; set; }

    }
}
