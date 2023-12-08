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
        public string PhoneNumber {  get; set; }
        public string Note {  get; set; }
        //public decimal Shipping {  get; set; }
        //public decimal Price { get; set; }

        public DeliveryStatusEnum Status { get; set; }
        public PaymentStatusEnum PaymentStatus { get; set; }
        public CardTypeEnum CardType { get; set; }
        public long CardNumber { get; set; }
        //Relation conections
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        public virtual ICollection<UserOrder> UserOrders { get; set; }
    }
}
