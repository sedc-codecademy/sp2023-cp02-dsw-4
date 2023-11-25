namespace Dropshiping.BackEnd.Dtos.ProductSizeDtos
{
    public class AddProductSizeDto
    {
        public int Stock { get; set; }
        public string ProductId { get; set; }
        public string SizeId { get; set; }
        public string ColorId { get; set; }
    }
}
