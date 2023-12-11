using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.SubcategoryDtos;
using Dropshiping.BackEnd.Mappers.SubcategoryMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class SubcategoryService : ISubcategoryService
    {
        private IRepository<Subcategory> _subcategoryRepository;
        private IRepository<Category> _categoryRepository;
        public SubcategoryService(IRepository<Subcategory> subcategoryRepository, IRepository<Category> categoryRepository)
        {
            _subcategoryRepository = subcategoryRepository;
            _categoryRepository = categoryRepository;

        }

        // Get all Subcategories
        public List<SubcategoryDto> GetAll()
        {
            var subcategories = _subcategoryRepository.GetAll();
            return subcategories.Select(x => x.ToSubcategoryDto()).ToList();
        }

        // Get Subcategory by Id
        public FullSubcategoryDto GetById(string id)
        {
            var subcategory = _subcategoryRepository.GetById(id);

            return subcategory == null
                ? throw new KeyNotFoundException($"The Subcategory does not exist!")
                : subcategory.ToFullSubcategoryDto();
        }

        // Add Subcategory
        public void Add(NewSubcategoryDto subcategoryDto)
        {
            subcategoryDto.ValidateNewSubcategory();

            var category = _categoryRepository.GetById(subcategoryDto.CategoryId) ?? throw new KeyNotFoundException("Category doesn't exist!");

            var subcategory = subcategoryDto.ToSubcategoryDomain();

            _subcategoryRepository.Add(subcategory);
        }

        // Update Subcategory
        public void Update(SubcategoryDto subcategoryDto)
        {
            var subcategory = _subcategoryRepository.GetById(subcategoryDto.Id);
            var _category = _categoryRepository.GetById(subcategoryDto.Category.Id);

           var updatedSubcategory = subcategoryDto.ValidateSubcategory(subcategory);
            _subcategoryRepository.Update(updatedSubcategory);
        }

        //Delete Subcategory by Id
        public void DeleteById(string id)
        {
            var _subcategory = _subcategoryRepository.GetById(id) ?? throw new KeyNotFoundException($"Subcategory doesn't exist.");
            _subcategoryRepository.Delete(id);
        } 
    }
}
