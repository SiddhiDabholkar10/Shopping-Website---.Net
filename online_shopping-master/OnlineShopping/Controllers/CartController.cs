using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineShopping.models;
using OnlineShopping.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        CartRepository repos = new CartRepository();

        [HttpGet]
        [Route("GetAllCarts")]
        public IActionResult GetCarts()
        {
            List<Cart> carts = repos.GetAllCart().ToList();
            if (carts.Count() == 0)
            {

                return NotFound($"No cart present");
            }

            return Ok(carts);
        }

        [HttpGet]
        [Route("GetCarts/{id}")]
        public IActionResult GetCarts(int id)
        {
            List<Cart> carts = repos.GetCart(id).ToList();

            if(carts.Count()==0)
            { 
            
                return NotFound($"No cart present for user {id}");
            }

            return Ok(carts);
        }

        [HttpPost]
        [Route("AddCart")]

        public IActionResult AddCart( Cart c)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    repos.AddCart(c);
                    return Ok();
                }
                catch
                {
                    return BadRequest("Something went wrong while saving the record");

                }
            }
            return BadRequest("Something went wrong while saving the record");

        }


        [HttpDelete]
        [Route("DeleteCart/{id}")]

        public IActionResult DeleteCart(int? id)
        {
            repos.DeleteCart(id);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteCartUser/{id}")]

        public IActionResult DeleteCartuser(int? id)
        {
            repos.DeleteCartUser(id);
            return Ok();
        }


        [HttpPut]
      [Route("EditCart/{id}")]


      public IActionResult EditCart(int id, List<Cart> carts)
       {

            if (ModelState.IsValid)
            {
                repos.EditCart(id, carts);
                return Ok("Updated successfully");
            }

            return BadRequest("Failed to edit");



        }


        [HttpPut]
        [Route("EditCartQuantity/{id}")]


        public IActionResult EditCartQuantity(int id,Cart cart)
        {

            if (ModelState.IsValid)
            {
                repos.EditCart(id,cart);
                return Ok("Updated successfully");
            }

            return BadRequest("Failed to edit");



        }





    }
}
