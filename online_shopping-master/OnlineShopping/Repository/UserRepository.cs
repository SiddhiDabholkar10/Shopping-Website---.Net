using OnlineShopping.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.Repository
{
    
    public class UserRepository
    {
        online_shoppingContext db = new online_shoppingContext();

        public List<User> GetUserList()
        {
            List<User> users = db.Users.ToList();

            return users;
        }

        public User GetUserId(int id)
        {
            User user = db.Users.Where(user => user.UserId == id).FirstOrDefault();
            return user;
        }

        public User GetUserEmail(string email)
        {
            User user = db.Users.Where(user => user.Email == email).FirstOrDefault();
            return user;
        }

        public void AddUser(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }
   
    }
    
}
