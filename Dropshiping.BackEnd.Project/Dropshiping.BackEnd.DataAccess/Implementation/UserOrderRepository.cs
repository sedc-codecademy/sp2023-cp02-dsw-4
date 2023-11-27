using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class UserOrderRepository : IRepository<UserOrder>
    {
        private DropshipingDbContext _dbContext;
        public UserOrderRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<UserOrder> GetAll()
        {
            return _dbContext.UserOrders.ToList();
        }

        public UserOrder GetById(string id)
        {
            var userOrder = _dbContext.UserOrders.FirstOrDefault(r => r.Id == id);
            if (userOrder == null)
            {
                throw new KeyNotFoundException($"UserOrder id {id} does not exist");
            }

            return userOrder;
        }

        public void Add(UserOrder entity)
        {
            _dbContext.UserOrders.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(UserOrder entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var userOrder = GetById(id);
            if (userOrder == null)
            {
                throw new KeyNotFoundException($"UserOrder id {id} does not exist");
            }
            _dbContext.UserOrders.Remove(userOrder);
            _dbContext.SaveChanges();
        } 
    }
}
