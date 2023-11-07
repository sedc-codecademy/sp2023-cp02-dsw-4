using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Dtos.ProductDtos
{
    public class ProductSizeColorDto
    {
        public string Id { get; set; }
        public int Stock { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
    }
}
