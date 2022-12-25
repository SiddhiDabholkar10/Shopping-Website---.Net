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
    public class WishlistController : ControllerBase
    {
        WishlistRepository repos = new WishlistRepository();

        [HttpGet]
        [Route("GetAllWishlists")]
        public IActionResult GetWishlists()
        {
            List<Wishlist> wish = repos.GetAllWishlist().ToList();
            if (wish.Count() == 0)
            {

                return NotFound($"No wishlist present");
            }

            return Ok(wish);
        }

        [HttpGet]
        [Route("GetWishlist/{id}")]
        public IActionResult GetCarts(int id)
        {
            List<Wishlist> wish = repos.GetWishlist(id).ToList();

            if (wish.Count() == 0)
            {

                return NotFound($"No wislist present for user {id}");
            }

            return Ok(wish);
        }

        [HttpPost]
        [Route("AddWishlist")]

        public IActionResult AddWishlist(Wishlist wish)
        {
            if (ModelState.IsValid)
            {
                try
                {
                 
                        repos.AddWishlist(wish);
                    return Ok();
                    

                }
                catch
                {
                    return BadRequest("Something went wrong while saving the record");

                }
            }
            return BadRequest("Something went wrong while saving the record");

        }


        [HttpPost]
        [Route("DeleteWishlist")]

        public IActionResult PostDeleteWishlist(Wishlist wish)
        {
            
            repos.DeleteWishlist(wish);
            return Ok();
        }


        [HttpPut]
        [Route("RemoveFromWishlist/{id}")]


        public IActionResult EditWishlist(int id, List<Wishlist> wish)
        {
            if (ModelState.IsValid)
            {
                repos.EditWishlist(id, wish);

                return Ok("Updated successfully");
            }

            return BadRequest("Something went wrong");
        }


    }
}
