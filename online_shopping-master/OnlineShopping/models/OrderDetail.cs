using System;
using System.Collections.Generic;

#nullable disable

namespace OnlineShopping.models
{
    public partial class OrderDetail
    {
        public int ItemId { get; set; }
        public int? UserId { get; set; }
        public int? ProductId { get; set; }
        public int? Quantity { get; set; }
        public int? Cost { get; set; }
        public int? OrderId { get; set; }

        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
