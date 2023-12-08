using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.UserOrderDtos;
using Dropshiping.BackEnd.Mappers.UserOrderMappers;
using Dropshiping.BackEnd.Services.UserServices.Interface;

namespace Dropshiping.BackEnd.Services.UserServices.Implementation
{
    public class UserOrderService : IUserOrderService
    {
        private IRepository<UserOrder> _userOrderRepository;
        private IUserRepository _userRepository;
        private IRepository<Order> _orderRepository;
        public UserOrderService(IRepository<UserOrder> userOrderRepository, IUserRepository userRepository, IRepository<Order> orderRepository)
        {
            _userOrderRepository = userOrderRepository;
            _userRepository = userRepository;
            _orderRepository = orderRepository;
        }

        public List<UserOrderDto> GetAll()
        {
            var userOrder = _userOrderRepository.GetAll();
            return userOrder.Select(x => x.ToDtoUserOrder()).ToList();
        }

        public UserOrderDto GetById(string id)
        {
            var userOrder = _userOrderRepository.GetById(id);

            if (userOrder == null)
            {
                throw new KeyNotFoundException($"UserOrder with id {id} is not found");
            }

            return userOrder.ToDtoUserOrder();
        }

        public void Add(string userId, string orderId)
        {
            var user = _userRepository.GetById(userId);
            var order = _orderRepository.GetById(orderId);

            if (user == null)
            {
                throw new KeyNotFoundException($"User with id {userId} doesn't exists.");
            }

            if (order == null)
            {
                throw new KeyNotFoundException($"Order with id {orderId} doesn't exists.");
            }

            var userOrder = UserOrderMapper.ToUserOrderDomain(userId, orderId);
            _userOrderRepository.Add(userOrder);
        }

        public void Update(UserOrderDto userOrderDto)
        {
            var userOrder = _userOrderRepository.GetById(userOrderDto.Id);

            userOrder.UserId = userOrderDto.UserId;
            userOrder.OrderId = userOrderDto.OrderId;
            

            _userOrderRepository.Update(userOrder);
        }

        public void DeleteById(string id)
        {
            var userOrder = GetById(id);

            if (userOrder == null)
            {
                throw new KeyNotFoundException($"UserOrder with id {id} was not found.");
            }

            _userOrderRepository.Delete(id);
        }
    }
}
