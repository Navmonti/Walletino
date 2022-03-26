using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;

namespace Walletino.Services.Interface
{
    public interface IItemService
    {
        Task<IResponse<Item>> Add(Item model);
        Task<IResponse<Item>> Update(Item model);
        Task<IResponse<Item>> Delete(int itemId);
        Task<IResponse<IEnumerable<Item>>> GetAll();
        Task<IResponse<Item>> GetById(int itemId);
    }
}
