using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Dtos.ProductDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class ProductSizeService : IProductSizeService
    {
        private IRepository<ProductSize> _productSizeRepository;
        public ProductSizeService(IRepository<ProductSize> productSizeRepository)
        {
            _productSizeRepository = productSizeRepository;
        }

        public List<ProductSizeDto> GetAll()
        {
            var productSize = _productSizeRepository.GetAll();
            return productSize.Select(x => x.ToProductSizeDto()).ToList();
        }

        public ProductSizeColorDto GetById(string id)
        {
            var productSize = _productSizeRepository.GetById(id);

            if (productSize == null)
            {
                throw new KeyNotFoundException($"ProductSize with id {id} is not found");
            }

            return productSize.ToProductSizeColorDto();
        }

        public void Add(AddProductSizeDto addProductSizeDto)
        {
            var productSize = new ProductSize
            {
                Stock = addProductSizeDto.Stock,
                ProductId = addProductSizeDto.ProductId,
                SizeId = addProductSizeDto.SizeId,
                ColorId = addProductSizeDto.ColorId

            };

            _productSizeRepository.Add(productSize);
        }

        public void Update(ProductSizeDto productSizeDto)
        {
            var productSize = _productSizeRepository.GetById(productSizeDto.Id);

            productSize.Stock = productSizeDto.Stock;
            productSize.ProductId = productSizeDto.ProductId;
            productSize.SizeId = productSizeDto.SizeId;
            productSize.ColorId = productSizeDto.ColorId;



            _productSizeRepository.Update(productSize);
        }

        public void DeleteById(string id)
        {
            var productSize = GetById(id);

            if (productSize.Id == null)
            {
                throw new KeyNotFoundException($"ProductSize with id {id} was not found.");
            }
            if (id == "")
            {
                throw new ArgumentException("You must enter id");
            }

            _productSizeRepository.Delete(productSize.Id);
        }

        public void UpdateStock(string productSizeId, int quantity)
        {
            var productSize = _productSizeRepository.GetById(productSizeId);
            if (productSize != null)
            {
                if(productSize.Stock < quantity)
                {
                    throw new InvalidOperationException($"The availabale stock for this product is {productSize.Stock} pieces.");
                }
                productSize.Stock -= quantity;
                _productSizeRepository.Update(productSize);
            }
        }
    }
}
