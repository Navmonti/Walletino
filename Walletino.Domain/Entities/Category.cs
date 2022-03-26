using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Walletino.Domain.Entities
{
    public class Category: Entity
    {
        [Key]
        public int CategoryId { get; set; }
        public string Title { get; set; }


        public ICollection<Item> Items { get; set; } 
    }
}
