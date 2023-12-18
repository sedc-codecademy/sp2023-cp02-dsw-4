using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.RatingDtos;
using Dropshiping.BackEnd.Mappers.RatingMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using XAct.Security;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class RatingService : IRatingService
    {
        private IRepository<Rating> _ratingRepository;
        private IProductRepository _productRepository;
        private IUserRepository _userRepository;
        public RatingService(IRepository<Rating> ratingRepository, IProductRepository productRepository, IUserRepository userRepository)
        {
            _ratingRepository = ratingRepository;
            _productRepository = productRepository;
            _userRepository = userRepository;
        }
        public void Add(NewRatingDto newRatingDto)
        {
            newRatingDto.ValidateNewRating();
            var user = _userRepository.GetById(newRatingDto.UserId);
            var product = _productRepository.GetById(newRatingDto.ProductId);

            var userRatingExists = product.Ratings.FirstOrDefault(x => x.UserId == newRatingDto.UserId);

            if(user == null)
            {
                throw new KeyNotFoundException($"A User with id:{newRatingDto.UserId} does not exist");
            }
            if (product == null)
            {
                throw new KeyNotFoundException($"A Product with id:{newRatingDto.ProductId} does not exist");
            }
            if(userRatingExists != null ) 
            {
                throw new ArgumentException($"You have already rated this product!");
            }

            _ratingRepository.Add(newRatingDto.ToRatingDomain());
        }
            
        

        public void DeleteById(string id, string userId)
        {
            var rating = _ratingRepository.GetById(id);
            var user = _userRepository.GetById(userId);

            if (rating == null)
            {
                throw new KeyNotFoundException($"A Rating with id:{id} does not exist");
            }
            if (user == null)
            {
                throw new KeyNotFoundException($"A User with id:{userId} does not exist");
            }
            if (rating.UserId != userId && user.Role != Enums.RoleEnum.Admin)
            {
                throw new ArgumentException($"Not authorized to delete this rating!");
            }
            _ratingRepository.Delete(id);
        }

        public List<RatingDto> GetAll()
        {
            var ratings = _ratingRepository.GetAll();
            return ratings.Select(r => r.ToRatingDto()).ToList();
        }

        public RatingDto GetById(string id)
        {
            var rating = _ratingRepository.GetById(id);
            if (rating == null)
            {
                throw new KeyNotFoundException($"Rating with id: {id} does not exist!");
            }
            return rating.ToRatingDto();
        }

        public void Update(UpdateRatingDto ratingDto)
        {
            var rating = _ratingRepository.GetById(ratingDto.Id);
            if (rating == null)
            {
                throw new KeyNotFoundException($"A Rating with id:{ratingDto.Id} does not exist");
            }
            if(rating.UserId != ratingDto.UserId)
            {
                throw new ArgumentException($"Not authorized to update this rating!");
            }

            ratingDto.ValidateUpdateRating();
            rating.Date = DateTime.Now;
            rating.Rate = ratingDto.Rate;
            rating.Review = ratingDto.Review;
            rating.Pros = ratingDto.Pros;
            rating.Cons = ratingDto.Cons;

            _ratingRepository.Update(rating);
        }
    }
}
