using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{

        [Table("Donationslist")]

        public class Donation
        {
            [Key]
            public int DonationId { get; set; }
            
            public int Request_Id { get; set; }
            public string Request_Title { get; set; }
            public string Ngo_Name { get; set; }
            public int Number_of_items_Required { get; set; }
            public int Number_of_items_Donated { get; set; }
            public string category { get; set; }
            public User user { get; set; }

            public Ngo ngo { get; set; }

        }
  
}