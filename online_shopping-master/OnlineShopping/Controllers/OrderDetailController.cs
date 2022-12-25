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
    public class OrderDetailController : ControllerBase
    {
        online_shoppingContext db = new online_shoppingContext();
        [HttpGet]
        [Route("ListOrderDetail/{id}")]
        public IActionResult GetOrderdetail(int? id)
        {
            var data = from ord in db.OrderDetails.Include("Order") where ord.OrderId == id select new { OrderNumber = ord.OrderId, ProductName = ord.Product.ProductName, ProductBrand = ord.Product.Brand, Productdescription = ord.Product.ProdDesc, ProductPrice = ord.Product.Price, ProductCategory = ord.Product.Category.CategoryName, Quantity = ord.Quantity, Cost = ord.Cost };
            return Ok(data);
        }

        [HttpPost]
        [Route("AddOrderDetail")]
        public IActionResult PostOrderDetail(OrderDetail order)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    //calling a store procedure
                    db.Database.ExecuteSqlInterpolated($"AddOrderDetail {order.UserId},{order.ProductId},{order.Quantity},{order.Cost},{order.OrderId}");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
            return Created("Added succesfully", order);


        }

    }
}