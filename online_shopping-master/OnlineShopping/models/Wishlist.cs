using System;
using System.Collections.Generic;

#nullable disable

namespace OnlineShopping.models
{
    public partial class Wishlist
    {
        public int WishlistId { get; set; }
        public int? ProductId { get; set; }
        public int? UserId { get; set; }

        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}
