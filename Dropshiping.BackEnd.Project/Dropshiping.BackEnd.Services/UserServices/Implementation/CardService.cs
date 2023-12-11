
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Dropshiping.BackEnd.Enums;
using Dropshiping.BackEnd.Mappers.UserMappers;
using Dropshiping.BackEnd.Services.UserServices.Interface;
using Dropshiping.BackEnd.Services.UserServices.Validations;

namespace Dropshiping.BackEnd.Services.UserServices.Implementation
{
    public class CardService : ICardService
    {
        private IRepository<Card> _cardRepository;
        private IUserRepository _userRepository;

        public CardService(IRepository<Card> cardRepository, IUserRepository userRepository)
        {
            _cardRepository = cardRepository;
            _userRepository = userRepository;
        }

        public List<CardDto> GetAll()
        {
            var cards = _cardRepository.GetAll();
            return cards.Select(x => x.ToCardDto()).ToList();
        }

        public CardDto GetById(string id)
        {
            var card = _cardRepository.GetById(id);

            if (card == null)
            {
                throw new KeyNotFoundException($"Card with id {id} is not found");
            }
            return card.ToCardDto();
        }


        public void Add(string id, AddNewCardDto addCardDto)
        {
            var user = _userRepository.GetById(id);

            if (user == null)
            {
                throw new KeyNotFoundException($"User with id {id} is not found");
            }

            if (user.Cards.Count >= 2)
            {
                throw new ArgumentException("Maximum of 2 cards allowed");
            }

            addCardDto.ValidateAddedCard();

            foreach(var card1 in user.Cards)
            {
                if((addCardDto.CardNumber) == card1.CardNumber)
                {
                    throw new ArgumentException("This card number is already entered!");
                }
            }

            if (user.Cards is null)
            {
                addCardDto.CardStatus = CardStatusEnum.Primary;
            }
            else
            {
                addCardDto.CardStatus = CardStatusEnum.Secondary;
            }

            var card = addCardDto.ToCardModel();
            card.UserId = user.Id;
            _cardRepository.Add(card);
        }

        public void Update(CardDto cardDto)
        {
            var card = _cardRepository.GetById(cardDto.Id);
            if (card == null)
            {
                throw new KeyNotFoundException($"A Card with id:{cardDto.Id} does not exist");
            }
            if (card.UserId != cardDto.UserId)
            {
                throw new ArgumentException("Not authorized to update this card!");
            }

            cardDto.ValidateUpdateCard();

            if (cardDto.CardType != null)
            {
                card.CardType = (CardTypeEnum)cardDto.CardType;
            }
           
            if (cardDto.CardStatus != null)
            {
                card.CardStatus = (CardStatusEnum)cardDto.CardStatus;
            }

            if (cardDto.CardNumber != null)
            {
                card.CardNumber = (long)cardDto.CardNumber;
            }

            if (cardDto.CardHolder != null)
            {
                card.CardHolder = cardDto.CardHolder;
            }

            if (cardDto.ExpirationDate != null)
            {
                card.ExpirationDate = cardDto.ExpirationDate;
            }

            if (cardDto.SecurityCode != null)
            {
                card.SecurityCode = (int)cardDto.SecurityCode;
            }


            _cardRepository.Update(card);
        }

        public void DeleteById(string id)
        {
            var card = GetById(id);

            if (card.Id == null)
            {
                throw new KeyNotFoundException($"Card with id {id} was not found.");
            }

            _cardRepository.Delete(id);
        }

    }
}
