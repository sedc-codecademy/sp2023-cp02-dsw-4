
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderItemDtos;

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
                ProductId = orderItem.ProductSize.ProductId,
                ProductName = orderItem.ProductSize.Product.Name,
                ProductImage = orderItem.ProductSize.Product.Image,
                Size = orderItem.ProductSize.Size.Name,
                Color = orderItem.ProductSize.Color.Name,
                Price = orderItem.ProductSize.Product.Price,
            };
        }

        public static OrderItem ToOrderItemDomain(this AddOrderItemDto orderItem, string orderId)
        {
            return new OrderItem
            {
                OrderId = orderId,
                Quantity = orderItem.Quantity,
                ProductSizeId = orderItem.ProductSizeId,
            };
        }
    }
}
