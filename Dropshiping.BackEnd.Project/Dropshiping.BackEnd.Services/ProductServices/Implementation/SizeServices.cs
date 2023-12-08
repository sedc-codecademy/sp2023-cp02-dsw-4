using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;

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

            return size == null ? throw new KeyNotFoundException($"Size with id {id} is not found") : size.ToDtoSize();
        }

        public void Add(SizeDto sizeDto)
        {
            sizeDto.ValidateSize();

            var size = sizeDto.ToSizeDomain();

            _sizeRepository.Add(size);
        }

        public void Update(SizeDto sizeDto)
        {
            var size = _sizeRepository.GetById(sizeDto.Id);

            sizeDto.ValidateSize();

            size.Name = sizeDto.Name;

            _sizeRepository.Update(size);
        }

        public void DeleteById(string id)
        {
            var size = GetById(id);

            _sizeRepository.Delete(size.Id);
        }

    }
}
