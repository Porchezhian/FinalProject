using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    [Table("Eventlist")]
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        public int Request_Id { get; set; }
        public string Request_Title { get; set; }

        public int Ngo_Id { get; set; }
        public string Ngo_Name { get; set; }
        public int Number_of_items_Required { get; set; }

        public int Number_of_items_Donated { get; set; }
        public string category { get; set; }

        public DateTime EventDate { get; set; }

    }
}