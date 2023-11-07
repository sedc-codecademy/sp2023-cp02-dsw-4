using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ManufacturerMapper
    {
        public static ManufacturerDto ToManufacturerDto(this Manufacturer manufacturer)
        {
            return new ManufacturerDto
            {
                Id = manufacturer.Id,
                Name = manufacturer.Name,
                Image = manufacturer.Image,
            };
        }
    }
}
