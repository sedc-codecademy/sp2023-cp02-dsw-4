using Dropshiping.BackEnd.Dtos.CategoryDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface ICategoryService
    {
        List<CategoryDto> GetAll();
        FullCategoryDto GetById(string id);
       
        void Add(AddCategoryDto categoryDto);
        void Update(UpdateCategoryDto categoryDto);
        void DeleteById(string id);
    }
}
