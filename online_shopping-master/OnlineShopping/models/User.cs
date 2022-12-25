using System;
using System.Collections.Generic;

#nullable disable

namespace OnlineShopping.models
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
            OrderDetails = new HashSet<OrderDetail>();
            Orders = new HashSet<Order>();
            Wishlists = new HashSet<Wishlist>();
        }

        public int UserId { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string Email { get; set; }
        public string Mob { get; set; }
        public string UserAddress { get; set; }
        public string UserPwd { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
