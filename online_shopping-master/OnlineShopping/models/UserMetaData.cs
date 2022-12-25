using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineShopping.models
{
    public class UserMetaData
    {
        public int UserId { get; set; }
        [Required(ErrorMessage ="Name cannot be blank")]
        public string Fname { get; set; }
        public string Lname { get; set; }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public string Mob { get; set; }
        public string UserAddress { get; set; }
        
        public string UserPwd { get; set; }

    }
    [ModelMetadataType(typeof(UserMetaData))]
    public partial class User { }
}
