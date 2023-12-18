using Dropshiping.BackEnd.Enums;

namespace Dropshiping.BackEnd.Dtos.OrderDtos
{
    public class UpdateOrderDto
    { 
        public string Id { get; set; }
        public DeliveryStatusEnum DeliveryStatus { get; set; }

    }
}
