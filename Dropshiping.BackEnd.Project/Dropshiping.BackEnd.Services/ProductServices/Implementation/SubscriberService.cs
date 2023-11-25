using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.ManufacturerDtos;
using Dropshiping.BackEnd.Dtos.SubscriberDtos;
using Dropshiping.BackEnd.Mappers.SubsriberUselessMaper;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class SubscriberService : ISubscriberService
    {
        private IRepository<Subscriber> _subscriberRepository;
        public SubscriberService(IRepository<Subscriber> subscriberRepository)
        {
            _subscriberRepository = subscriberRepository;
        }

        public List<SubscriberDto> GetAll()
        {
            var manufacturer = _subscriberRepository.GetAll();
            return manufacturer.Select(x => x.ToDtoSubs()).ToList();
        }

        public SubscriberDto GetById(string email)
        {
            var subscriber = _subscriberRepository.GetById(email);

            if (subscriber == null)
            {
                throw new KeyNotFoundException($"Subscriber with email {email} is not found");
            }

            return subscriber.ToDtoSubs();
        }

        public void Add(SubscriberDto subscriberDto)
        {
            if (subscriberDto.Email == null)
            {
                throw new ArgumentNullException("Email must not be empty");
            }

            var subscriber = new Subscriber
            {
                Email = subscriberDto.Email

            };

            _subscriberRepository.Add(subscriber);
        }

        public void Update(SubscriberDto subscriberDto)
        {
            var subscriber = _subscriberRepository.GetById(subscriberDto.Id);

            subscriber.Email = subscriberDto.Email;
           

            if (subscriberDto.Email == null)
            {
                throw new ArgumentNullException("Email must not be empty");
            }
            _subscriberRepository.Update(subscriber);
        }

        public void DeleteById(string email)
        {
            var subscriber = GetById(email);

            if (subscriber.Email == null)
            {
                throw new KeyNotFoundException($"Subscriber with email {email} was not found.");
            }
            
            _subscriberRepository.Delete(subscriber.Email);
        }

        
    }
}
