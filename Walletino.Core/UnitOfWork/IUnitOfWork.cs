using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Walletino.Core.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        void SaveChange();
        void Dispose(bool disposing);
    }
}
