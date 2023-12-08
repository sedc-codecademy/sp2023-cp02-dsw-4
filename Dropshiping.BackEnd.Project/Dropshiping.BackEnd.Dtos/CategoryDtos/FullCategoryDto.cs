using Dropshiping.BackEnd.Dtos.SubcategoryDtos;

namespace Dropshiping.BackEnd.Dtos.CategoryDtos
{
    public class FullCategoryDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Icon { get; set; }
        public ICollection<FullSubcategoryDto> Subcategories { get; set; }

        public FullCategoryDto()
        {
            Subcategories = new List<FullSubcategoryDto>();
        }


    }
}
