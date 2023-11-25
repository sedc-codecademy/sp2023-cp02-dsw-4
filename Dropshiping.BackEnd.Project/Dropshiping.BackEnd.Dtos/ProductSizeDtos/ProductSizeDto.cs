using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.Dtos.ProductSizeDtos
{
    public class ProductSizeDto
    {
        public string Id { get; set; }
        public int Stock { get; set; }
        public string ProductId { get; set; }
        public string SizeId { get; set; }
        public string ColorId { get; set; }
    }
}
