using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Domain.UserModels
{
    public class User : BaseEntity
    {
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public string Username {  get; set; }
        public string Password { get; set; } 
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address {  get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Image { get; set; }

        public RoleEnum Role { get; set; }

        public virtual ICollection<UserOrder> UserOrders { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; } 
        public virtual ICollection<Card> Cards { get; set; }
    }
}
