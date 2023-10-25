using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        private DropshipingDbContext _dbContext;

        public Repository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Add(T entity)
        {
            _dbContext.Add<T>(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var entity = GetById(id);
            _dbContext.Remove<T>(entity);
            _dbContext.SaveChanges();
        }

        public List<T> GetAll()
        {
            return _dbContext.Set<T>().ToList();
        }

        public T GetById(string id)
        {
            var entity = _dbContext.Set<T>().FirstOrDefault(x => x.Id == id);

            if (entity == null)
                throw new KeyNotFoundException($"Entity with id {id} does not exist");

            return entity;
        }

        public void Update(T entity)
        {
            _dbContext.Update<T>(entity);
            _dbContext.SaveChanges();
        }
    }
}
