using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class SizeServices : ISizeService
    {
        private IRepository<Size> _sizeRepository;
        public SizeServices(IRepository<Size> sizeRepository)
        {
            _sizeRepository = sizeRepository;
        }
        public List<SizeDto> GetAll()
        {
            var size = _sizeRepository.GetAll();
            return size.Select(x => x.ToDtoSize()).ToList();
        }

        public SizeDto GetById(string id)
        {
            var size = _sizeRepository.GetById(id);

            if (size == null)
            {
                throw new KeyNotFoundException($"Size with id {id} is not found");
            }

            return size.ToDtoSize();
        }

        public void Add(SizeDto sizeDto)
        {
            if (sizeDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }

            var size = new Size
            {
                Name = sizeDto.Name,

            };

            _sizeRepository.Add(size);
        }

        public void Update(SizeDto sizeDto)
        {
            var size = _sizeRepository.GetById(sizeDto.Id);

            size.Name = sizeDto.Name;


            if (sizeDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }
            _sizeRepository.Update(size);
        }

        public void DeleteById(string id)
        {
            var size = GetById(id);

            if (size.Id == null)
            {
                throw new KeyNotFoundException($"Size with id {id} was not found.");
            }
            if (id == "")
            {
                throw new ArgumentException("You must enter id");
            }

            _sizeRepository.Delete(size.Id);
        }

    }
}
