using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.RatingDtos
{
    public class RatingDto
    {
        public string Id { get; set; }
        public RateEnum Rate { get; set; }
        public DateTime Date { get; set; }
        public string Review { get; set; }
        public string Pros { get; set; }
        public string Cons { get; set; }
        public string UserFullName { get; set; }
        public string UserId { get; set; }
    }
}
