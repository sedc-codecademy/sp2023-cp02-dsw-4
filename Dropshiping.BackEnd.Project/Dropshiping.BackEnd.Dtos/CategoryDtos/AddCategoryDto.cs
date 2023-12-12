
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.SubcategoryDtos;

namespace Dropshiping.BackEnd.Dtos.CategoryDtos
{
    public class AddCategoryDto
    {
        public string Name { get; set; }
        public string Image { get; set; }
        public string Icon { get; set; }
        public List<NewSubcategoryDto> Subcategories { get; set; }
        public List<NewManufacturerDto> Manufacturers { get; set; }
    }
}
