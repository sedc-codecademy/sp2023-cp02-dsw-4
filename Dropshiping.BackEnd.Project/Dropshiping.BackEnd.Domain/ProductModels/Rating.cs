using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Rating : BaseEntity
    {
        public RateEnum Rate {  get; set; }

        public DateTime Date { get; set; }
        public string Review { get; set; }
        public string Pros {  get; set; }
        public string Cons { get; set; }

        // Relation conections
        public virtual Product Product { get; set; }
        public string ProductId { get; set; }
        public virtual User User { get; set; }
        public string UserId { get; set; }

    }
}
