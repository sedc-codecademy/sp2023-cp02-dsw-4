using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    //  IT'S CHANGED FROM REGION TO MANUFACTURER, BUT IT'S NOT FINISHED *** DO THE REST ***
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
            var region = _dbContext.Manufacturers.FirstOrDefault(r => r.Id == id);
            if (region == null)
            {
                throw new KeyNotFoundException($"Manufacturer id {id} does not exist");
            }
          
            return region;
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
            var region = GetById(id);
            if (region == null)
            {
                throw new KeyNotFoundException($"Region id {id} does not exist");
            }
            _dbContext.Manufacturers.Remove(region);  
            _dbContext.SaveChanges();
        }
    }
}
