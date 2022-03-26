using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;

namespace Walletino.Services.Interface
{
    public interface ICategoryService
    {
        Task<IResponse<Category>> Add(Category model);
        Task<IResponse<Category>> Update(Category model);
        Task<IResponse<Category>> Delete(int categoryId);
        Task<IResponse<IEnumerable<Category>>> GetAll();
        Task<IResponse<Category>> GetById(int categoryId);
    }
}
