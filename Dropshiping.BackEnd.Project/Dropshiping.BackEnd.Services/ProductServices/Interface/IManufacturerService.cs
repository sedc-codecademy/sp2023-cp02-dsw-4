using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IManufacturerService
    {
        List<ManufacturerDto> GetAll();
        ManufacturerDto GetById(string id);
        void Add(ManufacturerDto regionDto);
        void Update(ManufacturerDto regionDto);
        void DeleteById(string id);
    }
}
