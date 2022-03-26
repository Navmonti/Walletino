using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Walletino.Core.Entities
{
    public interface IEntity
    {
        int CreateBy { get; set; }
        DateTime CreateDate { get; set; }
        int ModifiedBy { get; set; }
        DateTime ModifiedDate { get; set; }
    }
}
