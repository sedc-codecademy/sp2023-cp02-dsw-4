using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderitemDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;
using Dropshiping.BackEnd.Mappers.ProductMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class OrderitemService : IOrderitemService
    {
        private IRepository<OrderItem> _orderitemRepository;
        public OrderitemService(IRepository<OrderItem> orderitemRepository)
        {
            _orderitemRepository = orderitemRepository;
        }

        public List<OrderitemDto> GetAll()
        {
            var orderitem = _orderitemRepository.GetAll();
            return orderitem.Select(x => x.ToDtoOrderitem()).ToList();
        }

        public OrderitemDto GetById(string id)
        {
            var orderitem = _orderitemRepository.GetById(id);

            if (orderitem == null)
            {
                throw new KeyNotFoundException($"Orderitem with id {id} is not found");
            }

            return orderitem.ToDtoOrderitem();
        }

        public void Add(OrderitemAddDto orderitemAddDto)
        {
            var orderitem = new OrderItem
            {
                Quantity = orderitemAddDto.Quantity,
                OrderId = orderitemAddDto.OrderId,
                ProductSizeId = orderitemAddDto.ProductSizeId,
            };

            _orderitemRepository.Add(orderitem);
        }

        public void Update(OrderitemDto orderitemDto)
        {
            var orderitem = _orderitemRepository.GetById(orderitemDto.Id);

            orderitem.Quantity = orderitemDto.Quantity;
            orderitem.OrderId = orderitemDto.OrderId;
            orderitem.ProductSizeId = orderitemDto.ProductSizeId;

            _orderitemRepository.Update(orderitem);
        }

        public void DeleteById(string id)
        {
            var orderitem = GetById(id);

            if (orderitem.Id == null)
            {
                throw new KeyNotFoundException($"Orderitem with id {id} was not found.");
            }
            if (id == "")
            {
                throw new ArgumentException("You must enter id");
            }

            _orderitemRepository.Delete(orderitem.Id);
        }
    }
}
