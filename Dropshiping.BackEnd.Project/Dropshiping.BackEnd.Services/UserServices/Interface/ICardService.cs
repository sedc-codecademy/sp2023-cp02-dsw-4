using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dropshiping.BackEnd.Dtos.UserDtos;


namespace Dropshiping.BackEnd.Services.UserServices.Interface
{
    public interface ICardService
    {
        List<CardDto> GetAll();
        CardDto GetById(string id);
        void Add(string id, AddNewCardDto addCardDto);
        void Update(CardDto cardDto);
        void DeleteById(string id);
    }
}
