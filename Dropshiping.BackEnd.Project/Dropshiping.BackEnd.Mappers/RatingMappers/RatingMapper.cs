using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.RatingDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Mappers.RatingMappers
{
    public static class RatingMapper
    {
        public static RatingDto ToRatingDto(this Rating rating)
        {
            return new RatingDto
            {
                Id = rating.Id,
                Review = rating.Review,
                Rate = rating.Rate,
                Pros = rating.Pros,
                Cons = rating.Cons,
                Date = rating.Date,
                UserId = rating.UserId,
                UserFullName = $"{rating.User.FirstName} {rating.User.LastName}",
            };
        }
        public static Rating ToRatingDomain(this NewRatingDto rating)
        {
            return new Rating
            {
                Review = rating.Review,
                Rate = rating.Rate,
                Pros = rating.Pros,
                Cons = rating.Cons,
                Date = DateTime.Now,
                UserId = rating.UserId,
                ProductId = rating.ProductId,
            };
        }
    }
}
