using Dropshiping.BackEnd.Dtos.ProductDtos;


namespace Dropshiping.BackEnd.Dtos.SubcategoryDtos
{
    public class FullSubcategoryDto: SubcategoryDto
    {
        public ICollection<FullProductDto> Products { get; set; }

        public FullSubcategoryDto()
        {
            Products = new List<FullProductDto>();
        }
    }
}
