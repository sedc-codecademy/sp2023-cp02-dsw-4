
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderItemDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IOrderitemService
    {
        List<OrderItemDto> GetAll();
        OrderItemDto GetById(string id);
        void Add(List<AddOrderItemDto> orderitemAddDto, string orderId);
        void Update(OrderItemDto orderitemDto);
        void DeleteById(string id);
    }
}
