using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.UserDtos;

namespace Dropshiping.BackEnd.Mappers.UserMappers
{
    public static class UserOrderMapper
    {
        public static UserOrderDto ToUserOrderDto(this UserOrder userOrder)
        {
            return new UserOrderDto
            {
                Id = userOrder.Id,
                OrderId = userOrder.OrderId,
            };
        }
    }
}
