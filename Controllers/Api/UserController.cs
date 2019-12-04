using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using Backend.Models;

namespace Backend.Controllers.Api
{
    public class UserController : ApiController
    {
        private ModelDBContext context;

        public UserController()
        {
            context = new ModelDBContext();
        }

        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return context.Users.ToList();
        }

    }
}
