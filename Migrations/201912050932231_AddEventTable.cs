namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddEventTable : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            CreateTable(
                "dbo.Eventlist",
                c => new
                    {
                        EventId = c.Int(nullable: false, identity: true),
                        RequestId = c.Int(nullable: false),
                        Request_Title = c.String(),
                        Ngo_Id = c.Int(nullable: false),
                        Ngo_Name = c.String(),
                        Number_of_items_Required = c.Int(nullable: false),
                        Number_of_items_Donated = c.Int(nullable: false),
                        category = c.String(),
                        EventDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.EventId);
            
            AlterColumn("dbo.Requestslist", "ngo_Id", c => c.Int());
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Requestslist", "ngo_Id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int());
            AlterColumn("dbo.Requestslist", "ngo_Id", c => c.Int(nullable: false));
            DropTable("dbo.Eventlist");
            CreateIndex("dbo.Requestslist", "ngo_Id");
        }
    }
}
