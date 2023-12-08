﻿using Dropshiping.BackEnd.DataAccess.Interface;
using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.OrderDtos;
using Dropshiping.BackEnd.Mappers.OrderMappers;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Dropshiping.BackEnd.Services.ProductServices.Validations;
using Dropshiping.BackEnd.Services.UserServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class OrderService : IOrderService
    {
        private IRepository<Order> _orderRepository;
        private IUserOrderService _userOrderService;
        private IOrderitemService _orderItemService;
        private IProductSizeService _productSizeService;
        public OrderService(IRepository<Order> orderRepository, IUserOrderService userOrderService, IOrderitemService orderItemService, IProductSizeService productSizeService)
        {
            _orderRepository = orderRepository;
            _userOrderService = userOrderService;
            _orderItemService = orderItemService;
            _productSizeService = productSizeService;
        }

        public void Add(AddOrderDto addOrderDto)
        {
            addOrderDto.ValidateOrder();
            var orderItems = addOrderDto.OrderItems;

            foreach (var item in orderItems)
            {
                _productSizeService.UpdateStock(item.ProductSizeId, item.Quantity);
            }

            var newOrder = addOrderDto.ToOrderDomain();

            _orderRepository.Add(newOrder);
            _orderItemService.Add(orderItems, newOrder.Id);
            _userOrderService.Add(addOrderDto.UserId, newOrder.Id);
        }

        public void DeleteById(string id)
        {
            _orderRepository.Delete(id);
        }

        public List<OrderDto> GetAll()
        {
            var orders = _orderRepository.GetAll().Select(x => x.ToOrderDto()).ToList();
            if(orders.Count == 0)
            {
                throw new ArgumentException("There are no orders!");
            }
            return orders;
        }

        public List<OrderDto> GetPurchased()
        {
            var orders =  GetAll().Where(x => x.Status == "Purchased").ToList();
            if (orders.Count == 0)
            {
                throw new ArgumentException("There are no new orders!");
            }

            return orders;
        }

        public OrderDto GetById(string id)
        {
            var order = _orderRepository.GetById(id);
            return order.ToOrderDto();
        }

        public void Update(string id)
        {
            var order = _orderRepository.GetById(id);

            if(order.Status == Enums.DeliveryStatusEnum.Purchased)
            {
                order.Status = Enums.DeliveryStatusEnum.OnTheWay;
            }else if(order.Status == Enums.DeliveryStatusEnum.OnTheWay)
            {
                order.Status = Enums.DeliveryStatusEnum.Delivered;
            }
            _orderRepository.Update(order);
        }
    }
}