using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.RatingDtos;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class BasicUserDto
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public RoleEnum Role { get; set; }
        public string? PhoneNumber { get; set; }
        public string Address { get; set; }
        public string? PostalCode { get; set; }
        public string City { get; set; }
        public string Username { get; set; }

    }
}
