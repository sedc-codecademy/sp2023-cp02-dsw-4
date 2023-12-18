using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;

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

        public static Product ValidateUpdatedProduct(this UpdateProductDto productDto, Product product)
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
            if (!string.IsNullOrEmpty(productDto.Name))
            {
                product.Name = productDto.Name;
            }
            if (!string.IsNullOrEmpty(productDto.Description))
            {
                product.Description = productDto.Description;
            }
            if (!string.IsNullOrEmpty(productDto.Image))
            {
                product.Image = productDto.Image;
            }

            product.Price = productDto.Price;
            product.Discount = productDto.Discount;
            product.SubcategoryId = productDto.SubcategoryId;
            product.ManufacturerId = productDto.ManufacturerId;

            return product;
        }
    }
}
