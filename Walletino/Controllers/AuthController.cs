using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
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
        public async Task<IActionResult> Login() {
            return null;
        }


        [HttpGet]
        public async Task<IActionResult> Signup()
        {
            return null;
        }

        [HttpGet]
        public async Task<IActionResult> RefreshToken()
        {
            return null;
        }
    }
}
