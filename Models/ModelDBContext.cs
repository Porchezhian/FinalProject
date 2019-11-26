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
    }
}