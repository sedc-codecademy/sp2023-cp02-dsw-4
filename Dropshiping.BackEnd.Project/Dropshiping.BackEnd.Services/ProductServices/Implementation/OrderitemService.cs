using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderItemDtos;
using Dropshiping.BackEnd.Mappers.OrderMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;

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
            var orderitems = _orderItemRepository.GetAll();
            return orderitems.Select(x => x.ToOrderItemDto()).ToList();
        }

        public OrderItemDto GetById(string id)
        {
            var orderitem = _orderItemRepository.GetById(id);

            if (orderitem == null)
            {
                throw new KeyNotFoundException($"Order Item with id {id} is not found");
            }

            return orderitem.ToOrderItemDto();
        }

        public void Add(List<AddOrderItemDto> orderItemsDto, string orderId)
        {
            orderItemsDto.ForEach(x => x.ValidateOrderItem());

            var mappedOrderItems = orderItemsDto.Select(x => x.ToOrderItemDomain(orderId)).ToList();

            mappedOrderItems.ForEach(x => _orderItemRepository.Add(x));
        }

        public void Update(OrderItemDto orderitemDto)
        {
            var orderitem = _orderItemRepository.GetById(orderitemDto.Id);

            orderitem.Quantity = orderitemDto.Quantity;

            _orderItemRepository.Update(orderitem);
        }

        public void DeleteById(string id)
        {
            var orderitem = GetById(id);

            if (orderitem == null)
            {
                throw new KeyNotFoundException($"Order Item with id {id} was not found.");
            }

            _orderItemRepository.Delete(id);
        }
    }
}
