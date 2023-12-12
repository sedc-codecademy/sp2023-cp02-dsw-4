using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.CategoryDtos;
using Dropshiping.BackEnd.Mappers.CategoryMapper;
using Dropshiping.BackEnd.Mappers.SubcategoryMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class CategoryService : ICategoryService
    {
        private IRepository<Category> _categoryRepository;

        private ISubcategoryService _subcategoryService;

        private IManufacturerService _manufacturerService;

        public CategoryService(IRepository<Category> categoryRepository, ISubcategoryService subcategoryService, IManufacturerService manufacturerService)
        {
            _categoryRepository = categoryRepository;
            _subcategoryService = subcategoryService;
            _manufacturerService = manufacturerService;
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

            if(CategoryNameExists(categoryDto.Name))
            {
                throw new ArgumentException($"Category with name {categoryDto.Name} already exists!");
            }

            var category = categoryDto.ToCategoryDomain();

            _categoryRepository.Add(category);

            categoryDto.Subcategories.ForEach(x => x.CategoryId = category.Id);

            categoryDto.Subcategories.ForEach(x => _subcategoryService.Add(x));

            categoryDto.Manufacturers.ForEach(x => _manufacturerService.Add(x));

        }

        // Update Category
        public void Update(UpdateCategoryDto categoryDto)
        {
            var category = _categoryRepository.GetById(categoryDto.Id);

            if(category.Name != categoryDto.Name)
            {
                if (CategoryNameExists(categoryDto.Name))
                {
                    throw new ArgumentException($"Category with name {categoryDto.Name} already exists!");
                }
            }

            var updatedCategory = categoryDto.ValidateUpdateCategory(category);

            _categoryRepository.Update(updatedCategory);
        }

        // Delete Category by Id
        public void DeleteById(string id)
        {
            var category = GetById(id) ?? throw new KeyNotFoundException($"Category with id {id} was not found.");
            _categoryRepository.Delete(id);
        }

        public bool CategoryNameExists(string categoryName)
        {
            var category = _categoryRepository.GetAll().FirstOrDefault(x => x.Name == categoryName);
            if (category == null)
            {
                return false;
            }
            return true;
        }
    }
}
