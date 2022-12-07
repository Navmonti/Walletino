using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Walletino.Domain.Dtos;

namespace Walletino.Services.Interface
{
    public interface IAuthService
    {
        Task<string> LoginAsync(string username, string password);
        Task<string> SignupAsync(UserDto user);
        Task<string> GenerateToken(int userId);
    }
}
