using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.CategoryDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class CategoryValidations
    {
        public static void ValidateNewCategory(this AddCategoryDto categoryDto)
        {
            if (string.IsNullOrEmpty(categoryDto.Name))
            {
                throw new ArgumentNullException("Category Name is required");
            }
            if (categoryDto.Name.Length > 50)
            {
                throw new InvalidDataException("Name Length must be less than 50 characters!");
            }
            if (string.IsNullOrEmpty(categoryDto.Image))
            {
                throw new ArgumentNullException("Category Image is required");
            }
            if (string.IsNullOrEmpty(categoryDto.Icon))
            {
                throw new ArgumentNullException("Category Icon is required");
            }
        }

        public static Category ValidateUpdateCategory(this UpdateCategoryDto categoryDto, Category category)
        {
            if (categoryDto.Name.Length > 50)
            {
                throw new InvalidDataException("Name Length must be less than 50 characters!");
            }

            if (!string.IsNullOrEmpty(categoryDto.Name))
            {
                category.Name = categoryDto.Name;
            }
            if (!string.IsNullOrEmpty(categoryDto.Image))
            {
                category.Image = categoryDto.Image;
            }
            if (!string.IsNullOrEmpty(categoryDto.Icon))
            {
                category.Icon = categoryDto.Icon;
            }

            return category;
        }
    }
}
