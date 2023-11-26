using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class CardRepository : IRepository<Card>
    {
        private DropshipingDbContext _dbContext;

        public CardRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Add(Card entity)
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
        public List<Card> GetAll()
        {
            return _dbContext.Set<Card>().Include(x => x.User).ToList();
        }

        public Card GetById(string id)
        {
            var card = _dbContext.Cards.Include(r => r.User).FirstOrDefault(x => x.Id == id);

            if (card == null)
                throw new KeyNotFoundException($"Card with id {id} does not exist");

            return card;
        }

        public void Update(Card entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }
    }
}
