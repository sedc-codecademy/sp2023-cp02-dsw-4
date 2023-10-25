﻿using Dropshiping.BackEnd.Domain.ProductModels;

namespace Dropshiping.BackEnd.Domain.UserModels
{
    public class UserOrder : BaseEntity
    {
        // reletion conections
        
        public string UserId { get; set; }
        public virtual User User { get; set; }
        public string OrderId { get; set; }
        public virtual Order Order { get; set; }
    }
}
