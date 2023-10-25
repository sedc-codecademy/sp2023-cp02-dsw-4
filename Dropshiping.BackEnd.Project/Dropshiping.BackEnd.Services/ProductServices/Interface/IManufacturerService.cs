using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IManufacturerService
    {
        List<RegionDto> GetAll();
        RegionDto GetById(string id);
        void Add(RegionDto regionDto);
        void Update(RegionDto regionDto);
        void DeleteById(string id);
    }
}
