using Dropshiping.BackEnd.Dtos.CategoryDtos;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface ISizeService
    {
        List<SizeDto> GetAll();
        SizeDto GetById(string id);

        void Add(SizeDto sizeDto);
        void Update(SizeDto sizeDto);
        void DeleteById(string id);
    }
}
