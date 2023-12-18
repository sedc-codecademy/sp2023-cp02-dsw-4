using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;


namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ProductSizeMapper
    {
        public static ProductSizeColorDto ToProductSizeColorDto(this ProductSize productSize)
        {
            return new ProductSizeColorDto
            {
                Id = productSize.Id,
                Stock = productSize.Stock,
                Size = productSize.Size.Name,
                Color = productSize.Color.Name
            };
        }

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

        public static ProductSize ToProductSizeDomain(this AddProductSizeDto productSize)
        {
            return new ProductSize
            {
                Stock = productSize.Stock,
                ProductId = productSize.ProductId,
                SizeId = productSize.SizeId,
                ColorId = productSize.ColorId,
            };
        }

        public static ProductSize ToProductSizeDomain(this ProductSizeDto productSizeDto, ProductSize productSize )
        {
            if (productSizeDto.Stock < 1)
            {
                throw new ArgumentException("Invalid stock amount! Should be at least 1!");
            }

            productSize.Stock = productSizeDto.Stock;
            productSize.ProductId = productSizeDto.ProductId;
            productSize.SizeId = productSizeDto.SizeId;
            productSize.ColorId = productSizeDto.ColorId;

            return productSize;

        }

    }
}
