using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ColorMapper
    {
        public static ColorDto ToDtoCol(this Color color)
        {
            return new ColorDto
            {
                Name = color.Name,
            };
        }
    }
}
