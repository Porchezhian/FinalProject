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
    public class AdminController : ApiController
    {
        private ModelDBContext context;

        public AdminController()
        {
            context = new ModelDBContext();
        }

        [HttpGet]
        public  IEnumerable<Admin> GetAdmin()
        {
            return context.Admins.ToList();
        }

        [HttpPost]
        public string CreateAdmin(Admin admin)
        {
            int count = context.Admins.Count();
            Admin element = context.Admins.FirstOrDefault(a => a.Username == admin.Username);
            if (element != null && count != 0)
            {
                return "exist";
            }
            context.Admins.Add(admin);
            context.SaveChanges();
            return "created";
        }

    }
}
