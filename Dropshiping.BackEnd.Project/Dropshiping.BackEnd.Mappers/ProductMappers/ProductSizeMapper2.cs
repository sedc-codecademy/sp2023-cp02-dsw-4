using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ProductSizeMapper2
    {
        public static ProductSizeDto ToProductSizeDto(this ProductSize productSize)
        {
            return new ProductSizeDto
            {
                Id = productSize.Id,
                Stock = productSize.Stock,
                ProductId = productSize.ProductId,
                SizeId = productSize.SizeId,
                ColorId = productSize.ColorId,
            };
        }
    }
}
