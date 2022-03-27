using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;
using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;

namespace Walletino.Services.Implement
{
    public class AccountService : IAccountService
    {
        private readonly UnitOfWork _unitOfWork;
        public AccountService(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IResponse<Account>> Add(Account model)
        {
            var response = new Response<Account>();
            var call = await _unitOfWork.AccountRepo.Add(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;

        }

        public async Task<IResponse<Account>> Update(Account model)
        {
            var response = new Response<Account>();
            var call = await _unitOfWork.AccountRepo.Update(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Account>> Delete(int accountId)
        {
            var response = new Response<Account>();
            var call = await _unitOfWork.AccountRepo.Delete(accountId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<IEnumerable<Account>>> GetAll()
        {
            var response = new Response<IEnumerable<Account>>();
            var call = await _unitOfWork.AccountRepo.GetAll();
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Account>> GetById(int accountId)
        {
            var response = new Response<Account>();
            var call = await _unitOfWork.AccountRepo.GetById(accountId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }
    }
}
