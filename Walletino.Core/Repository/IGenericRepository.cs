using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Walletino.Core.Repository
{
    public interface IGenericRepository<T> where T : class
    {
        Task<T> Add(T entity);
        Task<IEnumerable<T>> AddRange(IEnumerable<T> entities);
        Task<T> Update(T entity);
        Task<IEnumerable<T>> UpdateRange(IEnumerable<T> entities);
        Task<T> Delete(int id);
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(int id);
    }
}
