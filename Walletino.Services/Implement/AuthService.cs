using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;

namespace Walletino.Services.Implement
{
    public class AuthService : IAuthService
    {
        private readonly UnitOfWork _unitOfWork;
        public AuthService (UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //public async IResponse<User> Login(string username , string password) {
            
        //    var response = new Response<User> ();
        //    //return await _unitOfWork.AuthRepo.GetAll();
        //    return null;
        //}
    }
}
