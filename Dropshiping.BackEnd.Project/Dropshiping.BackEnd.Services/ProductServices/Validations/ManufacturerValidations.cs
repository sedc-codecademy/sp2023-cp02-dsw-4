
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class ManufacturerValidations
    {
        public static void ValidateManufacturer(this NewManufacturerDto manufacturer)
        {
            if (string.IsNullOrEmpty(manufacturer.Name))
            {
                throw new ArgumentNullException("Manufacturer Name is required");
            }
            if (manufacturer.Name.Length > 50)
            {
                throw new InvalidDataException("Name Length must be less than 50 characters!");
            }
            if (string.IsNullOrEmpty(manufacturer.Image))
            {
                throw new ArgumentNullException("Image is required");
            }
        }

        public static Manufacturer ValidateUpdateManufacturer(this ManufacturerDto manufacturerDto, Manufacturer manufacturer)
        {
            if (manufacturerDto.Name.Length > 50)
            {
                throw new InvalidDataException("Name Length must be less than 50 characters!");
            }
            if (!string.IsNullOrEmpty(manufacturerDto.Name))
            {
                manufacturer.Name = manufacturerDto.Name;
            }
            if (!string.IsNullOrEmpty(manufacturerDto.Image))
            {
                manufacturer.Image = manufacturerDto.Image;
            }

            return manufacturer;
        }
    }
}
