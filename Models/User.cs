using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        public int Id { get; set; }
        public int Employee_Id { get; set; }
        public string Employee_Name { get; set; }
        public double Mobile_number { get; set; }
        public string Email_id { get; set; }
        public string Password { get; set; }
        public Nullable<System.DateTime> Date_of_Birth { get; set; }
        public string Employee_Photo { get; set; }

        public IEnumerable<Donation> Donations { get; set; }

    }
}