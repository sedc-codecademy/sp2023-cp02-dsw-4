using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class OrderRepository : IRepository<Order>
    {
        private DropshipingDbContext _dbContext;
        public OrderRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Add(Order entity)
        {
            _dbContext.Orders.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var order = GetById(id);
            _dbContext.Orders.Remove(order);
            _dbContext.SaveChanges();
        }

        public List<Order> GetAll()
        {
            return _dbContext.Orders.Include(o => o.UserOrders).ThenInclude(uo => uo.User).ThenInclude(u => u.Cards)
                                    .Include(o => o.OrderItems).ThenInclude(oi => oi.ProductSize).ThenInclude(ps => ps.Color)
                                    .Include(o => o.OrderItems).ThenInclude(oi => oi.ProductSize).ThenInclude(ps => ps.Size)
                                    .Include(o => o.OrderItems).ThenInclude(oi => oi.ProductSize).ThenInclude(ps => ps.Product).ToList();
        }

        public Order GetById(string id)
        {
            var order = _dbContext.Orders.Include(o => o.UserOrders).ThenInclude(uo => uo.User).ThenInclude(u => u.Cards)
                                         .Include(o => o.OrderItems).ThenInclude(oi => oi.ProductSize).ThenInclude(ps => ps.Color)
                                         .Include(o => o.OrderItems).ThenInclude(oi => oi.ProductSize).ThenInclude(ps => ps.Size)
                                         .Include(o => o.OrderItems).ThenInclude(oi => oi.ProductSize).ThenInclude(ps => ps.Product)
                                         .FirstOrDefault(x => x.Id == id);
            return order ?? throw new KeyNotFoundException($"Order with id {id} does not exist!");
        }

        public void Update(Order entity)
        {
            _dbContext.Orders.Update(entity);
            _dbContext.SaveChanges();
        }
    }
}
