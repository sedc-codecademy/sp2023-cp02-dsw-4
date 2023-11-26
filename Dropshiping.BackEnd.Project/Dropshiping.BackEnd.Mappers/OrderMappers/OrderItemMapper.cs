using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderDtos;

namespace Dropshiping.BackEnd.Mappers.OrderMappers
{
    public static class OrderItemMapper
    {
        public static OrderItemDto ToOrderItemDto(this OrderItem orderItem)
        {
            return new OrderItemDto
            {
                Id = orderItem.Id,
                Quantity = orderItem.Quantity,
                ProductSizeId = orderItem.ProductSizeId,
                OrderId = orderItem.OrderId,
            };
        }
    }
}
