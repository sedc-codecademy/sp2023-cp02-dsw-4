using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;

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

        public static FullManufacturerDto ToFullManufacturerDto(this Manufacturer manufacturer)
        {
            return new FullManufacturerDto
            {
                Id = manufacturer.Id,
                Name = manufacturer.Name,
                Image = manufacturer.Image,
                Products = manufacturer.Products.Select(x => x.ToFullProductDto()).ToList(),
            };
        }

        public static Manufacturer ToManufacturerDomain(this NewManufacturerDto manufacturer)
        {
            return new Manufacturer
            {
                Name = manufacturer.Name,
                Image = manufacturer.Image
            };
        }

    }
}
