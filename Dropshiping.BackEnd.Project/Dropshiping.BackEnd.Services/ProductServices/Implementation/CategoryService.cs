using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.CategoryDtos;
using Dropshiping.BackEnd.Mappers.CategoryMapper;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class CategoryService : ICategoryService
    {
        private IRepository<Category> _categoryRepository;
       
        
        public CategoryService(IRepository<Category> categoryRepository)
        {
            _categoryRepository = categoryRepository;
     
        }

        // Get all Categories
        public List<CategoryDto> GetAll()
        {
            var categories = _categoryRepository.GetAll();
            return categories.Select(x => x.ToCategoryDto()).ToList();
        }

        // Get Category by Id
        public FullCategoryDto GetById(string id)
        {
            var category = _categoryRepository.GetById(id);

            return category == null ? throw new KeyNotFoundException($"Category with id {id} is not found") : category.ToFullCategoryDto();
        }


        // Add Category
        public void Add(AddCategoryDto categoryDto)
        {
            categoryDto.ValidateNewCategory();

            var category = categoryDto.ToCategoryDomain();

            _categoryRepository.Add(category);
        }

        // Update Category
        public void Update(UpdateCategoryDto categoryDto)
        {
            var category = _categoryRepository.GetById(categoryDto.Id);

            var updatedCategory = categoryDto.ValidateUpdateCategory(category);

            _categoryRepository.Update(updatedCategory);
        }

        // Delete Category by Id
        public void DeleteById(string id)
        {
            var category = GetById(id) ?? throw new KeyNotFoundException($"Category with id {id} was not found.");
            _categoryRepository.Delete(id);
        }

        
    }
}
