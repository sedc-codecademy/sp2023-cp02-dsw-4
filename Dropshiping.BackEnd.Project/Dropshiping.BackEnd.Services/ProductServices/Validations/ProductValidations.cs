using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Helpers
{
    public static class ProductValidations
    {
        public static void ValidateProductInfo(this NewProductDto productDto)
        {
            if (string.IsNullOrEmpty(productDto.Name))
            {
                throw new ArgumentNullException("Name of the product is required");
            }
            if (productDto.Name.Length > 50)
            {
                throw new InvalidDataException("Name of the product must be less than 50 characters!");
            }
            if (productDto.Price < 1)
            {
                throw new InvalidDataException("Product prize is required and must be greater than 1!");
            }
            if (string.IsNullOrEmpty(productDto.Description))
            {
                throw new ArgumentNullException("Product description is required!");
            }
            if (productDto.Description.Length > 250)
            {
                throw new InvalidDataException("Description must be less than 250 characters!");
            }
            if (productDto.Discount < 0 ||  productDto.Discount > 100)
            {
                throw new InvalidDataException("Invalid discount value!");
            }
            if (string.IsNullOrEmpty(productDto.Image))
            {
                throw new ArgumentNullException("Product image is required!");
            }
            if (string.IsNullOrEmpty(productDto.ManufacturerId))
            {
                throw new ArgumentNullException("Product manufacturer is required!");
            }
            if (string.IsNullOrEmpty(productDto.SubcategoryId))
            {
                throw new ArgumentNullException("Product subcategory is required!");
            }
        }

        public static void ValidateUpdatedProduct(this UpdateProductDto productDto)
        {
            if (productDto.Name.Length > 50)
            {
                throw new InvalidDataException("Name of the product must be less than 50 characters!");
            }
            if (productDto.Price < 1)
            {
                throw new InvalidDataException("Product prize is required and must be greater than 1!");
            }
            if (productDto.Description.Length > 250)
            {
                throw new InvalidDataException("Description must be less than 250 characters!");
            }
            if (productDto.Discount < 0 || productDto.Discount > 100)
            {
                throw new InvalidDataException("Invalid discount value!");
            }
        }
    }
}
