using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class RatingRepository : IRepository<Rating> 
    {
        private DropshipingDbContext _dbContext;

        public RatingRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Add(Rating entity)
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

        public List<Rating> GetAll()
        {
            return _dbContext.Set<Rating>().Include(r => r.User).ToList();
        }

        public Rating GetById(string id)
        {
            var entity = _dbContext.Ratings.Include(r => r.User).FirstOrDefault(x => x.Id == id);

            if (entity == null)
                throw new KeyNotFoundException($"Entity with id {id} does not exist");

            return entity;
        }

        public void Update(Rating entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }
    }
}
