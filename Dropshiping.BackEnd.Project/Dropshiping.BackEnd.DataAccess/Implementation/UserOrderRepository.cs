using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

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
            _dbContext.Add(entity);
            _dbContext.SaveChanges();
        }
        public void Delete(string id)
        {
            var entity = GetById(id);
            _dbContext.Remove(entity);
            _dbContext.SaveChanges();
        }
        public List<UserOrder> GetAll()
        {
            return _dbContext.Set<UserOrder>().Include(u => u.User)
                                              .Include(o => o.Order).ToList();
        }

        public UserOrder GetById(string id)
        {
            var entity = _dbContext.UserOrders.Include(u => u.User).FirstOrDefault(x => x.Id == id);

            if (entity == null)
                throw new KeyNotFoundException($"Entity with id {id} does not exist");

            return entity;
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
