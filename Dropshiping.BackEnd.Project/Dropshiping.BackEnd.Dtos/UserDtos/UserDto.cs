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
    public class UserDto : BasicUserDto
    {
        public string Image { get; set; }
        public ICollection<UserRatingDto> UserRatings { get; set; }
        public ICollection<CardDto> Cards { get; set; }
        public ICollection<UserOrderDto> UserOrders { get; set; }

        public UserDto()
        {
            UserRatings = new List<UserRatingDto>();
            Cards = new List<CardDto>();
            UserOrders = new List<UserOrderDto>();
        }
    }
}
