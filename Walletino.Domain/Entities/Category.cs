using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Walletino.Domain.Entities
{
    [Table("Categories")]
    public class Category: Entity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }
        public string Title { get; set; }

        public ICollection<Item> Items { get; set; } 
    }
}
