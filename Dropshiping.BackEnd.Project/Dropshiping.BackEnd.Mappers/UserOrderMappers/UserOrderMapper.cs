using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.UserOrderDtos;

namespace Dropshiping.BackEnd.Mappers.UserOrderMappers
{
    public static class UserOrderMapper
    {
        public static UserOrderDto ToDtoUserOrder(this UserOrder userOrder)
        {
            return new UserOrderDto
            {
                Id = userOrder.Id,
                UserId = userOrder.UserId,
                OrderId = userOrder.OrderId,
            };
        }

        public static UserOrder ToUserOrderDomain(string userId, string orderId)
        {
            return new UserOrder
            {
                UserId = userId,
                OrderId = orderId,
            };
        }
    }
}
