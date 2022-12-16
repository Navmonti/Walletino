using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Walletino.ActionFilters;
using Walletino.Domain.Entities;
using Walletino.Services.Interface;

namespace Walletino.Controllers
{
    [Authentication]
    [Route("[controller]/[action]")]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionService _transactionService;
        public TransactionsController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Transaction transaction) => Ok(await _transactionService.Add(transaction));

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Transaction transaction) => Ok(await _transactionService.Update(transaction));

        [HttpDelete("id")]
        public async Task<IActionResult> Delete(int transactionId) => Ok(await _transactionService.Delete(transactionId));

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _transactionService.GetAll());

        [HttpGet("id")]
        public async Task<IActionResult> GetById(int transactionId) => Ok(await _transactionService.GetById(transactionId));

        [HttpGet("accountId")]
        public async Task<IActionResult> GetByAccountId(int accountId) => Ok(await _transactionService.GetByAccountId(accountId));
    }
}
