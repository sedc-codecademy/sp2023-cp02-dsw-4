using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IProductService
    {
        List<ProductDto> GetAll();
        FullProductDto GetById(string id);
        void UpdateProductSearches(string id);
        List<ProductDto> GetAllDiscountedProducts();
        List<ProductDto> GetAllMostPopularProducts();
        List<ProductDto> GetAllTopRatedProducts();
        List<ProductDto> GetAllNewProducts();
        List<FullProductDto> GetSearchedProductsByName(string name);
        List<ProductDto> GetSearchedProducts();
        
        void Add(NewProductDto newProductDto);
        void Update(UpdateProductDto updateProductDto);
        void DeleteById(string id);
    }
}
