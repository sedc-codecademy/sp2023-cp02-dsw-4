using Dropshiping.BackEnd.Dtos.OrderItemDtos;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.OrderDtos
{
    public class AddOrderDto
    {
        public List<AddOrderItemDto> OrderItems { get; set; }
        public string UserId { get; set; }
        public string Address { get; set; } 
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        public string Note { get; set; }
        public PaymentStatusEnum PaymentStatus { get; set; }
        public CardTypeEnum CardType { get; set; }
        public string CardNumber { get; set; }
        public string CardHolder { get; set; } //??
        public string ExpirationDate { get; set; } //???
        public int SecurityCode { get; set; } //???
    }
}
