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
    public class EventController : ApiController
    {
        private ModelDBContext context;

        public EventController()
        {
            context = new ModelDBContext();
        }

        [HttpGet]
        public IEnumerable<Event> GetEvents()
        {
            return context.Events.ToList();
        }

        [HttpPost]
        public string StoreEvent(Event eve)
        {
            if (eve != null)
            {
                context.Events.Add(eve);
                context.SaveChanges();
                return "Event Added";
            }
            return "Not Added";
        }
        [HttpDelete]
        public string DeleteEvent(int id)
        {

            Event eve = context.Events.FirstOrDefault(x => x.Request_Id == id);
            if (eve!=null)
            {
                context.Events.Remove(eve);
                context.SaveChanges();
                return "Removed from event table";
            }
            return "Does not exist";
        }
    }
}
