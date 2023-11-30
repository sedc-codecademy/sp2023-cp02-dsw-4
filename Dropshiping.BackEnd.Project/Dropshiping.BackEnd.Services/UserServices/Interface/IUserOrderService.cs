using Dropshiping.BackEnd.Dtos.UserOrderDtos;

namespace Dropshiping.BackEnd.Services.UserServices.Interface
{
    public interface IUserOrderService
    {
        List<UserOrderDto> GetAll();
        UserOrderDto GetById(string id);
        void Add(string userId, string orderId);
        void Update(UserOrderDto userOrderDto);
        void DeleteById(string id);
    }
}
