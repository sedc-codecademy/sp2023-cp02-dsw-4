using Dropshiping.BackEnd.Domain.ProductModels;
using Dropshiping.BackEnd.Dtos.ProductDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.DataAccess.Interface
{
    public interface IProductRepository : IRepository<Product>
    {
        List<Product> GetAllDiscountedProducts();
        List<Product> GetAllMostPopularProducts();
        List<Product> GetAllTopRatedProducts();
        List<Product> GetAllNewProducts();
        List<Product> GetSearchedProductsByName(string name);
        List<Product> GetSearchedProducts();

    }
}
