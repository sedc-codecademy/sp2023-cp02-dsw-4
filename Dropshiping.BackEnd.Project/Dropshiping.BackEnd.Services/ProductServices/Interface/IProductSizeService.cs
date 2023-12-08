﻿using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IProductSizeService
    {
        List<ProductSizeDto>GetAll();
        ProductSizeColorDto GetById(string id);
        void Add(AddProductSizeDto addProductSizeDto);
        void Update(ProductSizeDto productSizeDto);
        void UpdateStock(string productSizeId, int quantity);
        void DeleteById(string id);
    }
}