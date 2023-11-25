using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class ProductSizeRepository : IRepository<ProductSize>
    {
        private DropshipingDbContext _dbContext;
        public ProductSizeRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ProductSize> GetAll()
        {
            return _dbContext.ProductSizes.ToList();
        }

        public ProductSize GetById(string id)
        {
            var productSize = _dbContext.ProductSizes.FirstOrDefault(r => r.Id == id);
            if (productSize == null)
            {
                throw new KeyNotFoundException($"ProductSize id {id} does not exist");
            }

            return productSize;
        }

        public void Add(ProductSize entity)
        {
            _dbContext.ProductSizes.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(ProductSize entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var productSize = GetById(id);
            if (productSize == null)
            {
                throw new KeyNotFoundException($"ProductSize id {id} does not exist");
            }
            _dbContext.ProductSizes.Remove(productSize);
            _dbContext.SaveChanges();
        }
    }
}
