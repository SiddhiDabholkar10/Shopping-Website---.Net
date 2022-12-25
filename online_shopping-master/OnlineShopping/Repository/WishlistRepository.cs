using Microsoft.EntityFrameworkCore;
using OnlineShopping.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Repository
{
    public class WishlistRepository
    {
        online_shoppingContext db = new online_shoppingContext();

        public List<Wishlist> GetWishlist(int id)
        {
            List<Wishlist> wish = db.Wishlists.Include("Product").Where(c => c.UserId == id).ToList();

            return wish;
        }

        public List<Wishlist> GetAllWishlist()
        {
            List<Wishlist> wish = db.Wishlists.Include("Product").ToList();

            return wish;
        }

        public void AddWishlist(Wishlist wish)
        {
            Wishlist wishlist=db.Wishlists.Where(x => x.ProductId == wish.ProductId && x.UserId == wish.UserId).FirstOrDefault();
            if (wishlist == null)
            {
                db.Wishlists.Add(wish);

                db.SaveChanges();
            }
        }

        public void DeleteWishlist(Wishlist wish)
        {

            List<Wishlist> wishes = db.Wishlists.ToList();
           
            

            foreach (Wishlist w in wishes)
            {
                if(w.UserId==wish.UserId && w.ProductId==wish.ProductId)
                db.Wishlists.Remove(w);
                db.SaveChanges();
            }
           


        }

        public void EditWishlist(int id, List<Wishlist> wishes)
        {




            foreach (Wishlist wish in wishes)
            {
                Wishlist owish = db.Wishlists.Find(wish.WishlistId);
                db.Wishlists.Remove(owish);

            }
            db.SaveChanges();



        }

    }
}
