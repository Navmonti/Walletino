using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Walletino.Domain.Entities;
using Walletino.Services.Interface;

namespace Walletino.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemService _itemService;
        public ItemsController(IItemService itemService)
        {
            _itemService = itemService;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Item item) => Ok(await _itemService.Add(item));

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Item item) => Ok(await _itemService.Update(item));

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int itemId) => Ok(await _itemService.Delete(itemId));

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _itemService.GetAll());

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int itemId) => Ok(await _itemService.GetById(itemId));
    }
}
