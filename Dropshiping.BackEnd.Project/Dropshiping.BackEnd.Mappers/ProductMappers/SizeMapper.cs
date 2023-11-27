using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class SizeMapper
    {
        public static SizeDto ToDtoSize(this Size size)
        {
            return new SizeDto
            {
                Name = size.Name,
            };
        }
    }
}
