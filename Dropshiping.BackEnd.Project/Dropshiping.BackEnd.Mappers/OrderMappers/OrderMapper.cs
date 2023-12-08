using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderDtos;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Mappers.OrderMappers
{
    public static class OrderMapper
    {
        public static OrderDto ToOrderDto(this Order order)
        {
            var userOrderRecepient = order.UserOrders.FirstOrDefault(x => x.User.Role == RoleEnum.User);
            var userOrderCourier = order.UserOrders.FirstOrDefault(x => x.User.Role == RoleEnum.Courier);

            if (userOrderRecepient == null)
            {
                throw new KeyNotFoundException("User info is not found!");
            }

            var user = userOrderRecepient.User;

            var orderDto = new OrderDto
            {
                Id = order.Id,
                PurchasedTime = order.PurchasedTime,
                Address = order.Address,
                PostalCode = order.PostalCode,
                City = order.City,
                PhoneNumber = order.PhoneNumber,
                Note = order.Note,
                Recepient = $"{user.FirstName} {user.LastName}",
                Email = user.Email,
                Status = Enum.GetName(typeof(DeliveryStatusEnum), order.Status),
                PaymentStatus = Enum.GetName(typeof(PaymentStatusEnum), order.PaymentStatus),
                OrderItems = order.OrderItems.Select(x => x.ToOrderItemDto()).ToList()
            };

            if (userOrderCourier != null)
            {
                orderDto.Courier = $"{userOrderCourier.User.FirstName} {userOrderCourier.User.LastName}";
            }

            return orderDto;
        }

        public static Order ToOrderDomain(this AddOrderDto order)
        {

            var newOrder = new Order
            {
                PurchasedTime = DateTime.Now,
                Address = order.Address,
                PostalCode= order.PostalCode,
                City = order.City,
                PhoneNumber = order.PhoneNumber,
                PaymentStatus = order.PaymentStatus,
                Status = DeliveryStatusEnum.Purchased,
            };

            
            if (!string.IsNullOrEmpty(order.Note))
            {
                newOrder.Note = order.Note;
            }
            if(order.PaymentStatus == PaymentStatusEnum.Paid)
            {
                if (long.TryParse(order.CardNumber, out long cardNumberValue))
                {
                    newOrder.CardNumber = cardNumberValue;
                }
                newOrder.CardType = order.CardType;
            }

            return newOrder;
        }
    }
}
