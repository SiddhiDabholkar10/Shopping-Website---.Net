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
    public class OrderController : ControllerBase
    {
        online_shoppingContext db = new online_shoppingContext();

        [HttpGet]
        [Route("GetOrder/{id}")]
        public IActionResult GetOrder(int? id)
        {
            var data = from ord in db.Orders.Include("Product") where ord.UserId == id select ord;
            return Ok(data);
        }
        [HttpGet]
        [Route("GetOrderRet/{id}")]
        public IActionResult GetOrderRet(int? id)
        {
            var data = from ord in db.Orders.Include("Product") where ord.Product.RetId == id select ord;
            return Ok(data);
        }
        [HttpPost]
        [Route("AddOrder")]
        public IActionResult PostOrder(Order order)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    //calling a store procedure
                    db.Database.ExecuteSqlInterpolated($"AddOrder {order.OrderTimestamp},{order.TotalCost},{order.UserId},{order.Quantity},{order.ProductId}");
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