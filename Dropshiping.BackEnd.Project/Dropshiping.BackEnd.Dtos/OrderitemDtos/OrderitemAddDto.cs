namespace Dropshiping.BackEnd.Dtos.OrderitemDtos
{
    public class OrderitemAddDto
    {
        public int Quantity { get; set; }
        public string OrderId { get; set; }
        public string ProductSizeId { get; set; }
    }
}
