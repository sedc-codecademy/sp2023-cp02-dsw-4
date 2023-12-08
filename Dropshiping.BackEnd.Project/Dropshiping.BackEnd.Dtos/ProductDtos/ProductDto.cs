
using Dropshiping.BackEnd.Dtos.RatingDtos;

namespace Dropshiping.BackEnd.Dtos.ProductDtos
{
    public class ProductDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int DiscountPercentage { get; set; }
        public decimal DiscountedPrice
        {
            get
            {
                if (DiscountPercentage == 0)
                {
                    return Price;
                }
                
                decimal discount = Price * DiscountPercentage / 100; 

                return Price - discount;
            }
        }
        public string Image { get; set; }
        public ICollection<RatingDto> Ratings { get; set; }
        public decimal Rating
        {
            get
            {
                if (!Ratings.Any())
                {
                    return 0;
                }
                decimal sum = Ratings.Sum(r => (int)r.Rate);

                return sum / Ratings.Count;
            }
        }

        public ProductDto()
        {
            Ratings = new List<RatingDto>();
        }
        



    }
}
