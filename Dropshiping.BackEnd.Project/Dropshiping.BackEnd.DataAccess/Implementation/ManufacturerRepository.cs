using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{

    public class ManufacturerRepository : IRepository<Manufacturer>
    {
        private DropshipingDbContext _dbContext;
        public ManufacturerRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Manufacturer> GetAll()
        {
            return _dbContext.Manufacturers.ToList();

        }

        public Manufacturer GetById(string id)
        {
            var manufacturer = _dbContext.Manufacturers
                .Include(x => x.Products).ThenInclude(x => x.ProductSizes).ThenInclude(x =>x.Color)
                .Include(x => x.Products).ThenInclude(x => x.ProductSizes).ThenInclude(x => x.Size)
                .Include(x => x.Products).ThenInclude(x => x.Ratings).ThenInclude(x => x.User)
                .Include(x => x.Products).ThenInclude(x => x.Subcategory).ThenInclude(x => x.Category)
                .FirstOrDefault(x => x.Id == id);

            return manufacturer ?? throw new KeyNotFoundException($"Manufacturer id {id} does not exist");
        }

      
        public void Add(Manufacturer entity)
        {
            _dbContext.Manufacturers.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(Manufacturer entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var manufacturer = GetById(id);
            
            _dbContext.Manufacturers.Remove(manufacturer);
            _dbContext.SaveChanges();
        }
    }
}
