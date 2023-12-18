
using Dropshiping.BackEnd.Dtos.OrderDtos;

namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class UserDto : BasicUserDto
    {
        public string Image { get; set; }
        public ICollection<UserRatingDto> UserRatings { get; set; }
        public ICollection<UserCardDto> Cards { get; set; }
        public ICollection<OrderDto> UserOrders { get; set; }

        public UserDto()
        {
            UserRatings = new List<UserRatingDto>();
            Cards = new List<UserCardDto>();
            UserOrders = new List<OrderDto>();
        }
    }
}
