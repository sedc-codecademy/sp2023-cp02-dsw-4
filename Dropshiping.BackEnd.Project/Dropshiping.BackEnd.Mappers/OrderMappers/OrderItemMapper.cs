
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderItemDtos;

namespace Dropshiping.BackEnd.Mappers.OrderMappers
{
    public static class OrderItemMapper
    {
        public static OrderItemDto ToOrderItemDto(this OrderItem orderItem)
        {
            var discount = (orderItem.ProductSize.Product.Price * orderItem.ProductSize.Product.Discount) / 100;

            return new OrderItemDto
            {
                Id = orderItem.Id,
                Quantity = orderItem.Quantity,
                ProductId = orderItem.ProductSize.ProductId,
                ProductName = orderItem.ProductSize.Product.Name,
                ProductImage = orderItem.ProductSize.Product.Image,
                Size = orderItem.ProductSize.SizeId,
                Color = orderItem.ProductSize.ColorId,
                Price = orderItem.ProductSize.Product.Price - discount,
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
