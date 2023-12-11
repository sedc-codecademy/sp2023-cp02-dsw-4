using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Enums;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Dropshiping.BackEnd.Mappers.OrderMappers;


namespace Dropshiping.BackEnd.Mappers.UserMappers
{
    public static class UserMapper
    {
        //RegisterUser
        public static User ToUserModel(this RegisterUserDto registerUserDto, string hashPassword)
        {
            return new User()
            {
                FirstName = registerUserDto.FirstName,
                LastName = registerUserDto.LastName,
                Username = registerUserDto.Username,
                Password = hashPassword,
                Role = RoleEnum.User,
                Email = registerUserDto.Email,
                PhoneNumber = registerUserDto.PhoneNumber,
                Address = registerUserDto.Address,
                PostalCode = registerUserDto.PostalCode,
                City = registerUserDto.City,
                Image = registerUserDto.Image,
            };
        }
        //AddUser
        public static User ToUserDomain(this AddUserDto addUserDto, string hashPassword)
        {
            return new User()
            {
                FirstName = addUserDto.FirstName,
                LastName = addUserDto.LastName,
                Username = addUserDto.Username,
                Password = hashPassword,
                Role = addUserDto.Role,
                Email = addUserDto.Email,
                PhoneNumber = addUserDto.PhoneNumber,
                Address = addUserDto.Address,
                PostalCode = addUserDto.PostalCode,
                City = addUserDto.City,
                Image = addUserDto.Image,
            };
        }
        //GetById
        public static UserDto ToUserDto(this User user)
        {
            var userDto = new UserDto()
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Role = Enum.GetName(typeof(RoleEnum), user.Role),
                PhoneNumber = user.PhoneNumber,
                Address = user.Address,
                PostalCode = user.PostalCode,
                City = user.City,
                Username = user.Username,
                Image = user.Image,
            };

            if (user.Ratings != null && user.Ratings.Count > 0)
            {
                userDto.UserRatings = user.Ratings.Select(x => x.ToUserRatingDto()).ToList();

            }
            if (user.Cards != null && user.Cards.Count > 0)
            {
                userDto.Cards = user.Cards.Select(c => c.ToUserCardDto()).ToList();

            }
            if (user.UserOrders != null && user.UserOrders.Count > 0)
            {
                userDto.UserOrders = user.UserOrders.Select(c => c.Order.ToOrderDto()).ToList();

            }

            return userDto;
        }
        //GetAll
        public static BasicUserDto ToBasicUserDto(this User user)
        {
            var userDto = new BasicUserDto()
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Role = Enum.GetName(typeof(RoleEnum), user.Role),
                PhoneNumber = user.PhoneNumber,
                Address = user.Address,
                PostalCode = user.PostalCode,
                City = user.City,
                Username = user.Username,
            };

            return userDto;
        }
        //Login
        public static UserTokenDto ToUserTokenDto(this User user)
        {
            var userDto = new UserTokenDto()
            {
                Id = user.Id,
            };

            return userDto;
        }

    }
}
