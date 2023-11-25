using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            return color.Select(x => x.ToDtoCol()).ToList();
        }

        public ColorDto GetById(string id)
        {
            var color = _colorRepository.GetById(id);

            if (color == null)
            {
                throw new KeyNotFoundException($"Color with id {id} is not found");
            }

            return color.ToDtoCol();
        }

        public void Add(ColorDto colorDto)
        {
            if (colorDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }

            var color = new Color
            {
                Name = colorDto.Name,
                

            };

            _colorRepository.Add(color);
        }

        public void Update(ColorDto colorDto)
        {
            var color = _colorRepository.GetById(colorDto.Id);

            color.Name = colorDto.Name;


            if (colorDto.Name == null)
            {
                throw new ArgumentNullException("Name must not be empty");
            }
            _colorRepository.Update(color);
        }

        public void DeleteById(string id)
        {
            var color = GetById(id);

            if (color.Id == null)
            {
                throw new KeyNotFoundException($"color with id {id} was not found.");
            }
            if (id == "")
            {
                throw new ArgumentException("You must enter id");
            }

            _colorRepository.Delete(color.Id);
        }
    }
}
