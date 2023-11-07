using Dropshiping.BackEnd.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Dtos.RatingDtos
{
    public class NewRatingDto
    {
        public RateEnum Rate { get; set; }
        public string Review { get; set; }
        public string Pros { get; set; }
        public string Cons { get; set; }
        public string ProductId { get; set; }
        public string UserId { get; set; }
    }
}
