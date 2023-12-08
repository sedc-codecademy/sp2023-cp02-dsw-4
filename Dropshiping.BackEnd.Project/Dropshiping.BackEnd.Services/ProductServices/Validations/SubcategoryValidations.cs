
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.SubcategoryDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class SubcategoryValidations
    {
        public static void ValidateNewSubcategory(this NewSubcategoryDto subcategory)
        {
            if (string.IsNullOrEmpty(subcategory.Name))
            {
                throw new ArgumentNullException("Subcategory name is required");
            }
            if (subcategory.Name.Length > 50)
            {
                throw new InvalidDataException("Name must be less than 50 characters!");
            }
            if (string.IsNullOrEmpty(subcategory.Image))
            {
                throw new ArgumentNullException("Subcategory Image is required");
            }
            if (string.IsNullOrEmpty(subcategory.Description))
            {
                throw new ArgumentNullException("Subcategory Description is required");
            }
            if (subcategory.Description.Length > 250)
            {
                throw new InvalidDataException("Description must be less than 50 characters!");
            }
            if (string.IsNullOrEmpty(subcategory.CategoryId))
            {
                throw new ArgumentNullException("Category Id is required");
            }
        }

        public static Subcategory ValidateSubcategory(this SubcategoryDto subcategoryDto, Subcategory subcategory)
        {
            if (subcategoryDto.Name.Length > 50)
            {
                throw new InvalidDataException("Name must be less than 50 characters!");
            }
            if (subcategoryDto.Description.Length > 250)
            {
                throw new InvalidDataException("Description must be less than 50 characters!");
            }
            if (!string.IsNullOrEmpty(subcategoryDto.Name))
            {
                subcategory.Name = subcategoryDto.Name;
            }
            if (!string.IsNullOrEmpty(subcategoryDto.Image))
            {
                subcategory.Image = subcategoryDto.Image;
            }
            if (!string.IsNullOrEmpty(subcategoryDto.Description))
            {
                subcategory.Description = subcategoryDto.Description;
            }

            subcategory.CategoryId = subcategoryDto.CategoryId;

            return subcategory;
        }
    }
}
