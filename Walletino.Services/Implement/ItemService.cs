using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;
using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;

namespace Walletino.Services.Implement
{
    public class ItemService : IItemService 
    {
        private readonly UnitOfWork _unitOfWork;
        public ItemService(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IResponse<Item>> Add(Item model)
        {
            var response = new Response<Item>();
            var call = await _unitOfWork.ItemRepo.Add(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;

        }

        public async Task<IResponse<Item>> Update(Item model)
        {
            var response = new Response<Item>();
            var call = await _unitOfWork.ItemRepo.Update(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Item>> Delete(int itemId)
        {
            var response = new Response<Item>();
            var call = await _unitOfWork.ItemRepo.Delete(itemId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<IEnumerable<Item>>> GetAll()
        {
            var response = new Response<IEnumerable<Item>>();
            var call = await _unitOfWork.ItemRepo.GetAll();
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Item>> GetById(int itemId)
        {
            var response = new Response<Item>();
            var call = await _unitOfWork.ItemRepo.GetById(itemId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }
    }
}
