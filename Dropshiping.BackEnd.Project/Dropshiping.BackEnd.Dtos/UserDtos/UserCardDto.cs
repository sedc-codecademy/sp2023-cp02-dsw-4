using Dropshiping.BackEnd.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Dtos.UserDtos
{
    public class UserCardDto
    {
        public string Id { get; set; }
        public CardTypeEnum Type { get; set; }
        public CardStatusEnum CardStatus { get; set; }
        public string Number { get; set; }
        public string Holder { get; set; }
        public string Date { get; set; }
        public int Cvc { get; set; }
    }
}
