using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;

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
            var manufacturer = _dbContext.Manufacturers.FirstOrDefault(r => r.Id == id);
            if (manufacturer == null)
            {
                throw new KeyNotFoundException($"Manufacturer id {id} does not exist");
            }

            return manufacturer;
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
            if (manufacturer == null)
            {
                throw new KeyNotFoundException($"Manufacturer id {id} does not exist");
            }
            _dbContext.Manufacturers.Remove(manufacturer);
            _dbContext.SaveChanges();
        }
    }
}
