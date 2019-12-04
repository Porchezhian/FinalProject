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
    }
}
