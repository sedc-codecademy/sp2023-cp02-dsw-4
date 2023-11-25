﻿using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class SizeRepository : IRepository<Size>
    {
        private DropshipingDbContext _dbContext;
        public SizeRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Size> GetAll()
        {
            return _dbContext.Sizes.ToList();
        }

        public Size GetById(string id)
        {
            var size = _dbContext.Sizes.FirstOrDefault(r => r.Id == id);
            if (size == null)
            {
                throw new KeyNotFoundException($"Manufacturer id {id} does not exist");
            }

            return size;
        }

        public void Add(Size entity)
        {
            _dbContext.Sizes.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(Size entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var size = GetById(id);
            if (size == null)
            {
                throw new KeyNotFoundException($"Size id {id} does not exist");
            }
            _dbContext.Sizes.Remove(size);
            _dbContext.SaveChanges();
        }

    }
}
