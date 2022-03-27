using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;
using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;

namespace Walletino.Services.Implement
{
    public class UserService : IUserService
    {
        private readonly UnitOfWork _unitOfWork;
        public UserService(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IResponse<User>> Add(User model)
        {
            var response = new Response<User>();
            var call = await _unitOfWork.UserRepo.Add(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;

        }

        public async Task<IResponse<User>> Update(User model)
        {
            var response = new Response<User>();
            var call = await _unitOfWork.UserRepo.Update(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<User>> Delete(int userId)
        {
            var response = new Response<User>();
            var call = await _unitOfWork.UserRepo.Delete(userId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<IEnumerable<User>>> GetAll()
        {
            var response = new Response<IEnumerable<User>>();
            var call = await _unitOfWork.UserRepo.GetAll();
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<User>> GetById(int userId)
        {
            var response = new Response<User>();
            var call = await _unitOfWork.UserRepo.GetById(userId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }
    }
}
