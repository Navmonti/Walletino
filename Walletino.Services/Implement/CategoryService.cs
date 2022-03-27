using System.Threading.Tasks;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using System.Collections.Generic;
using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;

namespace Walletino.Services.Implement
{
    public class CategoryService : ICategoryService
    {
        private readonly UnitOfWork _unitOfWork;
        public CategoryService(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<IResponse<Category>> Add(Category model)
        {
            var response = new Response<Category>();
            var call = await _unitOfWork.CategoryRepo.Add(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;

        }

        public async Task<IResponse<Category>> Update(Category model)
        {
            var response = new Response<Category>();
            var call = await _unitOfWork.CategoryRepo.Update(model);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Category>> Delete(int categoryId)
        {
            var response = new Response<Category>();
            var call = await _unitOfWork.CategoryRepo.Delete(categoryId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<IEnumerable<Category>>> GetAll()
        {
            var response = new Response<IEnumerable<Category>>();
            var call = await _unitOfWork.CategoryRepo.GetAll();
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }

        public async Task<IResponse<Category>> GetById(int categoryId)
        {
            var response = new Response<Category>();
            var call = await _unitOfWork.CategoryRepo.GetById(categoryId);
            response.Result = call;
            response.Message = "Done";
            response.IsSuccess = true;

            return response;
        }
    }
}
