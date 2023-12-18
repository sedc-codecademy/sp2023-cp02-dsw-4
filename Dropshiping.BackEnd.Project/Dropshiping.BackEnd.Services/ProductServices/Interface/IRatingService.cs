using Dropshiping.BackEnd.Dtos.CategoryDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.RatingDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IRatingService
    {
        List<RatingDto> GetAll();
        RatingDto GetById(string id);
        void Add(NewRatingDto newRatingDto);
        void Update(UpdateRatingDto ratingDto);
        void DeleteById(string id, string userId);
    }
}
