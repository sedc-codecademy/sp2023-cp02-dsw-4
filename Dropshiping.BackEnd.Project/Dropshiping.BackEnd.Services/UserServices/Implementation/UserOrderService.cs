using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.UserOrderDtos;
using Dropshiping.BackEnd.Mappers.UserOrderMappers;
using Dropshiping.BackEnd.Services.UserServices.Interface;

namespace Dropshiping.BackEnd.Services.UserServices.Implementation
{
    public class UserOrderService : IUserOrderService
    {
        private IRepository<UserOrder> _userOrderRepository;
        public UserOrderService(IRepository<UserOrder> userOrderRepository)
        {
            _userOrderRepository = userOrderRepository;
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
            //var userOrder = GetById(id);

            //if (userOrder.Id == null)
            //{
            //    throw new KeyNotFoundException($"UserOrder with id {id} was not found.");
            //}
            //if (id == "")
            //{
            //    throw new ArgumentException("You must enter id");
            //}

            _userOrderRepository.Delete(id);
        }
    }
}
