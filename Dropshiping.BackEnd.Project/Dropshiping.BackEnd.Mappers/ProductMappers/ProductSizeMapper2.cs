using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ProductSizeMapper2
    {
        public static ProductSizeDto ToDtoProSize(this ProductSize productSize)
        {
            return new ProductSizeDto
            {
                Stock = productSize.Stock,
            };
        }
    }
}
