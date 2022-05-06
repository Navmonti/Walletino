using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Walletino.Domain.Entities;
using Walletino.Services.Interface;

namespace Walletino.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }


        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Category category) => Ok(await _categoryService.Add(category));

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Category category) => Ok(await _categoryService.Update(category));

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int categoryId) => Ok(await _categoryService.Delete(categoryId));

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _categoryService.GetAll());

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int categoryId) => Ok(await _categoryService.GetById(categoryId));
    }
}
