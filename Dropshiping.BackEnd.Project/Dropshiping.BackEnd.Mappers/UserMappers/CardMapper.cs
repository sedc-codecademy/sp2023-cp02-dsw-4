using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos;
using Dropshiping.BackEnd.Dtos.UserDtos;

namespace Dropshiping.BackEnd.Mappers.UserMappers
{
    public static class CardMapper
    {
        public static CardDto ToCardDto(this Card card)
        {
            return new CardDto
            {
                Id = card.Id,
                CardType = card.CardType,
                CardStatus = card.CardStatus,
                CardNumber = card.CardNumber,
                CardHolder = card.CardHolder,
                ExpirationDate = card.ExpirationDate,
                SecurityCode = card.SecurityCode,
                UserId = card.UserId,
            };
        }

        public static Card ToCardModel(this AddNewCardDto addCardDto)
        {
            return new Card
            {
                CardType = addCardDto.CardType,
                CardStatus = addCardDto.CardStatus,
                CardNumber = addCardDto.CardNumber,
                CardHolder = addCardDto.CardHolder,
                ExpirationDate = addCardDto.ExpirationDate,
                SecurityCode = addCardDto.SecurityCode,
            };
        }
    }
}
