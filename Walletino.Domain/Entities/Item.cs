using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Walletino.Domain.Entities
{
    [Table("Items")]
    public class Item : Entity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ItemId { get; set; }

        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
        public int CategoryId { get; set; } 

        public string Title { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int? UserId { get; set; }
    }
}
