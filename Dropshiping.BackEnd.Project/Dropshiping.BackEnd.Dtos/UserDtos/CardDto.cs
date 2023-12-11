
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class CardDto
    {
        public string Id { get; set; }
        public CardTypeEnum CardType { get; set; }
        public CardStatusEnum CardStatus { get; set; }
        public long CardNumber { get; set; }
        public string CardHolder { get; set; }
        public string ExpirationDate { get; set; }
        public int SecurityCode { get; set; }
        public string UserId { get; set; }
    }
}
