using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderItemDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;
using Dropshiping.BackEnd.Mappers.OrderMappers;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class OrderitemService : IOrderitemService
    {
        private IRepository<OrderItem> _orderItemRepository;
        public OrderitemService(IRepository<OrderItem> orderitemRepository)
        {
            _orderItemRepository = orderitemRepository;
        }

        public List<OrderItemDto> GetAll()
        {
            var orderitem = _orderItemRepository.GetAll();
            return orderitem.Select(x => x.ToOrderItemDto()).ToList();
        }

        public OrderItemDto GetById(string id)
        {
            var orderitem = _orderItemRepository.GetById(id);

            if (orderitem == null)
            {
                throw new KeyNotFoundException($"Orderitem with id {id} is not found");
            }

            return orderitem.ToOrderItemDto();
        }

        public void Add(List<AddOrderItemDto> orderItemDtos, string orderId)
        {
            
            var mappedOrderItems = orderItemDtos.Select(x => x.ToOrderItemDomain(orderId)).ToList();
            foreach (var item in mappedOrderItems)
            {
                _orderItemRepository.Add(item);
            }
        }

        public void Update(OrderItemDto orderitemDto)
        {
            var orderitem = _orderItemRepository.GetById(orderitemDto.Id);

            orderitem.Quantity = orderitemDto.Quantity;

            _orderItemRepository.Update(orderitem);
        }

        public void DeleteById(string id)
        {
            //var orderitem = GetById(id);

            //if (orderitem == null)
            //{
            //    throw new KeyNotFoundException($"Orderitem with id {id} was not found.");
            //}
            //if (id == "")
            //{
            //    throw new ArgumentException("You must enter id");
            //}

            _orderItemRepository.Delete(id);
        }
    }
}
