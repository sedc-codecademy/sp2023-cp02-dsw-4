
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.UserDtos;

namespace Dropshiping.BackEnd.Mappers.UserMappers
{
    public static class UserRatingMapper
    {
        public static UserRatingDto ToUserRatingDto(this Rating rating)
        {
            return new UserRatingDto
            {
                Id = rating.Id,
                Rate = rating.Rate,
                Date = rating.Date,
                Review = rating.Review,
                Pros = rating.Pros,
                Cons = rating.Cons,
                ProductId = rating.ProductId,
                ProductName = rating.Product.Name,
                ProductImage = rating.Product.Image,
                ProductAvgRating = (decimal)rating.Product.Ratings.Average(x => (int)x.Rate),
            };

    }
    }
}
