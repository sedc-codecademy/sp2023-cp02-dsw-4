using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    //  IT'S CHANGED FROM REGION TO MANUFACTURER, BUT IT'S NOT FINISHED *** DO THE REST ***
    public class ManufacturerService : IManufacturerService
    {
        private IRepository<Manufacturer> _manufacturerRepository;
        public ManufacturerService(IRepository<Manufacturer> manufacturerRepository)
        {
            _manufacturerRepository = manufacturerRepository;
        }

        public List<ManufacturerDto> GetAll()
        {
            var regions = _manufacturerRepository.GetAll();
            return regions.Select(x => x.ToManufacturerDto()).ToList();
        }

        public ManufacturerDto GetById(string id)
        {
            var region = _manufacturerRepository.GetById(id);

            if (region == null)
            {
                throw new KeyNotFoundException($"Region with id {id} is not found");
            }

            return region.ToManufacturerDto();
        }

        public void Add(ManufacturerDto regionDto)
        {
            if (regionDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }

            var region = new Manufacturer
            {
                Name = regionDto.Name,
                
            };

            _manufacturerRepository.Add(region);
        }

        public void Update(ManufacturerDto regionDto)
        {
            var region = _manufacturerRepository.GetById(regionDto.Id);

            region.Id = regionDto.Id;
            region.Name = regionDto.Name;
            

            if (regionDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }
            //if ((int)regionDto.Shipping > 3 || (int)regionDto.Shipping < 1)
            //{
            //    throw new InvalidOperationException("Shipping must be set");
            //}

            _manufacturerRepository.Update(region);   
        }

        public void DeleteById(string id)
        {
            var region = GetById(id);

            if (region.Id == null)
            {
                throw new KeyNotFoundException($"Region with id {id} was not found.");
            }
            if (id == "")
            {
                throw new ArgumentException("You must enter id");
            }

            _manufacturerRepository.Delete(region.Id);
        }
    }
}
