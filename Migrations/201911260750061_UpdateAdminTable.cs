namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateAdminTable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Admins", "Mobile", c => c.Long(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Admins", "Mobile", c => c.Int(nullable: false));
        }
    }
}
