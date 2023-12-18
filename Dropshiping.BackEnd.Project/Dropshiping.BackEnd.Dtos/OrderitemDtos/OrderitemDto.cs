
namespace Dropshiping.BackEnd.Dtos.OrderItemDtos
{
    public class OrderItemDto
    {
        public string Id { get; set; }
        public int Quantity { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductImage {  get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
        public decimal Total
        {
            get
            {
                return Price * Quantity;
            }
        }

             
    }
}
