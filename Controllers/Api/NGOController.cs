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
    public class NGOController : ApiController
    {
        private ModelDBContext context;

        public NGOController()
        {
            context = new ModelDBContext();
        }

        [HttpGet]
        public IEnumerable<Ngo> GetNgos()
        {
            return context.Ngos.ToList();
        }
        [HttpPost]
        public Ngo GetNgoById(int id)
        {
            return context.Ngos.FirstOrDefault(x => x.Id == id);
        }
    }
}
