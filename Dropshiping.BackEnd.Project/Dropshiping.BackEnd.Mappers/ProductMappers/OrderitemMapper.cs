using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderitemDtos;

namespace Dropshiping.BackEnd.Mappers.ProductMappers
{
    public static class OrderitemMapper
    {
        public static OrderitemDto ToDtoOrderitem(this OrderItem orderitem)
        {
            return new OrderitemDto
            {
                Id = orderitem.Id,
                Quantity = orderitem.Quantity,
                OrderId = orderitem.OrderId,
                ProductSizeId = orderitem.ProductSizeId
            };
        }
    }
}
