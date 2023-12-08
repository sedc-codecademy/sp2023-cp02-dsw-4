using Dropshiping.BackEnd.Dtos.OrderItemDtos;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.OrderDtos
{
    public class OrderDto
    {
        public string Id { get; set; }
        public ICollection<OrderItemDto> OrderItems { get; set; }
        public string Recepient {  get; set; }
        public string Email { get; set; }
        public DateTime PurchasedTime { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        public string Note { get; set; }
        public string Courier { get; set; }
        public decimal TotalPrice
        {
            get
            {
                return OrderItems.Sum(x => x.Total);
            }
        }
        public decimal Shipping
        {
            get
            {
                if (City.ToLower() == "skopje" || TotalPrice >= 3000)
                {
                    return 0;
                }
                return 150;
            }
        }
        public string Status { get; set; }
        public string PaymentStatus { get; set; }
    }
}
