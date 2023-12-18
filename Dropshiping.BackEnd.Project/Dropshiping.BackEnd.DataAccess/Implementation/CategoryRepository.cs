using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class CategoryRepository : IRepository<Category>
    {
        private DropshipingDbContext _dbContext;
        public CategoryRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Category> GetAll()
        {
            return _dbContext.Categories.Include(c => c.Subcategories).ToList();
        }
        
        public Category GetById(string id)
        {
            var category = _dbContext.Categories
                .Include(x => x.Subcategories).ThenInclude(x => x.Products).ThenInclude(x => x.Manufacturer)
                .Include(x => x.Subcategories).ThenInclude(x => x.Products).ThenInclude(x => x.ProductSizes).ThenInclude(ps => ps.Color)
                .Include(x => x.Subcategories).ThenInclude(x => x.Products).ThenInclude(p => p.ProductSizes).ThenInclude(ps => ps.Size)
                .Include(x => x.Subcategories).ThenInclude(x => x.Products).ThenInclude(x => x.Ratings).ThenInclude(x => x.User)
                .FirstOrDefault(c => c.Id == id);

            return category ?? throw new KeyNotFoundException($"Category with id {id} does not exist");
        }
        public void Add(Category entity)
        {
            _dbContext.Categories.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(Category entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var category = GetById(id);

            _dbContext.Categories.Remove(category);
            _dbContext.SaveChanges();
        }

    }
}
