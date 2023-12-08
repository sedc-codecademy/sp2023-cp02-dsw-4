
using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Dtos.ManufacturerDtos
{
    public class FullManufacturerDto : ManufacturerDto
    {
        public ICollection<FullProductDto> Products { get; set; }

        public FullManufacturerDto()
        {
            Products = new List<FullProductDto>();
        }
    }
}
