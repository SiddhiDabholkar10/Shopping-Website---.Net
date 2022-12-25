using Microsoft.EntityFrameworkCore;
using OnlineShopping.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Repository
{
    public class CartRepository
    {
        online_shoppingContext db = new online_shoppingContext();

        public List<Cart> GetCart(int id)
        {
            List<Cart> cart = db.Carts.Include("Product").Where(c => c.UserId == id).ToList();

            return cart;
        }

        public List<Cart> GetAllCart()
        {
            List<Cart> cart = db.Carts.Include("Product").ToList();

            return cart;
        }

        public void AddCart(Cart c)
        {
            db.Carts.Add(c);

            db.SaveChanges();
        }

        public void DeleteCart(int? id)
        {
            Cart carts = db.Carts.Where(x => x.CartId == id).FirstOrDefault();

            
               db.Carts.Remove(carts);
            
            db.SaveChanges();
       

        }

        public void DeleteCartUser(int? id)
        {
            List<Cart> carts = db.Carts.Where(x => x.UserId == id).ToList();

            foreach(var c in carts)
            db.Carts.Remove(c);

            db.SaveChanges();


        }

        public void EditCart(int id, List<Cart> carts)
        {
         
            


                foreach (Cart c in carts)
                {
                    Cart ocart = db.Carts.Find(c.CartId);
                    ocart.UserId = c.UserId;
                    ocart.Quantity = c.Quantity;
                    ocart.ProductId = c.ProductId;
                }
                db.SaveChanges();
           
        }

        public void EditCart(int id, Cart c)
        {




            
                Cart ocart = db.Carts.Find(c.CartId);
                ocart.UserId = c.UserId;
                ocart.Quantity = c.Quantity;
                ocart.ProductId = c.ProductId;
            
            db.SaveChanges();

        }





    }
}
