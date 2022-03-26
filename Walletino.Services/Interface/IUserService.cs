using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;

namespace Walletino.Services.Interface
{
    public interface IUserService
    {
        Task<IResponse<User>> Add(User model);
        Task<IResponse<User>> Update(User model);
        Task<IResponse<User>> Delete(int userId);
        Task<IResponse<IEnumerable<User>>> GetAll();
        Task<IResponse<User>> GetById(int userId);
    }
}
