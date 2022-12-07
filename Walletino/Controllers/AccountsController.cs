using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Walletino.ActionFilters;
using Walletino.Domain.Entities;
using Walletino.Services.Interface;

namespace Walletino.Controllers
{
    [Authentication]
    [Route("[controller]/[action]")]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountService _accountService;
        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Account account) => Ok(await _accountService.Add(account));

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Account account) => Ok(await _accountService.Update(account));

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int accountId) => Ok(await _accountService.Delete(accountId));

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _accountService.GetAll());

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int accountId) => Ok(await _accountService.GetById(accountId));

        [HttpGet("userId")]
        public async Task<IActionResult> GetByUserId(int userId) => Ok(await _accountService.GetByUserId(userId));
    }
}
