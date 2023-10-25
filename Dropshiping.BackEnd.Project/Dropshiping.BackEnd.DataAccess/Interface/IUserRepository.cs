using Dropshiping.BackEnd.Domain.UserModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dropshiping.BackEnd.DataAccess.Interface
{
    public interface IUserRepository : IRepository<User>
    {
        User LoginUser(string username, string hashedPassword);
        User GetUserByUsername(string username);
    }
}
