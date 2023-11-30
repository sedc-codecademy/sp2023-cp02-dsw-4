
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;
using Microsoft.EntityFrameworkCore;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class UserRepository : IUserRepository
    {
        private DropshipingDbContext _dbContext;
        public UserRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<User> GetAll()
        {
            return _dbContext.Users.ToList();
        }

        public User GetById(string id)
        {

            var user = _dbContext.Users.Include(u => u.Ratings).ThenInclude(r => r.Product)
                                       .Include(u => u.Cards)
                                       .Include(u => u.UserOrders).ThenInclude(x => x.Order)
                                       .FirstOrDefault(u => u.Id == id);

            return user ?? throw new KeyNotFoundException($"User with id {id} does not exist");
        }

        public void Add(User entity)
        {
            _dbContext.Users.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(User entity)
        {
            _dbContext.Users.Update(entity);
            _dbContext.SaveChanges();
        }

        public void Delete(string id)
        {
            var user = GetById(id);

            _dbContext.Users.Remove(user);
            _dbContext.SaveChanges();
        }

        public User LoginUser(string username, string hashedPassword)
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.Username == username && x.Password == hashedPassword);

            return user ?? throw new KeyNotFoundException($"The username or the password is incorrect"); 
        }

        public User GetUserByUserName(string userName)
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.Username.ToLower() == userName.ToLower());

            return user;
        }
    }
}
