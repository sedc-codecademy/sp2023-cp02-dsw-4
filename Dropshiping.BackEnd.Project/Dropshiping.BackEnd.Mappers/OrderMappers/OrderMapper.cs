using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderDtos;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Microsoft.VisualBasic;

namespace Dropshiping.BackEnd.Mappers.OrderMappers
{
    public static class OrderMapper
    {
        public static BasicOrderDto ToBasicOrderDto(this Order order)
        {
            return new BasicOrderDto
            {
                Id = order.Id,
                PurchasedTime = order.PurchasedTime,
                Address = order.Address,
                PostalCode = order.PostalCode,
                City = order.City,
                PhoneNumber = order.PhoneNumber,
                Note = order.Note,
                Shipping = order.Shipping,
                Price = order.Price,
                Status = order.Status,
                PaymentStatus = order.PaymentStatus,
                CardType = order.CardType,
            };
        }
    }
}
