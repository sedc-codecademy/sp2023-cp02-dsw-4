using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        
    }
}
