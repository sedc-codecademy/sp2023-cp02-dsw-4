using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.RatingDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Dtos.ProductDtos
{
    public class FullProductDto : ProductDto
    {
       
        public string Description { get; set; }
        public  ProductCategoryDto Subcategory { get; set; }
        public ProductCategoryDto Category { get; set; }
        public  ManufacturerDto Manufacturer { get; set; }
        public ICollection<ProductSizeColorDto> ProductSizes { get; set; }
        public ICollection<RatingDto> Ratings { get; set; }

        public FullProductDto()
        {
            ProductSizes = new List<ProductSizeColorDto>();
            Ratings = new List<RatingDto>();
        }
    }
}
