using Dropshiping.BackEnd.Domain.UserModels;
using Dropshiping.BackEnd.Dtos.SubscriberDtos;

namespace Dropshiping.BackEnd.Mappers.SubsriberUselessMaper
{
    public static class SubscriberMapper
    {
        public static SubscriberDto ToDtoSubs(this Subscriber subscriber)
        {
            return new SubscriberDto
            {
                Email = subscriber.Email ,
            };
        }
    }
}
