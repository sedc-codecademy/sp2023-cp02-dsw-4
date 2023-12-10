using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class SubscriberRepository : IRepository<Subscriber>
    {
        private DropshipingDbContext _dbContext;
        public SubscriberRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Subscriber> GetAll()
        {
            return _dbContext.Subscribers.ToList();
        }

        public Subscriber GetById(string email)
        {
            var subscribe = _dbContext.Subscribers.FirstOrDefault(x => x.Email == email);

            if (subscribe == null)
            {
                throw new KeyNotFoundException($"Subscriber with email {email} does not exist");
            }
            return subscribe;
        }

        public void Add(Subscriber entity)
        {
            _dbContext.Subscribers.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(Subscriber entity)
        {
            _dbContext.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var subscriber = GetById(id);

            _dbContext.Subscribers.Remove(subscriber);
            _dbContext.SaveChanges();
        }

        

        
    }
}
