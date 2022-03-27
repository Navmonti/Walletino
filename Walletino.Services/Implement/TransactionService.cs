using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;
using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;

namespace Walletino.Services.Implement
{
    public class TransactionService : ITransactionService
    {
        private readonly UnitOfWork _unitOfWork;
        public TransactionService(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IResponse<Transaction>> Add(Transaction model)
        {
            var response = new Response<Transaction>();
            var call = await _unitOfWork.TransactionRepo.Add(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;

        }

        public async Task<IResponse<Transaction>> Update(Transaction model)
        {
            var response = new Response<Transaction>();
            var call = await _unitOfWork.TransactionRepo.Update(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Transaction>> Delete(int transactionId)
        {
            var response = new Response<Transaction>();
            var call = await _unitOfWork.TransactionRepo.Delete(transactionId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<IEnumerable<Transaction>>> GetAll()
        {
            var response = new Response<IEnumerable<Transaction>>();
            var call = await _unitOfWork.TransactionRepo.GetAll();
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Transaction>> GetById(int transactionId)
        {
            var response = new Response<Transaction>();
            var call = await _unitOfWork.TransactionRepo.GetById(transactionId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }
    }
}
