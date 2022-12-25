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
    public class RetailerController : ControllerBase
    {
        RetailerRepository repos = new RetailerRepository();

        [HttpPost]
        [Route("AddRetailer")]
        public IActionResult AddRetailer(Retailer ret)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    repos.AddRetailer(ret);
                    return Created("Retailer added successfully", ret);
                }
                catch
                {
                    return BadRequest("Retailer Already Exist");

                }
            }
            return BadRequest("Something went wrong while saving the record");
        }

        [HttpGet]
        [Route("GetRetailers")]

        public IActionResult GetRetailers()
        {
            List<Retailer> retailers= repos.GetRetailers();

            if(retailers.Count()==0)
            {
                return NotFound("No retailers present");
            }
            return Ok(retailers);
        }

        [HttpGet]
        [Route("GetRetailers/email/{email}")]

        public IActionResult GetRetailersEmail(string email)
        {
            Retailer retailer = repos.GetRetailersEmail(email);

            if (retailer == null)
            {
                return NotFound("No retailers present");
            }
            return Ok(retailer);
        }


        [HttpPost]
        [Route("AddProduct/{id}")]
        public IActionResult AddProduct(int id,Product prod)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    
                    repos.AddProduct(prod);
                    return Created("Product added successfully", prod);
                }
                catch
                {
                    return BadRequest("Something went wrong while saving the record");

                }
            }
            return BadRequest("Something went wrong while saving the record");
        }

        [HttpGet]
        [Route("GetProducts/{id}")]

        public IActionResult GetProducts(int id)
        {
            List<Product> products = repos.GetProducts(id);

            if (products.Count() == 0)
            {
                return NotFound("No retailers present");
            }
            return Ok(products);
        }


        [HttpPut]
        [Route("EditProduct/{id}")]
        public IActionResult EditProduct(int id, Product prod)
        {
            if (ModelState.IsValid)
            {

                repos.EditProduct(id, prod);
                return Ok();



            }
            return BadRequest("Unable to edit the record");
        }

        [HttpPut]
        [Route("EditProductRating/{id}")]
        public IActionResult EditProductRating(int id, Product prod)
        {
            if (ModelState.IsValid)
            {

                repos.EditProductRating(id, prod);
                return Ok();



            }
            return BadRequest("Unable to edit the record");
        }


    }
    
}
