using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Mappers.RatingMappers;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class ProductMapper
    {
        
        public static ProductDto ToProductDto(this Product product)
        {
            
            var productDto = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                DiscountPercentage = product.Discount,
                Image = product.Image,
            };

            if (product.Ratings != null && product.Ratings.Count > 0)
            {
                productDto.Ratings = product.Ratings.Select(r => r.ToRatingDto()).ToList();
            }
            return productDto;

        }

        public static Product ToProductDomain(this NewProductDto product)
        {
            return new Product
            {
                Name = product.Name,
                Price = product.Price,
                Discount = product.Discount ?? 0,
                Image = product.Image,
                Description = product.Description,
                SubcategoryId = product.SubcategoryId,
                ManufacturerId = product.ManufacturerId,
                DateOfCreation = DateTime.UtcNow,
                Searches = 0

            };
        }

        public static FullProductDto ToFullProductDto(this Product product)
        {
            var fullProductDto = new FullProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Price = product.Price,
                DiscountPercentage = product.Discount,
                Image = product.Image,
                Description = product.Description,
                Category = new ProductCategoryDto
                {
                    Id = product.Subcategory.Category.Id,
                    Name = product.Subcategory.Category.Name,
                },
                Subcategory = new ProductCategoryDto
                {
                    Id = product.SubcategoryId,
                    Name = product.Subcategory.Name,
                },
                Manufacturer = new ManufacturerDto
                {
                    Id = product.ManufacturerId,
                    Name = product.Manufacturer.Name,
                    Image = product.Manufacturer.Image,
                }
            };

            if (product.Ratings != null && product.Ratings.Count > 0)
            {
                fullProductDto.Ratings = product.Ratings.Select(r => r.ToRatingDto()).ToList();

            }

            if (product.ProductSizes != null && product.ProductSizes.Count > 0)
            {
                fullProductDto.ProductSizes = product.ProductSizes.Select(ps => ps.ToProductSizeColorDto()).ToList();
            }

            return fullProductDto;

        }


    }
}
