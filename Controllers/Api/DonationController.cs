using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Backend.Models;
using System.Data.Entity;

namespace Backend.Controllers.Api
{
    public class DonationController : ApiController
    {
        private ModelDBContext context;

        public DonationController()
        {
            context = new ModelDBContext();
        }

        [HttpGet]
        public object GetDonations()
        {
            var obj = from d in context.Donations.ToList()
                      group d by new { d.Request_Id } into g
                      select new { g.Key.Request_Id, V = g.Sum(x => x.Number_of_items_Donated) };
            
            return obj;
        }

        [HttpPost]
        public IEnumerable<Donation> RequestsForUser(User user)
        {
            return context.Donations.Where(x => x.user.Id == user.Id);
        }
    }
}
