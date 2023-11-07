using Dropshiping.BackEnd.Dtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface ISubcategoryService
    {
        List<SubcategoryDto> GetAll();
        SubcategoryDto GetById(string id);
        void Add(SubcategoryDto subcategoryDto);
        void Update(SubcategoryDto subcategoryDto);
        void DeleteById(string id);
    }
}
