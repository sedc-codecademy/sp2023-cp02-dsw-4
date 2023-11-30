using Dropshiping.BackEnd.Dtos.OrderDtos;
using Dropshiping.BackEnd.Dtos.OrderItemDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IOrderService
    {
        List<OrderDto> GetAll();
        List<OrderDto> GetPurchased();
        OrderDto GetById(string id);
        void Add(AddOrderDto addOrderDto);
        void Update(string id);
        void DeleteById(string id);
    }
}
