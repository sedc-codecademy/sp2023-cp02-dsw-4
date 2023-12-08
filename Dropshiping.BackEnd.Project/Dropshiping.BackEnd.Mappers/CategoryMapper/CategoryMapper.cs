using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.CategoryDtos;
using Dropshiping.BackEnd.Mappers.SubcategoryMappers;

namespace Dropshiping.BackEnd.Mappers.CategoryMapper
{
    public static class CategoryMapper
    {
        public static CategoryDto ToCategoryDto(this Category category)
        {
            return new CategoryDto
            {
                Id = category.Id,
                Name = category.Name,
                Image = category.Image,
                Icon = category.Icon,
                Subcategories = category.Subcategories.Select(x => x.ToSubcategoryDto()).ToList(),
            };
        }

        public static Category ToCategoryDomain(this AddCategoryDto category)
        {
            return new Category
            {
                Name = category.Name,
                Image = category.Image,
                Icon = category.Icon,
            };
        }

        public static FullCategoryDto ToFullCategoryDto(this Category category)
        {
            return new FullCategoryDto
            {
                Id = category.Id,
                Name = category.Name,
                Image = category.Image,
                Icon = category.Icon,
                Subcategories = category.Subcategories.Select(x => x.ToFullSubcategoryDto()).ToList(),
            };
        }
    }
}
