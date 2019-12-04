namespace Backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateDonation1 : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AddColumn("dbo.Donationslist", "Request_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Requestslist", "ngo_Id", c => c.Int());
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.Requestslist", "ngo_Id");
            DropColumn("dbo.Donationslist", "RequestId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Donationslist", "RequestId", c => c.Int(nullable: false));
            DropIndex("dbo.Requestslist", new[] { "ngo_Id" });
            AlterColumn("dbo.Requestslist", "Ngo_Id", c => c.Int());
            AlterColumn("dbo.Requestslist", "ngo_Id", c => c.Int(nullable: false));
            DropColumn("dbo.Donationslist", "Request_Id");
            CreateIndex("dbo.Requestslist", "ngo_Id");
        }
    }
}
