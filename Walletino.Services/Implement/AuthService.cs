using Walletino.Services.Interface;
using Walletino.DataAccess.UnitOfWork;
using Walletino.Core.Entities;
using Walletino.Domain.Entities;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using System;
using Walletino.Domain.Dtos;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace Walletino.Services.Implement
{
    public class AuthService : IAuthService
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;

        public AuthService(IConfiguration configuration,
            IUserService userService,
            UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _configuration = configuration;
            _userService = userService;
        }

        public async Task<string> LoginAsync(string username, string password)
        {
            try
            {
                var hashedPassword = GetStringSha256Hash(password);
                var user = await _unitOfWork.UserRepo.GetUserByUsernameAndPassword(username, hashedPassword);
                if (user != null)
                    return await GenerateToken(user.UserId);
                return null;

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task<string> SignupAsync(UserDto model)
        {
            try
            {
                var user = new User()
                {
                    Username = model.Username,
                    Email = model.Email,
                    Lastname = model.Lastname,
                    Firstname = model.Firstname,
                    Gender = model.Gender,
                    UserId = model.UserId,
                    Password = GetStringSha256Hash(model.Password),
                    //ModifiedDate = DateTime.Now,
                    //ModifiedBy = ,
                    //CreateDate = DateTime.Now,,
                    //CreateBy,
                };

                _unitOfWork.UserRepo.Add(user);
                _unitOfWork.SaveChange();

                return await GenerateToken(user.UserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<string> GenerateToken(int userId)
        {
            try
            {
                var user = await _unitOfWork.UserRepo.GetUserByUserId(userId);
                if (user == null) throw new Exception("user not exist");
                var tokenHandler = new JwtSecurityTokenHandler();
                var issuer = _configuration["Jwt:Issuer"];
                var audience = _configuration["Jwt:Audience"];
                var expired = DateTime.UtcNow.AddMinutes(5);
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:key"]));
                var credential = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                var claims = new[]
                  {
                      new Claim("UserId" , user.UserId.ToString()),
                      new Claim("Firstname", user.Firstname),
                      new Claim("Lastname", user.Lastname),
                      new Claim("Email", user.Email),
                      new Claim("Username", user.Username),
                  };
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                var token = new JwtSecurityToken(claims: claims, expires: expired, signingCredentials: credential);
                var stringToken = tokenHandler.WriteToken(token);



                return stringToken;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        private string GetStringSha256Hash(string text)
        {
            if (String.IsNullOrEmpty(text))
                return String.Empty;

            using (var sha = new System.Security.Cryptography.SHA256Managed())
            {
                byte[] textData = System.Text.Encoding.UTF8.GetBytes(text);
                byte[] hash = sha.ComputeHash(textData);
                return BitConverter.ToString(hash).Replace("-", String.Empty);
            }
        }
    }
}
