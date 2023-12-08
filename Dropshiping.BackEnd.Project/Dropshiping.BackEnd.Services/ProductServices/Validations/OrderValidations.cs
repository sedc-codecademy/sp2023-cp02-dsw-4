using Dropshiping.BackEnd.Dtos.OrderDtos;
using Dropshiping.BackEnd.Enums;
using System.Text.RegularExpressions;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class OrderValidations
    {
        public static void ValidateOrder(this AddOrderDto order)
        {
            Regex containsOnlyLetters = new Regex("^[a-zA-Z\\s]+$");

            if (!order.OrderItems.Any())
            {
                throw new ArgumentException("There are no Items in the order!");
            }

            if (string.IsNullOrEmpty(order.UserId))
            {
                throw new ArgumentException("UserId is required!");
            }

            if (string.IsNullOrEmpty(order.Address))
            {
                throw new ArgumentException("Address is required!");
            }

            if(order.Address.Length > 50)
            {
                throw new ArgumentException("You've exceeded the limit of 50 characters for Address!");
            }

            if (string.IsNullOrEmpty(order.PostalCode))
            {
                throw new ArgumentException("Postal code is required!");
            }

            if (order.PostalCode.Length != 4)
            {
                throw new ArgumentException("Invalid Postal Code");
            }

            if (string.IsNullOrEmpty(order.City))
            {
                throw new ArgumentException("City is required!");
            }

            if (order.City.Length > 30)
            {
                throw new ArgumentException("You've exceeded the limit of 30 characters for City!");
            }

            if (string.IsNullOrEmpty(order.PhoneNumber))
            {
                throw new ArgumentException("Phone number is required!");
            }

            if (order.PhoneNumber.Length != 9 && !int.TryParse(order.PhoneNumber.Trim(), out int number))
            {
                throw new ArgumentException("Invalid phone number!");
            }

            if (order.Note.Length > 100)
            {
                throw new ArgumentException("You've exceeded the limit of 100 characters for Note!");
            }

            if(order.PaymentStatus < PaymentStatusEnum.Paid || order.PaymentStatus > PaymentStatusEnum.PayingOnDelivery)
            {
                throw new ArgumentException("Invalid Payment status! Choose 1 - Paid or 2 - Paying on delivery!");
            }

            if(order.PaymentStatus == PaymentStatusEnum.Paid)
            {
                if(order.CardType < CardTypeEnum.Visa || order.CardType > CardTypeEnum.Default)
                {
                    throw new ArgumentException("Invalid Card Type!");
                }

                if (order.CardNumber.Length != 16 || !long.TryParse(order.CardNumber.Trim(), out long cardNumber))
                {
                    throw new ArgumentException("Invalid card number!");
                }

                if (string.IsNullOrEmpty(order.CardHolder))
                {
                    throw new ArgumentException("Card Holder is required!");
                }

                if (!containsOnlyLetters.IsMatch(order.CardHolder))
                {
                    throw new ArgumentException("Invalid Card Holder!");
                }

                if (order.SecurityCode.ToString().Length != 3)
                {
                    throw new ArgumentException("Invalid security code!");
                }

                if (order.ExpirationDate.Length != 5)
                {
                    throw new ArgumentException("Invalid expiration date");
                }


            }

        }
    }
}
