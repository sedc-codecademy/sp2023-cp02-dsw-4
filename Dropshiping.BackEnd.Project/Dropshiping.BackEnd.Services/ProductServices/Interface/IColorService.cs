using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IColorService
    {
        List<ColorDto> GetAll();
        ColorDto GetById(string id);
        void Add(ColorDto colorDto);
        void Update(ColorDto colorDto);
        void DeleteById(string id);
    }
}
