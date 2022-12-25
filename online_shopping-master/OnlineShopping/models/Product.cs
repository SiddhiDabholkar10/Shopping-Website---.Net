using System;
using System.Collections.Generic;

#nullable disable

namespace OnlineShopping.models
{
    public partial class Product
    {
        public Product()
        {
            Carts = new HashSet<Cart>();
            OrderDetails = new HashSet<OrderDetail>();
            Orders = new HashSet<Order>();
            Wishlists = new HashSet<Wishlist>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Brand { get; set; }
        public string ProdDesc { get; set; }
        public int Price { get; set; }
        public int? CategoryId { get; set; }
        public int? CountAvailable { get; set; }
        public int? RetId { get; set; }
        public int? TotalRatings { get; set; }
        public int? SumRatings { get; set; }

        public virtual Category Category { get; set; }
        public virtual Retailer Ret { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
