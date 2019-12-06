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
    public class RequestController : ApiController
    {
        private ModelDBContext context;

        public RequestController()
        {
            context = new ModelDBContext();
        }

        [HttpGet]
        public IEnumerable<Request> GetRequests()
        {
            return context.Requests.ToList();
        }

        [HttpPost]
        public IEnumerable<object> RequestsForNgo(Ngo ngo)
        {

            return context.Requests.Where(x => x.Ngo_Id == ngo.Id);
        }
        [HttpDelete]
        public string DeleteRequest(int id)
        {
            Request req = context.Requests.FirstOrDefault(x => x.RequestId == id);
            if (req != null)
            {
                context.Requests.Remove(req);
                context.SaveChanges();
                return "Removed from request table";
            }
            return "Does not exist";
        }
    }
}
