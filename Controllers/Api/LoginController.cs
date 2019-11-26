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
    public class LoginController : ApiController
    {
        private ModelDBContext context;

        public LoginController()
        {
            context = new ModelDBContext();
        }

        [HttpPost]
        public string Login(Admin admin)
        {
            Admin element = context.Admins.FirstOrDefault(a => a.Username == admin.Username && a.Password == admin.Password);
            if(element == null)
            {
                return "Username/Password does not exist";
            }
            return "logged";
        }

    }
}
