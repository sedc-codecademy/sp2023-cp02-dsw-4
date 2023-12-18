using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Microsoft.EntityFrameworkCore;

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
            var productSize = _dbContext.ProductSizes.Include(ps => ps.Color)
                .Include(ps => ps.Size)
                .FirstOrDefault(r => r.Id == id);
            return productSize ?? throw new KeyNotFoundException($"ProductSize id {id} does not exist");
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
            
            _dbContext.ProductSizes.Remove(productSize);
            _dbContext.SaveChanges();
        }
    }
}
