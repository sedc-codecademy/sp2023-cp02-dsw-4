using Dropshiping.BackEnd.Dtos.CategoryDtos;
using Dropshiping.BackEnd.Dtos.SubscriberDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface ISubscriberService
    {
        List<SubscriberDto> GetAll();
        SubscriberDto GetById(string email);
        void Add(SubscriberDto subscriberDto);
        void Update(SubscriberDto subscriberDto);
        void DeleteById(string email);
    }
}
