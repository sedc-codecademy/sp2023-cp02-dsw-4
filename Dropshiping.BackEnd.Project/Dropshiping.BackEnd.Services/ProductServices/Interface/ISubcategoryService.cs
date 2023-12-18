using Dropshiping.BackEnd.Dtos.SubcategoryDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface ISubcategoryService
    {
        List<SubcategoryDto> GetAll();
        FullSubcategoryDto GetById(string id);
        void Add(NewSubcategoryDto subcategoryDto);
        void Update(SubcategoryDto subcategoryDto);
        void DeleteById(string id);
    }
}
