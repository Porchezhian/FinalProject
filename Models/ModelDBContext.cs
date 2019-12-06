namespace Backend.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class ModelDBContext : DbContext
    {  
        public ModelDBContext()
            : base("name=ModelDBContext")
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }

        public virtual DbSet<User> Users { get; set; }

        public virtual DbSet<Ngo> Ngos { get; set; }

        public virtual DbSet<Request> Requests { set; get; }

        public virtual DbSet<Donation> Donations { get; set; }

        public virtual DbSet<Event> Events { get; set; }
    }
}