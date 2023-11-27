using Dropshiping.BackEnd.DataAccess.Interface;

namespace Dropshiping.BackEnd.DataAccess.Implementation
{
    public class OrderRepository : IOrderRepository
    {
        private DropshipingDbContext _dbContext;
        public OrderRepository(DropshipingDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    }
}
