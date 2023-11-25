using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

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

        public ManufacturerDto GetById(string id)
        {
            var manufacturer = _manufacturerRepository.GetById(id);

            if (manufacturer == null)
            {
                throw new KeyNotFoundException($"Manufacturer with id {id} is not found");
            }

            return manufacturer.ToManufacturerDto();
        }

        public void Add(ManufacturerDto manufacturerDto)
        {
            if (manufacturerDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }

            var manufacturer = new Manufacturer
            {
                Name = manufacturerDto.Name,
                Image = manufacturerDto.Image,

            };

            _manufacturerRepository.Add(manufacturer);
        }

        public void Update(ManufacturerDto manufacturerDto)
        {
            var manufacturer = _manufacturerRepository.GetById(manufacturerDto.Id);

            manufacturer.Name = manufacturerDto.Name;
            manufacturer.Image = manufacturerDto.Image;


            if (manufacturerDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }
            _manufacturerRepository.Update(manufacturer);
        }

        public void DeleteById(string id)
        {
            var manufacturer = GetById(id);

            if (manufacturer.Id == null)
            {
                throw new KeyNotFoundException($"Manufacturer with id {id} was not found.");
            }
            if (id == "")
            {
                throw new ArgumentException("You must enter id");
            }

            _manufacturerRepository.Delete(manufacturer.Id);
        }
    }
}
