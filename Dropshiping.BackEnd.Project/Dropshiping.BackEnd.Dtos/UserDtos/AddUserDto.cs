using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class AddUserDto : RegisterUserDto
    {
        public RoleEnum Role { get; set; }
 
    }
}
