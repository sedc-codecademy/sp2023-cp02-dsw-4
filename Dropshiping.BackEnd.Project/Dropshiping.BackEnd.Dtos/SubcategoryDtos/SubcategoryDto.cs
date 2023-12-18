using Dropshiping.BackEnd.Domain;
using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Dtos.SubcategoryDtos
{
    public class SubcategoryDto
    {
        public string Id { get; set; }  
        public string Name { get; set; }
        public string Image {  get; set; }
        public string Description { get; set; }
        public ProductCategoryDto Category { get; set; }
    }
}
