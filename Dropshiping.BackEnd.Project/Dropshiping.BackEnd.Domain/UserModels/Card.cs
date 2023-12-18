using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Domain.UserModels
{
    public class Card : BaseEntity
    {
        public long CardNumber { get; set; }
        public string CardHolder { get; set; }
        //string
        public string ExpirationDate { get; set; }
        public int SecurityCode { get; set; }
        public CardStatusEnum CardStatus { get; set; }
        public CardTypeEnum CardType { get; set; }

        //relation with User

        public string UserId { get; set; }
        public virtual User User { get; set; }
    }
}
