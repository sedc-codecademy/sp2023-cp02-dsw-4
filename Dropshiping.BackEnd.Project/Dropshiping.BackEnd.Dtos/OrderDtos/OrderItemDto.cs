using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Dtos.OrderDtos
{
    public class OrderItemDto
    {
        public string Id { get; set; }
        public int Quantity { get; set; }
        public string ProductSizeId { get; set; }
        public string OrderId { get; set; }
    }
}
