using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    [Table("Ngo")]
    public class Ngo
    {
        [Key]
        public int Id { get; set; }
        public string Ngo_Id { get; set; }
        public string Ngo_Location { get; set; }
        public string Ngo_Name { get; set; }
        public double Mobile_number { get; set; }
        public string Email_id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Ngo_Certificate_Photo { get; set; }
        public IEnumerable<Request> Requests { get; set; }

        public IEnumerable<Donation> Donations { get; set; }
    }
}