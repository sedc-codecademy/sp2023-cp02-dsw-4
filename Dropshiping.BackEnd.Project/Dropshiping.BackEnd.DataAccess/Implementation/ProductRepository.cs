using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class ProductRepository : IProductRepository
    {
        private DropshipingDbContext _dbContext;
        public ProductRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Product> GetAll()
        {
            return _dbContext.Products.Include(p => p.Ratings).ToList(); 
        }

        public Product GetById(string id)
        {
            var product = _dbContext.Products
                .Include(p => p.Subcategory).ThenInclude(s => s.Category)
                .Include(p => p.Manufacturer)
                .Include(p => p.Ratings).ThenInclude(r => r.User)
                .Include(p => p.ProductSizes).ThenInclude(ps => ps.Size)
                .Include(p => p.ProductSizes).ThenInclude(ps => ps.Color)
                .FirstOrDefault(p => p.Id == id); // && p.Discount < 100???
            return product ?? throw new KeyNotFoundException($"Product with id {id} does not exist");

        }

        public void Add(Product entity)
        {
            _dbContext.Products.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(Product entity)
        {
            _dbContext.Products.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var product = GetById(id);

            _dbContext.Products.Remove(product);
            _dbContext.SaveChanges();
        }

        public List<Product> GetAllDiscountedProducts()
        {
            return _dbContext.Products.Where(p => p.Discount > 0 && p.Discount < 100).Include(p => p.Ratings).ToList();
        }

        public List<Product> GetAllMostPopularProducts()
        {
            
            var products = _dbContext.OrderItems.Include(oi => oi.ProductSize)
                    .ThenInclude(ps => ps.Product)
                    .ThenInclude(p => p.Ratings).ToList()
                .Select(oi => oi.ProductSize.Product)
                .Where(p => p.Discount < 100)
                .GroupBy(p => p.Id)
                .OrderByDescending(p => p.Count())
                .SelectMany(p => p)
                .ToList();
            return products;

        }

        public List<Product> GetAllTopRatedProducts()
        {
            return _dbContext.Products.Include(p => p.Ratings).ToList().Where(p => p.Rating >= 4 && p.Discount < 100).OrderByDescending(p => p.Rating).ToList();
        }

        public List<Product> GetAllNewProducts()
        {
            return _dbContext.Products.Where(p => p.DateOfCreation >= DateTime.UtcNow.AddDays(-7) && p.Discount < 100).Include(p => p.Ratings).ToList();
        }

        public List<Product> GetSearchedProductsByName(string name)
        {
            return _dbContext.Products.Where(p => p.Name.ToLower().Contains(name.ToLower()) && p.Discount < 100).Include(p => p.Ratings).ToList();
        }

        public List<Product> GetSearchedProducts()
        {
            return _dbContext.Products.Where(p => p.Searches > 0 && p.Discount < 100).OrderByDescending(p => p.Searches).Include(p => p.Ratings).ToList();
        }


    }
}
