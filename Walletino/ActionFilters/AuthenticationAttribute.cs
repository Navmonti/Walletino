using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using Walletino.Domain.Dtos;

namespace Walletino.ActionFilters
{
    public class AuthenticationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var token = filterContext.HttpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            if (token == null)
                filterContext.Result = new JsonResult(new { HttpStatusCode.Unauthorized });
            else
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtSecurityToken = tokenHandler.ReadJwtToken(token);

                if (jwtSecurityToken != null)
                {
                    var userclaims = jwtSecurityToken.Claims;
                    var users = new UserDto()
                    {
                        UserId = Int32.Parse(userclaims.FirstOrDefault(x => x.Type == "UserId")?.Value),
                        Firstname = userclaims.FirstOrDefault(x => x.Type == "Firstname")?.Value,
                        Lastname = userclaims.FirstOrDefault(x => x.Type == "Lastname")?.Value,
                        Email = userclaims.FirstOrDefault(x => x.Type == "Email")?.Value,
                        Username = userclaims.FirstOrDefault(x => x.Type == "Username")?.Value,
                    };
                }
            }
        }
    }
}
