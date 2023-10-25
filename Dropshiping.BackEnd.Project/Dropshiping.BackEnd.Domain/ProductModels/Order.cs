using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Order : BaseEntity
    {
        public DateTime PurchasedTime { get; set; }
       
        public string Address { get; set; } 
        public string PostalCode{  get; set; }   
        public string City { get; set; }
        public int PhoneNumber {  get; set; }
        public string Note {  get; set; }
        public decimal Shipping { get; set; }
        public decimal Price { get; set; }

        public StatusEnum Status { get; set; }
        public PaymentStatusEnum PaymentStatus { get; set; }
        public CardTypeEnum CardType { get; set; }
        public int CardNumber { get; set; }
        public string CardHolder { get; set; }
        public DateTime ExpirationDate { get; set; }
        public int SecurityCode { get; set; }

        //Relation conections
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public virtual ICollection<UserOrder> UserOrders { get; set; }
    }
}
