using OnlineShopping.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Repository
{
    public class RetailerRepository
    {
        online_shoppingContext db = new online_shoppingContext();

        public void AddRetailer(Retailer ret)
        {
           
                db.Retailers.Add(ret);
                db.SaveChanges();
            
           
        }

        public List<Retailer> GetRetailers()
        {
            List<Retailer> retailers = db.Retailers.ToList();

            return retailers;
        }
        public Retailer GetRetailersEmail(string email)
        {
            Retailer retailer = db.Retailers.Where(x => x.RetEmail == email).FirstOrDefault();

            return retailer;
        }


        public void AddProduct(Product prod) 
        {
            db.Products.Add(prod);
            db.SaveChanges();
        }
        public List<Product> GetProducts(int id)
        {
            List<Product> products = db.Products.Where(x => x.RetId ==id ).ToList();

            return products;
        }

        public Product getProduct(int id)
        {
            Product prod = db.Products.Find(id);
            return prod;
        }

        public void EditProduct(int id, Product prod)
        {
            Product oprod = getProduct(id);
            oprod.ProductName = prod.ProductName;
            oprod.Brand = prod.Brand;
            oprod.ProdDesc = prod.ProdDesc;
            oprod.Price = prod.Price;
            oprod.CategoryId = prod.CategoryId;
            oprod.CountAvailable = prod.CountAvailable;
            db.SaveChanges();
        }

        public void EditProductRating(int id, Product prod)
        {
            Product oprod = getProduct(id);
            oprod.TotalRatings += 1;
            oprod.SumRatings += prod.SumRatings;
        
            db.SaveChanges();
        }


    }
}
