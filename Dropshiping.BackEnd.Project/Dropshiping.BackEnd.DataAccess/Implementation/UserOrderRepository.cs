using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class UserOrderRepository : IRepository<UserOrder>
    {
        private DropshipingDbContext _dbContext;

        public UserOrderRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Add(UserOrder entity)
        {
            _dbContext.UserOrders.Add(entity);
            _dbContext.SaveChanges();
        }
        public void Delete(string id)
        {
            var entity = GetById(id);
            _dbContext.UserOrders.Remove(entity);
            _dbContext.SaveChanges();
        }
        public List<UserOrder> GetAll()
        {
            return _dbContext.Set<UserOrder>().Include(u => u.User)
                                              .Include(o => o.Order).ToList();
        }

        public UserOrder GetById(string id)
        {
            var entity = _dbContext.UserOrders.Include(u => u.User)
                                              .Include(o => o.Order)
                                              .FirstOrDefault(x => x.Id == id);

            return entity ?? throw new KeyNotFoundException($"Entity with id {id} does not exist");
        }


        public void Update(UserOrder entity)
        {
            _dbContext.UserOrders.Update(entity);
            _dbContext.SaveChanges();
        }

        
    }
}
