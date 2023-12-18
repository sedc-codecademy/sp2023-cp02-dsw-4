
namespace Dropshiping.BackEnd.Dtos.ProductDtos
{
    public class NewProductDto
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public int? Discount { get; set; }
        public string Image { get; set; }
        public string SubcategoryId { get; set; }
        public string ManufacturerId { get; set; }
    }
}
