using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class OrderitemRepository : IRepository<OrderItem>
    {
        private DropshipingDbContext _dbContext;
        public OrderitemRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<OrderItem> GetAll()
        {
            return _dbContext.OrderItems.ToList();
        }

        public OrderItem GetById(string id)
        {
            var orderItem = _dbContext.OrderItems.FirstOrDefault(oi => oi.Id == id);
            
            return orderItem ?? throw new KeyNotFoundException($"OrderItem id {id} does not exist"); ;
        }

        public void Add(OrderItem entity)
        {
            _dbContext.OrderItems.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(OrderItem entity)
        {
            _dbContext.OrderItems.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var orderitem = GetById(id);
            _dbContext.OrderItems.Remove(orderitem);
            _dbContext.SaveChanges();
        }

        

        
    }
}
