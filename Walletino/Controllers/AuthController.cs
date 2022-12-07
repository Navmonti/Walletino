using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Walletino.Domain.Dtos;
using Walletino.Services.Interface;

namespace Walletino.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet]
        public async Task<IActionResult> Login(string username, string Password)
        {
            return Ok(await _authService.LoginAsync(username, Password));
        }

        [HttpPost]
        public async Task<IActionResult> SignUp(UserDto user)
        {
            return Ok(await _authService.SignupAsync(user));
        }

        [HttpPost]
        public async Task<IActionResult> GenerateToken(int userId)
        {
            return Ok(await _authService.GenerateToken(userId));
        }
    }
}
