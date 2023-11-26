using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Services.UserServices.Validations
{
    public static class CardValidations
    {
        public static void ValidateUpdateCard(this CardDto card)
        {
            if (card.CardType < CardTypeEnum.Visa || card.CardType > CardTypeEnum.Default)
            {
                throw new InvalidDataException("Invalid Card Type");
            }
            if (card.CardStatus < CardStatusEnum.Primary || card.CardStatus > CardStatusEnum.Secondary)
            {
                throw new InvalidDataException("Invalid Card Status");
            }
            if (card.CardNumber.ToString().Length != 16)
            {
                throw new InvalidDataException("Invalid card number");
            }
            if (card.CardHolder.Length > 150 || string.IsNullOrEmpty(card.CardHolder))
            {
                throw new InvalidDataException("CardHolder canot have more then 150 chars and cannot be empty.");
            }
            if (card.ExpirationDate.Length != 5)
            {
                throw new InvalidDataException("Invalid expiration date");
            }
            if (card.SecurityCode.ToString().Length != 3)
            {
                throw new InvalidDataException("Invalid Security Code");
            }
        }

        public static void ValidateAddedCard(this AddNewCardDto card)
        {
            if (card.CardType < CardTypeEnum.Visa || card.CardType > CardTypeEnum.Default)
            {
                throw new InvalidDataException("Invalid Card Type");
            }
            if (card.CardStatus < CardStatusEnum.Primary || card.CardStatus > CardStatusEnum.Secondary)
            {
                throw new InvalidDataException("Invalid Card Status");
            }
            if (card.CardNumber.ToString().Length != 16)
            {
                throw new InvalidDataException("Invalid card number");
            }
            if (card.CardHolder.Length > 150 || string.IsNullOrEmpty(card.CardHolder))
            {
                throw new InvalidDataException("CardHolder canot have more then 150 chars and cannot be empty.");
            }
            if (card.ExpirationDate.Length != 5)
            {
                throw new InvalidDataException("Invalid expiration date");
            }
            if (card.SecurityCode.ToString().Length != 3)
            {
                throw new InvalidDataException("Invalid Security Code");
            }
        }
    }
}
