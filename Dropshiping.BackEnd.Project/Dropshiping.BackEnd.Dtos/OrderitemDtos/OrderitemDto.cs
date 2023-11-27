using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.Dtos.OrderitemDtos
{
    public class OrderitemDto
    {
        public string Id {get; set;}
        public int Quantity { get; set; }
        public string OrderId { get; set; }
        public string ProductSizeId { get; set; }
    }
}
