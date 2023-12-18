
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class AddUserDto : RegisterUserDto
    {
        public RoleEnum Role { get; set; }
 
    }
}
