using System;
using System.Collections.Generic;

#nullable disable

namespace OnlineShopping.models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetail>();
        }

        public int OrderId { get; set; }
        public DateTime? OrderTimestamp { get; set; }
        public int? TotalCost { get; set; }
        public int? UserId { get; set; }
        public int Quantity { get; set; }
        public int? ProductId { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
