using Dropshiping.BackEnd.Dtos.OrderitemDtos;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IOrderitemService
    {
        List<OrderitemDto> GetAll();
        OrderitemDto GetById(string id);
        void Add(OrderitemAddDto orderitemAddDto);
        void Update(OrderitemDto orderitemDto);
        void DeleteById(string id);
    }
}
