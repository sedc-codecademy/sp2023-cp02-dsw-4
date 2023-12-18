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
        private IProductRepository _productRepository;
        private IRepository<Color> _colorRepository;
        private IRepository<Size> _sizeRepository;

        public ProductSizeService(IRepository<ProductSize> productSizeRepository, IProductRepository productRepository, IRepository<Color> colorRepository, IRepository<Size> sizeRepository)
        {
            _productSizeRepository = productSizeRepository;
            _productRepository = productRepository;
            _colorRepository = colorRepository;
            _sizeRepository = sizeRepository;
        }

        public List<ProductSizeDto> GetAll()
        {
            var productSize = _productSizeRepository.GetAll();
            return productSize.Select(x => x.ToProductSizeDto()).ToList();
        }

        public ProductSizeColorDto GetById(string id)
        {
            var productSize = _productSizeRepository.GetById(id);

            return productSize == null
                ? throw new KeyNotFoundException($"ProductSize with id {id} is not found")
                : productSize.ToProductSizeColorDto();
        }

        public void Add(AddProductSizeDto addProductSizeDto)
        {
            var product = _productRepository.GetById(addProductSizeDto.ProductId);
            var size = _sizeRepository.GetById(addProductSizeDto.SizeId);
            var color = _colorRepository.GetById(addProductSizeDto.ColorId);

            if(addProductSizeDto.Stock < 1)
            {
                throw new ArgumentException("Invalid stock amount! Should be at least 1!");
            }

            var productSize = addProductSizeDto.ToProductSizeDomain();
            _productSizeRepository.Add(productSize);
        }

        public void Update(ProductSizeDto productSizeDto)
        {
            var productSize = _productSizeRepository.GetById(productSizeDto.Id);
            var product = _productRepository.GetById(productSizeDto.ProductId);
            var size = _sizeRepository.GetById(productSizeDto.SizeId);
            var color = _colorRepository.GetById(productSizeDto.ColorId);

            var updatedProductSize = productSizeDto.ToProductSizeDomain(productSize);

            _productSizeRepository.Update(updatedProductSize);
        }

        public void DeleteById(string id)
        {
            var productSize = GetById(id);

            _productSizeRepository.Delete(id);
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
