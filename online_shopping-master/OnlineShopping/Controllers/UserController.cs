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
    public class UserController : ControllerBase
    {
        

        /// <summary>
        
        /// </summary>
        UserRepository repos = new UserRepository();
        online_shoppingContext db = new online_shoppingContext();


        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            List<User> users=repos.GetUserList();
            if(users.Count()==0)
            {
                return NotFound("No users present");

            }
            return Ok(users);
        }


        [HttpGet]
        [Route("GetUsers/{id}")]
        public IActionResult GetUsersId(int id)
        {
            User user = repos.GetUserId(id);
            if (user==null)
            {
                return NotFound($"No user with id {id} present");

            }
            return Ok(user);
        }


        [HttpPost]
        [Route("GetUsers")]
        public IActionResult GetUserDetail(User _user)
        {
            User user = repos.GetUserId(_user.UserId);
           
            return Ok(user);
        }


        [HttpPost]
        [Route("AddUser")]
       
        public IActionResult PostUser(User user)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    repos.AddUser(user);
                    return Created("Record added successfully",user);
                }
                catch(Exception ex)
                {
                    return BadRequest("User already exist");
                }
               
            }
            return BadRequest("Something went wrong while saving the record"); 
        }

        [HttpGet]
        [Route("GetUsers/email/{email}")]
        public IActionResult GetUsersEmail(string email)
        {
            User user = repos.GetUserEmail(email);
            if (user == null)
            {
                return NotFound($"No user with id {email} present");

            }
            return Ok(user);
        }


        [HttpPut]
        [Route("GetUsersEmail/{email}")]

        public IActionResult PutUsersEmailData(string email, User newuser)
        {
            User user = db.Users.Where(x => x.Email == email).FirstOrDefault();

            if(user==null)
            {
                return NotFound();
            }

            user.UserPwd = newuser.UserPwd;
            db.SaveChanges();
            return Ok();

            
           
        }

        

    }
}
