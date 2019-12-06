namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateEventTable : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AddColumn("dbo.Eventlist", "Request_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Requestslist", "ngo_Id", c => c.Int());
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Requestslist", "ngo_Id");
            DropColumn("dbo.Eventlist", "RequestId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Eventlist", "RequestId", c => c.Int(nullable: false));
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int());
            AlterColumn("dbo.Requestslist", "ngo_Id", c => c.Int(nullable: false));
            DropColumn("dbo.Eventlist", "Request_Id");
            CreateIndex("dbo.Requestslist", "ngo_Id");
        }
    }
}
