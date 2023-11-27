using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            var orderitem = _dbContext.OrderItems.FirstOrDefault(r => r.Id == id);
            if (orderitem == null)
            {
                throw new KeyNotFoundException($"Orderitem id {id} does not exist");
            }

            return orderitem;
        }

        public void Add(OrderItem entity)
        {
            _dbContext.OrderItems.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(OrderItem entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var orderitem = GetById(id);
            if (orderitem == null)
            {
                throw new KeyNotFoundException($"Orderitem id {id} does not exist");
            }
            _dbContext.OrderItems.Remove(orderitem);
            _dbContext.SaveChanges();
        }

        

        
    }
}
