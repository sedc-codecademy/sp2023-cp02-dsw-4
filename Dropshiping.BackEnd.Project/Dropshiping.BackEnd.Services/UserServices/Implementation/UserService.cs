using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Dropshiping.BackEnd.Enums;
using Dropshiping.BackEnd.Mappers.UserMappers;
using Dropshiping.BackEnd.Services.UserServices.Interface;
using Dropshiping.BackEnd.Services.UserServices.Validations;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using XSystem.Security.Cryptography;

namespace Dropshiping.BackEnd.Services.UserServices.Implementation
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        public UserService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public void RegisterUser(RegisterUserDto registerUserDto)
        {
            registerUserDto.ValidateNewUser();

            if (!ValidateUserName(registerUserDto.Username))
            {
                throw new ArgumentException("This username already exists!");
            }

            var hashedPassword = GenerateHashPassword(registerUserDto.Password);

            var user = registerUserDto.ToUserModel(hashedPassword);

            _userRepository.Add(user);

        }

        public UserTokenDto LoginUser(LoginUserDto loginUserDto)
        {
            if (string.IsNullOrEmpty(loginUserDto.Username) || string.IsNullOrEmpty(loginUserDto.Password))
            {
                throw new ArgumentException("Username or password cannot be empty");
            }

            string hashedPassword = GenerateHashPassword(loginUserDto.Password);

            var user = _userRepository.LoginUser(loginUserDto.Username, hashedPassword);

            if (user == null)
            {
                throw new ArgumentException("Password or username is wrong");
            }

            string tokenString = GenerateJWT(user);

            UserTokenDto userDto = user.ToUserTokenDto();
            userDto.Token = tokenString;

            return userDto;
        }
        public List<BasicUserDto> GetAll()
        {
            var users = _userRepository.GetAll();
            return users.Select(x => x.ToBasicUserDto()).ToList();
        }

        public UserDto GetById(string id)
        {
            var user = _userRepository.GetById(id);
            if (user == null)
            {
                throw new KeyNotFoundException($"User with id {id} is not found");
            }
            return user.ToUserDto();
        }

        public void Add(AddUserDto addUserDto)
        {
            addUserDto.ValidateNewUser();
            if (!ValidateUserName(addUserDto.Username))
            {
                throw new ArgumentException("This username already exists!");
            }

            var hashedPassword = GenerateHashPassword(addUserDto.Password);

            var user = addUserDto.ToUserDomain(hashedPassword);

            _userRepository.Add(user);
        }

        public void Update(string id, RegisterUserDto registerUserDto)
        {
            var user = _userRepository.GetById(id);

            if (user == null)
            {
                throw new KeyNotFoundException($"User with id {id} is not found");
            }

            registerUserDto.ValidateUpdateUser();

            if (!ValidateUserName(registerUserDto.Username))
            {
                throw new ArgumentException("This username already exists!");
            } 


            if (!string.IsNullOrEmpty(registerUserDto.FirstName))
            {
                user.FirstName = registerUserDto.FirstName;
            }

            if (!string.IsNullOrEmpty(registerUserDto.LastName))
            {
                user.LastName = registerUserDto.LastName;
            }
            if (!string.IsNullOrEmpty(registerUserDto.Username))
            {
                user.Username = registerUserDto.Username;
            }
            if (!string.IsNullOrEmpty(registerUserDto.Password) && (registerUserDto.Password == registerUserDto.ConfirmationPassword))
            {
                var hashedPassword = GenerateHashPassword(registerUserDto.Password);
                user.Password = hashedPassword;
            }
            if (!string.IsNullOrEmpty(registerUserDto.Email))
            {
                user.Email = registerUserDto.Email;
            }
            if (!string.IsNullOrEmpty(registerUserDto.Address))
            {
                user.Address = registerUserDto.Address;
            }
            if (!string.IsNullOrEmpty(registerUserDto.City))
            {
                user.City = registerUserDto.City;
            }
            if (!string.IsNullOrEmpty(registerUserDto.PhoneNumber))
            {
                user.PhoneNumber = registerUserDto.PhoneNumber;
            }
            if (!string.IsNullOrEmpty(registerUserDto.PostalCode))
            {
                user.PostalCode = registerUserDto.PostalCode;
            }

            _userRepository.Update(user);
        }
        public void DeleteById(string id)
        {
            var user = _userRepository.GetById(id);

            if (user == null)
            {
                throw new KeyNotFoundException($"User with id {id} was not found.");
            }

            _userRepository.Delete(id);
        }

        private bool ValidateUserName(string username)
        {
            var user = _userRepository.GetUserByUserName(username);
            if (user is null)
            {
                return true;
            }

            return false;
        }
        private string GenerateHashPassword(string password)
        {
            MD5CryptoServiceProvider md5CryptoServiceProvider = new MD5CryptoServiceProvider();

            byte[] passwordBytes = Encoding.ASCII.GetBytes(password);

            byte[] hash = md5CryptoServiceProvider.ComputeHash(passwordBytes);

            string hashedPAssword = Convert.ToHexString(hash);

            return hashedPAssword;
        }

        private string GenerateJWT(User user)
        {
            JwtSecurityTokenHandler jwtSecurityTokenHandler = new JwtSecurityTokenHandler();

            byte[] secretKeyByte = Encoding.ASCII.GetBytes(_configuration["Appsettings:SecretKey"]);

            SecurityTokenDescriptor securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = DateTime.Now.AddDays(1),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secretKeyByte), SecurityAlgorithms.HmacSha256Signature),
                Subject = new ClaimsIdentity(
                    new[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, user.Username),
                        new Claim("FullName", $"{user.FirstName} {user.LastName}"),
                        new Claim(ClaimTypes.Role, Enum.GetName(typeof(RoleEnum), user.Role)),
                    })
            };

            SecurityToken token = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);

            string tokenString = jwtSecurityTokenHandler.WriteToken(token);

            return tokenString;

        }
    }
}
