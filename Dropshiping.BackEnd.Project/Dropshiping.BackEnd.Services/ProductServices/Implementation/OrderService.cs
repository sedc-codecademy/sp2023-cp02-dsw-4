using Dropshiping.BackEnd.DataAccess.Implementation;
using Dropshiping.BackEnd.Services.ProductServices.Interface;

namespace Dropshiping.BackEnd.Services.ProductServices.Implementation
{
    public class OrderService : IOrderService
    {
        private OrderRepository _orderRepository;
        public OrderService(OrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }






    }
}
