using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.SubcategoryDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;


namespace Dropshiping.BackEnd.Mappers.SubcategoryMappers
{
    public static class SubcategoryMapper
    {
        public static Subcategory ToSubcategoryDomain (this NewSubcategoryDto subcategory)
        {
            return new Subcategory
            {
                Name = subcategory.Name,
                Image = subcategory.Image,
                Description = subcategory.Description,
                CategoryId = subcategory.CategoryId,
            };
        }

        public static SubcategoryDto ToSubcategoryDto(this Subcategory subcategory)
        {
            return new SubcategoryDto
            {
                Id = subcategory.Id,
                Name = subcategory.Name,
                Image = subcategory.Image,
                Description = subcategory.Description,
                CategoryId = subcategory.CategoryId,
            };
        }

        public static FullSubcategoryDto ToFullSubcategoryDto(this Subcategory subcategory)
        {
            return new FullSubcategoryDto
            {
                Id = subcategory.Id,
                Name = subcategory.Name,
                Image = subcategory.Image,
                Description = subcategory.Description,
                CategoryId = subcategory.CategoryId,
                Products = subcategory.Products.Select(x => x.ToFullProductDto()).ToList()
            };
            
        }
    }
}
