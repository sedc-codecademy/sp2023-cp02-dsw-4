using Dropshiping.BackEnd.Dtos.SubcategoryDtos;

namespace Dropshiping.BackEnd.Dtos.CategoryDtos
{
    public class CategoryDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image {  get; set; }
        public string Icon { get; set; }
        public ICollection<SubcategoryDto> Subcategories { get; set; }

        public CategoryDto()
        {
            Subcategories = new List<SubcategoryDto>();
        }
    }
}
