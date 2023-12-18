using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Dtos.ProductDtos
{
    public class UpdateProductDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public int Discount { get; set; }
        public string Image { get; set; }
        public string SubcategoryId { get; set; }
        public string ManufacturerId { get; set; }

    }
}
