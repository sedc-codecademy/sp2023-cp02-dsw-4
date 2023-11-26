using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.OrderDtos
{
    public class BasicOrderDto
    {
        public string Id { get; set; }
        public DateTime PurchasedTime { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public int PhoneNumber { get; set; }
        public string Note { get; set; }
        public decimal Shipping { get; set; }
        public decimal Price { get; set; }

        public StatusEnum Status { get; set; }
        public PaymentStatusEnum PaymentStatus { get; set; }
        public CardTypeEnum CardType { get; set; }
    }
}
