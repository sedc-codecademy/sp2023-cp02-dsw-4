using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{  public class ManufacturerService : IManufacturerService
    {

        private IRepository<Manufacturer> _manufacturerRepository;
        public ManufacturerService(IRepository<Manufacturer> manufacturerRepository)
        {
            _manufacturerRepository = manufacturerRepository;
        }

        public List<ManufacturerDto> GetAll()
        {
            var manufacturer = _manufacturerRepository.GetAll();
            return manufacturer.Select(x => x.ToManufacturerDto()).ToList();
        }

        public FullManufacturerDto GetById(string id)
        {
            var manufacturer = _manufacturerRepository.GetById(id);

            return manufacturer == null
                ? throw new KeyNotFoundException($"Manufacturer with id {id} is not found")
                : manufacturer.ToFullManufacturerDto();
        }

        public void Add(NewManufacturerDto manufacturerDto)
        {
            manufacturerDto.ValidateManufacturer();

            var manufacturer = manufacturerDto.ToManufacturerDomain();

            _manufacturerRepository.Add(manufacturer);
        }

        public void Update(ManufacturerDto manufacturerDto)
        {
            var manufacturer = _manufacturerRepository.GetById(manufacturerDto.Id);

            var updatedManufacturer = manufacturerDto.ValidateUpdateManufacturer(manufacturer);

            _manufacturerRepository.Update(updatedManufacturer);
        }

        public void DeleteById(string id)
        {
            var manufacturer = GetById(id);

            _manufacturerRepository.Delete(id);
        }
    }
}
