using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Domain.ProductModels
{
    public class Color : BaseEntity
    {
        public string Name { get; set; }
        public virtual IEnumerable<ProductSize> ProductSizes { get; set; }
    }
}
