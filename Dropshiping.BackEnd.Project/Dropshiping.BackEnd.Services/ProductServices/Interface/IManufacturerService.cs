using Dropshiping.BackEnd.Dtos.ManufacturerDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IManufacturerService
    {
        List<ManufacturerDto> GetAll();
        FullManufacturerDto GetById(string id);
        void Add(NewManufacturerDto manufacturerDto);
        void Update(ManufacturerDto manufacturerDto);
        void DeleteById(string id);
    }
}
