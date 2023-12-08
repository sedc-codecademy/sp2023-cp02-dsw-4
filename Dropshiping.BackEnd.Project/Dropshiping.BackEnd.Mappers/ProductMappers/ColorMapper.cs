using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.Size_ColorDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ColorMapper
    {
        public static ColorDto ToColorDto(this Color color)
        {
            return new ColorDto
            {
                Id = color.Id,
                Name = color.Name,
            };
        }

        public static Color ToColorDomain(this ColorDto color)
        {
            return new Color
            {
                Name = color.Name,
            };
        }
    }
}
