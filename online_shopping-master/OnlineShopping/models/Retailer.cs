using System;
using System.Collections.Generic;

#nullable disable

namespace OnlineShopping.models
{
    public partial class Retailer
    {
        public Retailer()
        {
            Products = new HashSet<Product>();
        }

        public int RetId { get; set; }
        public string RetName { get; set; }
        public string RetEmail { get; set; }
        public string RetMob { get; set; }
        public string RetLoc { get; set; }
        public string RetPwd { get; set; }
        public bool? IsAccepted { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
