using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Dropshiping.BackEnd.Enums;

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
                ProductAvgRating = rating.Product.Rating,
            };

    }
    }
}
