namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Employee_Id = c.Int(nullable: false),
                        Employee_Name = c.String(),
                        Mobile_number = c.Double(nullable: false),
                        Email_id = c.String(),
                        Password = c.String(),
                        Date_of_Birth = c.DateTime(),
                        Employee_Photo = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
        }
    }
}
