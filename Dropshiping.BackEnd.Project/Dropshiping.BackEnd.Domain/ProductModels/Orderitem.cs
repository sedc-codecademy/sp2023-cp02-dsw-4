namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class OrderItem : BaseEntity
    {
        public int Quantity { get; set; }

        // Relation conections
        
        public string OrderId { get; set; }
        public virtual Order Order { get; set; }
        
        public string ProductSizeId {  get; set; }

        public virtual ProductSize ProductSize { get; set; }
    }
}
