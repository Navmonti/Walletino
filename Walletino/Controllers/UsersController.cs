using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Walletino.ActionFilters;
using Walletino.Domain.Entities;
using Walletino.Services.Interface;

namespace Walletino.Controllers
{
    [Authentication]
    [Route("[controller]/[action]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService; 
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] User user) => Ok(await _userService.Add(user));

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] User user) => Ok(await _userService.Update(user));

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int userId) => Ok(await _userService.Delete(userId));

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _userService.GetAll());

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int userId) => Ok(await _userService.GetById(userId));

    }
}
