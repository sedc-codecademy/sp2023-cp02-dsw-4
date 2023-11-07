using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.RatingDtos;
using Dropshiping.BackEnd.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class RatingValidations
    {
        public static void ValidateNewRating(this NewRatingDto rating)
        {
            if (rating.Rate < RateEnum.One || rating.Rate > RateEnum.Five)
            {
                throw new InvalidDataException("Invalid rate value!");
            }
            if (!string.IsNullOrEmpty(rating.Review) && rating.Review.Length > 500)
            {
                throw new InvalidDataException("Review must be less than 500 characters!");
            }
            if (!string.IsNullOrEmpty(rating.Pros) && rating.Pros.Length > 250)
            {
                throw new InvalidDataException("Pros must be less than 250 characters!");
            }
            if (!string.IsNullOrEmpty(rating.Cons) && rating.Cons.Length > 250)
            {
                throw new InvalidDataException("Cons must be less than 250 characters!");
            }
            if (string.IsNullOrEmpty(rating.ProductId))
            {
                throw new ArgumentNullException("ProductId is required!");
            }
            if (string.IsNullOrEmpty(rating.UserId))
            {
                throw new ArgumentNullException("UserId is required!");
            }
        }

        public static void ValidateUpdateRating(this UpdateRatingDto rating)
        {
            if (rating.Rate < RateEnum.One || rating.Rate > RateEnum.Five)
            {
                throw new InvalidDataException("Invalid rate value!");
            }
            if (!string.IsNullOrEmpty(rating.Review) && rating.Review.Length > 500)
            {
                throw new InvalidDataException("Review must be less than 500 characters!");
            }
            if (!string.IsNullOrEmpty(rating.Pros) && rating.Pros.Length > 250)
            {
                throw new InvalidDataException("Pros must be less than 250 characters!");
            }
            if (!string.IsNullOrEmpty(rating.Cons) && rating.Cons.Length > 250)
            {
                throw new InvalidDataException("Cons must be less than 250 characters!");
            }
        }
    }
}
