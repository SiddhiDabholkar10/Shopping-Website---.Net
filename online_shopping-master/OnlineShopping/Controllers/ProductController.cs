using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineShopping.models;
using Microsoft.EntityFrameworkCore;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        online_shoppingContext db = new online_shoppingContext();
        [HttpGet]
        [Route("GetProducts")]
        public IActionResult GetProducts()
        {

            var data = from prod in db.Products where prod.RetId != null && prod.CountAvailable>0 select prod;

            return Ok(data);
        }

        [HttpGet]
        [Route("GetProducts/{id}")]
        public IActionResult GetProducts(int? id)
        {
            //var data = from prod in db.Products where prod.ProductId == id && prod.RetId != null select prod;
            Product prod = db.Products.Where(x => x.ProductId == id && x.RetId != null).FirstOrDefault();
            if (prod == null)
            {
                return BadRequest($"Product {id} does not exist");
            }
            return Ok(prod);
        }
       

        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            var data = from cat in db.Categories select new { CategoryId = cat.CategoryId, CategoryName = cat.CategoryName };
            return Ok(data);
        }
        [HttpGet]
        [Route("GetBrand/{bname}")]
        public IActionResult GetBrand(string? bname)
        {
            var data = from prod in db.Products where prod.Brand == bname select new { ProductBrand = prod.Brand, ProductName = prod.ProductName, ProductDescription = prod.ProdDesc, Price = prod.Price };
            return Ok(data);
        }

        [HttpPut]
        [Route("EditCount/{id}")]
        public IActionResult PutProductCount(int id,Cart c)
        {
            Product oprod = db.Products.Find(id);
            int count = (int)c.Quantity;
            oprod.CountAvailable -= count;
            db.SaveChanges();
            return Ok();
        }



    }
}