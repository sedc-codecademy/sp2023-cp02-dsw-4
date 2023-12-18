using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;


namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class ColorServices : IColorService
    {
        private IRepository<Color> _colorRepository;
        public ColorServices(IRepository<Color> colorRepository)
        {
            _colorRepository = colorRepository;
        }   

        public List<ColorDto> GetAll()
        {
            var color = _colorRepository.GetAll();
            return color.Select(x => x.ToColorDto()).ToList();
        }

        public ColorDto GetById(string id)
        {
            var color = _colorRepository.GetById(id);

            return color == null ? throw new KeyNotFoundException($"Color with id {id} is not found") : color.ToColorDto();
        }

        public void Add(ColorDto colorDto)
        {
            colorDto.ValidateColor();

           var color = colorDto.ToColorDomain();

            _colorRepository.Add(color);
        }

        public void Update(ColorDto colorDto)
        {
            var color = _colorRepository.GetById(colorDto.Id);

            colorDto.ValidateColor();

            color.Name = colorDto.Name;

            _colorRepository.Update(color);
        }

        public void DeleteById(string id)
        {
            var color = GetById(id);


            _colorRepository.Delete(color.Id);
        }
    }
}
