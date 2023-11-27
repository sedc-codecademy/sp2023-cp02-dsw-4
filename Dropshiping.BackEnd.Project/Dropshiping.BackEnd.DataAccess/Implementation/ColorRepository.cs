using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class ColorRepository : IRepository<Color>
    {
        private DropshipingDbContext _dbContext;
        public ColorRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Color> GetAll()
        {
            return _dbContext.Colors.ToList();
        }

        public Color GetById(string id)
        {
            var color = _dbContext.Colors.FirstOrDefault(r => r.Id == id);
            if (color == null)
            {
                throw new KeyNotFoundException($"Color id {id} does not exist");
            }

            return color;
        }

        public void Add(Color entity)
        {
            _dbContext.Colors.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(Color entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var color = GetById(id);
            if (color == null)
            {
                throw new KeyNotFoundException($"Color id {id} does not exist");
            }
            _dbContext.Colors.Remove(color);
            _dbContext.SaveChanges();
        }

    }
}
