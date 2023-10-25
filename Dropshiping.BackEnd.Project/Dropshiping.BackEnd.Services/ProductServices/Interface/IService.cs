using Dropshiping.BackEnd.Dtos.ProductDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.Services.ProductServices.Interface
{
    public interface IService<T>
    {
        List<T> GetAll();
        T GetById(string id);
        void Add(T productDto);
        void Update(T productDto);
        void DeleteById(string id);
    }
}
