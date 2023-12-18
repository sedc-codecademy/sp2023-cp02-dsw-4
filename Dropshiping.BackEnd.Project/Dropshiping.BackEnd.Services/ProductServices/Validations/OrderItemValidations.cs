using Dropshiping.BackEnd.Dtos.OrderItemDtos;

namespace Dropshiping.BackEnd.Services.ProductServices.Validations
{
    public static class OrderItemValidations
    {
        public static void ValidateOrderItem(this AddOrderItemDto orderItem)
        {
           if(orderItem.ProductSizeId == null)
           {
                throw new ArgumentException("ProductSize id is required");
           }

           if(orderItem.Quantity < 1 || orderItem.Quantity > 100)
           {
                throw new ArgumentException("Invalid Quantity amount!");
           }
        }
    }
}
