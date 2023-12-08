using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Helpers;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class ProductService : IProductService
    {
        private IProductRepository _productRepository;
        private IRepository<Subcategory> _subcategoryRepository;
        private IRepository<Manufacturer> _manufacturerRepository;
        public ProductService(IProductRepository productRepository, IRepository<Subcategory> subcategoryRepository, IRepository<Manufacturer> manufacturerRepository)
        {
            _productRepository = productRepository;
            _subcategoryRepository = subcategoryRepository;
            _manufacturerRepository = manufacturerRepository;
        }

        //Get all products
        public List<ProductDto> GetAll()
        {
            var products = _productRepository.GetAll();
            return products.Select(x => x.ToProductDto()).ToList();
        }

        //Get product by ID
        public FullProductDto GetById(string id)
        {
            var product = _productRepository.GetById(id);

            if (product == null)
            {
                throw new KeyNotFoundException($"Product with id {id} is not found");
            }

           return product.ToFullProductDto();
        }

        // Add new product
        public void Add(NewProductDto newProductDto)
        {
            newProductDto.ValidateProductInfo();
            var productSubcategory = _subcategoryRepository.GetById(newProductDto.SubcategoryId);
            var productManufacturer = _manufacturerRepository.GetById(newProductDto.ManufacturerId);


            var product = newProductDto.ToProductDomain();
          
             _productRepository.Add(product);
           
        }

       

        // Update Product
        public void Update(UpdateProductDto updateProductDto)
        {
            var product = _productRepository.GetById(updateProductDto.Id);
            var productSubcategory = _subcategoryRepository.GetById(updateProductDto.SubcategoryId);
            var productManufacturer = _manufacturerRepository.GetById(updateProductDto.ManufacturerId);

            var updatedProduct = updateProductDto.ValidateUpdatedProduct(product);

            _productRepository.Update(product);
        }

        // Delete Product
        public void DeleteById(string id)
        {
            var product = _productRepository.GetById(id);

            if (product == null)
            {
                throw new KeyNotFoundException($"Product with id {id} was not found.");
            }
            
            _productRepository.Delete(id);
        }

        public FullProductDto GetSearchedProductById(string id)
        {
            var product = _productRepository.GetById(id);

            if (product == null)
            {
                throw new KeyNotFoundException($"Product with id {id} is not found");
            }
            product.Searches++;
            _productRepository.Update(product);
            return product.ToFullProductDto();
        }

        public List<ProductDto> GetAllDiscountedProducts()
        {
            return _productRepository.GetAllDiscountedProducts().Select(p => p.ToProductDto()).ToList();
            
        }

        public List<ProductDto> GetAllMostPopularProducts()
        {
            return _productRepository.GetAllMostPopularProducts().Select(p => p.ToProductDto()).ToList();
        }

        public List<ProductDto> GetAllTopRatedProducts()
        {
            return _productRepository.GetAllTopRatedProducts().Select(p => p.ToProductDto()).ToList();
        }

        public List<ProductDto> GetAllNewProducts()
        {
            return _productRepository.GetAllNewProducts().Select(p => p.ToProductDto()).ToList();
        }

        public List<ProductDto> GetSearchedProductsByName(string name)
        {
            return _productRepository.GetSearchedProductsByName(name).Select(p => p.ToProductDto()).ToList();
        }

        public List<ProductDto> GetSearchedProducts()
        {
            return _productRepository.GetSearchedProducts().Select(p => p.ToProductDto()).ToList();
        }

    }
}
