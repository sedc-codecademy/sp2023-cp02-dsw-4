using Dropshiping.BackEnd.Dtos.UserDtos;

namespace Dropshiping.BackEnd.Services.UserServices.Interface
{
    public interface IUserService
    {
        List<BasicUserDto> GetAll();
        UserDto GetById(string id);
        void Add(AddUserDto addUserDto);
        void Update(string id, RegisterUserDto registerUserDto);
        void DeleteById(string id);
        void RegisterUser(RegisterUserDto registerUserDto);
        UserTokenDto LoginUser(LoginUserDto loginUserDto);
    }
}
